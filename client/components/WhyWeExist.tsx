"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const problems = [
  "No capital-efficient way to scale across borders.",
  "Product innovation has globalized. Distribution hasn't.",
  "Consultants give strategy with no execution.",
  "SaaS tools give data with no ownership. Neither delivers revenue.",
];

const solutions = [
  "AI-powered GTM hub drives scale from India.",
  "Regional human pods execute last-mile conversion.",
  "Revenue-linked model — aligned incentives.",
  "Capital-efficient international expansion.",
  "Predictable global revenue, repeatable engine.",
];

const outcomes = [
  { word: "Traction.", accent: false },
  { word: "Revenue.", accent: false },
  { word: "Global Scale.", accent: true },
];

const H = 80;
const MID_Y = 40;
const R = 20;

function getPath(w: number) {
  const sx = w * 0.75;
  const ex = w * 0.5;
  return `M ${sx} 0 L ${sx} ${MID_Y - R} Q ${sx} ${MID_Y} ${sx - R} ${MID_Y} L ${ex + R} ${MID_Y} Q ${ex} ${MID_Y} ${ex} ${MID_Y + R} L ${ex} ${H}`;
}

function ConnectorBeam() {
  const svgRef = useRef<SVGSVGElement>(null);
  const measureRef = useRef<SVGPathElement>(null);
  const [state, setState] = useState({ svgWidth: 0, pathLength: 0 });

  useEffect(() => {
    const update = () => {
      if (!svgRef.current || !measureRef.current) return;
      const w = svgRef.current.clientWidth;
      measureRef.current.setAttribute("d", getPath(w));
      setState({ svgWidth: w, pathLength: measureRef.current.getTotalLength() });
    };
    const ro = new ResizeObserver(update);
    if (svgRef.current) ro.observe(svgRef.current);
    update();
    return () => ro.disconnect();
  }, []);

  const { svgWidth, pathLength } = state;
  const d = svgWidth > 0 ? getPath(svgWidth) : "";
  const segLen = pathLength * 0.28;

  return (
    <svg
      ref={svgRef}
      className="w-full hidden lg:block"
      height={H}
      style={{ overflow: "visible" }}
    >
      {/* Invisible path used only for getTotalLength */}
      <path ref={measureRef} fill="none" stroke="none" />

      {/* Static rail */}
      <path
        d={d}
        fill="none"
        stroke="rgba(229,67,255,0.12)"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Animated beam segment */}
      {pathLength > 0 && (
        <motion.path
          key={pathLength}
          d={d}
          fill="none"
          stroke="#E543FF"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={`${segLen} ${pathLength}`}
          animate={{ strokeDashoffset: [0, -pathLength] }}
          transition={{ duration: 0.7, repeat: Infinity, ease: "linear" }}
          style={{ filter: "drop-shadow(0 0 4px rgba(229,67,255,0.7))" }}
        />
      )}
    </svg>
  );
}

export default function WhyWeExist() {
  return (
    <section className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="mx-auto max-w-[1400px] px-6 pt-16 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pt-20 lg:pb-32">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase mb-5">
            The Problem
          </p>
          <h2 className="text-[2.6rem] font-medium leading-[1.04] tracking-tight text-[#f0f0f0] sm:text-5xl sm:leading-[1.1]">
            Great innovations stay{" "}
            <span style={{ color: "#E543FF" }}>trapped locally</span>.
          </h2>
          <p className="mt-5 text-neutral-500 text-sm leading-7">
            Digeto exists to bridge the gap — giving companies the execution infrastructure to scale globally without the traditional overhead.
          </p>
        </div>

        {/* Problem / Solution — narrower and centered */}
        <div className="grid grid-cols-1 gap-3 max-w-3xl mx-auto lg:grid-cols-2">

          {/* Problem — muted */}
          <div
            className="rounded-2xl border p-6 sm:p-8 lg:p-10"
            style={{ borderColor: "rgba(255,255,255,0.06)", background: "#0f0f11" }}
          >
            <p className="text-xs font-medium tracking-[0.18em] text-neutral-600 uppercase mb-8">
              The Problem
            </p>
            <ul className="space-y-4">
              {problems.map((p) => (
                <li key={p} className="flex items-center gap-3">
                  <span className="h-[3px] w-[3px] shrink-0 rounded-full bg-neutral-600" />
                  <span className="text-neutral-500 text-sm leading-6">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solution — prominent */}
          <div
            className="rounded-2xl border p-6 sm:p-8 lg:p-10"
            style={{
              borderColor: "rgba(229,67,255,0.18)",
              background: "rgba(229,67,255,0.04)",
              boxShadow: "0 0 60px rgba(229,67,255,0.07), inset 0 1px 0 rgba(229,67,255,0.1)",
            }}
          >
            <p
              className="text-xs font-medium tracking-[0.18em] uppercase mb-8"
              style={{ color: "#E543FF" }}
            >
              The Solution
            </p>
            <ul className="space-y-4">
              {solutions.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <span className="h-[3px] w-[3px] shrink-0 rounded-full" style={{ background: "#E543FF" }} />
                  <span className="text-[#f0f0f0] text-sm leading-6">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Animated L-shaped beam connector */}
        <ConnectorBeam />

        {/* Outcome — centered, below the beam with breathing room */}
        <div className="text-center pt-8">
          <p className="text-xs font-medium tracking-[0.18em] text-neutral-500 uppercase mb-8">
            The Outcome
          </p>
          <div className="flex flex-col items-center gap-3">
            {outcomes.map(({ word, accent }) => (
              <p
                key={word}
                className="text-2xl sm:text-3xl font-medium tracking-tight"
                style={{ color: accent ? "#E543FF" : "#f0f0f0" }}
              >
                {word}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
