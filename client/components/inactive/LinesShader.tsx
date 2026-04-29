"use client";

import { useEffect, useRef } from "react";

const vertexShaderSource = `
  attribute vec2 position;
  void main() {
    gl_Position = vec4(position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  #extension GL_OES_standard_derivatives : enable
  precision highp float;
  uniform float uTime;
  uniform vec2 uResolution;

  void main() {
    vec2 uv = gl_FragCoord.xy / uResolution.xy;
    float aspect = uResolution.x / uResolution.y;

    // 1. COORDINATE SYSTEM
    // phase: smooth 0→2→0 oscillation
    float phase = 1.0 - cos(uTime * 0.1);

    // Bottom sweeps RIGHT (~50% viewport width)
    float xPos = uv.x * aspect + (phase * 0.45) * (1.0 - uv.y);

    // Top rises as bottom sweeps right
    float yPos = uv.y - (phase * 0.2) * uv.y;

    // 2. ADJUSTED EXPONENTIAL CURVE (y = e^x)
    // xShift=0.8 keeps the curve lower so it exits the top near the right edge,
    // filling the top-right corner instead of leaving it empty.
    float k = 1.4;         // Slightly gentler slope for broader coverage
    float scale = 0.35;    // Higher multiplier so bands reach the top-right
    float xShift = 0.8;    // Rise delayed to right side — exits screen near right edge
    
    float rightLift = smoothstep(aspect * 0.58, aspect, xPos) * (0.03 + 0.015 * sin(uTime * 0.14));
    float curveY = (exp((xPos - xShift) * k) - 1.0) * scale + rightLift;
    
    // 3. EXPONENTIAL DERIVATIVE (Slope)
    float derivative = scale * k * exp((xPos - xShift) * k);

    // 4. PERPENDICULAR DISTANCE (Uniform Width Fix)
    float thicknessFactor = sqrt(1.0 + derivative * derivative);
    float axis = (yPos - curveY) / thicknessFactor;

    // Subtle wave logic
    axis += (sin(xPos * 3.5 - uTime * 0.18) * 0.022) / thicknessFactor;

    // 5. Breathing Sweep
    float sweep = sin(uTime * 0.09) * 0.034;
    float basePos = axis - sweep;

    // 6. Colors (#E543FF Palette — dark mode)
    vec3 bg = vec3(0.039, 0.039, 0.047); // #0a0a0c
    vec3 primary = vec3(0.898, 0.263, 1.0);

    vec3 col1 = mix(bg, primary, 0.15); 
    vec3 col2 = mix(bg, primary, 0.35); 
    vec3 col3 = mix(bg, primary, 0.60); 
    vec3 col4 = mix(bg, primary, 0.80); 
    vec3 col5 = primary; 

    // 7. Uniform Width Strips — subtle expansion during sweep
    float expand = 1.0 + phase * 0.8;
    float w1 = (0.012 + sin(uTime * 0.18) * 0.005) * expand;
    float w2 = (0.020 + sin(uTime * 0.24) * 0.008) * expand;
    float w3 = (0.030 + sin(uTime * 0.3) * 0.011) * expand;
    float w4 = (0.040 + sin(uTime * 0.36) * 0.014) * expand;
    float w5 = (0.065 + sin(uTime * 0.42) * 0.018) * expand;
    
    float off1 = 0.0;
    float off2 = off1 - w1;
    float off3 = off2 - w2;
    float off4 = off3 - w3;
    float off5 = off4 - w4;
    float offEnd = off5 - w5;

    float edge = max(fwidth(basePos) * 1.25, 1.0 / uResolution.y);

    // 8. Stacking Logic
    float m1 = smoothstep(off1 + edge, off1 - edge, basePos);
    float m2 = smoothstep(off2 + edge, off2 - edge, basePos);
    float m3 = smoothstep(off3 + edge, off3 - edge, basePos);
    float m4 = smoothstep(off4 + edge, off4 - edge, basePos);
    float m5 = smoothstep(off5 + edge, off5 - edge, basePos);
    float mEnd = smoothstep(offEnd + edge, offEnd - edge, basePos);

    vec3 finalColor = bg;
    finalColor = mix(finalColor, col1, m1);
    finalColor = mix(finalColor, col2, m2);
    finalColor = mix(finalColor, col3, m3);
    finalColor = mix(finalColor, col4, m4);
    finalColor = mix(finalColor, col5, m5); 
    finalColor = mix(finalColor, bg, mEnd);

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type)!;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  return shader;
}

export function LinesShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl", {
      antialias: true,
      alpha: true,
      premultipliedAlpha: true,
    });
    if (!gl) return;

    gl.getExtension("OES_standard_derivatives");

    const program = gl.createProgram()!;
    gl.attachShader(program, createShader(gl, gl.VERTEX_SHADER, vertexShaderSource));
    gl.attachShader(program, createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource));
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const uTimeLoc = gl.getUniformLocation(program, "uTime");
    const uResLoc = gl.getUniformLocation(program, "uResolution");

    let rafId: number;
    let lastWidth = 0;
    let lastHeight = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 3);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const displayWidth = Math.round(w * dpr);
      const displayHeight = Math.round(h * dpr);

      if (lastWidth !== displayWidth || lastHeight !== displayHeight) {
        lastWidth = displayWidth;
        lastHeight = displayHeight;
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, displayWidth, displayHeight);
      }
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    const render = (time: number) => {
      resize();

      gl.uniform1f(uTimeLoc, time * 0.001);
      gl.uniform2f(uResLoc, lastWidth, lastHeight);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      rafId = requestAnimationFrame(render);
    };

    rafId = requestAnimationFrame(render);
    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-x-0 top-0 z-0 h-screen w-full pointer-events-none" />;
}
