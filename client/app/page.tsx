import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSolver from "@/components/ProblemSolver";
import { StripedPattern } from "@/components/magicui/striped-pattern";

export default function Home() {
  return (
    <>
      <div className="relative overflow-hidden">
        <StripedPattern className="absolute inset-0 z-0 text-violet-400/50 [mask-image:radial-gradient(600px_circle_at_50%_40%,white,transparent)]" />
        <div className="relative z-10">
          <Navbar />
          <Hero />
        </div>
      </div>
      <ProblemSolver />
      <div style={{ height: "100vh" }} className="bg-background" />
    </>
  );
}
