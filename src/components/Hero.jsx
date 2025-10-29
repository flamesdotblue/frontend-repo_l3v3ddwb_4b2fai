import { Star, Rocket } from "lucide-react";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Grainy gradient overlays (non-blocking) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_20%,rgba(99,102,241,0.25),transparent),radial-gradient(500px_250px_at_80%_60%,rgba(56,189,248,0.18),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-slate-950/20 to-slate-950/60" />
      </div>

      {/* Top-left badge + headline CTA overlay (kept minimal since central panel handles forms) */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-start justify-between px-6 py-6">
        <div className="mt-4 max-w-xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/90 backdrop-blur">
            <Star className="h-4 w-4 text-yellow-300" /> Certifié Qualiopi
          </div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white drop-shadow sm:text-5xl">
            Formation1.fr
          </h1>
          <p className="mt-2 text-sky-200/90">
            Plateforme d'excellence pour la formation professionnelle et l'employabilité.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#inscription"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 font-semibold text-white shadow hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400"
            >
              <Rocket className="h-5 w-5" /> Commencer
            </a>
            <a
              href="#catalogue"
              className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
            >
              Catalogue 3 colonnes
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
