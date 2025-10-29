import Hero from "./components/Hero";
import Parrainage from "./components/Parrainage";
import FormsHub from "./components/FormsHub";
import { MessageCircle } from "lucide-react";

function App() {
  return (
    <div className="relative min-h-screen w-full bg-slate-950 text-white antialiased overflow-hidden">
      {/* 3D Hero background fills the screen */}
      <Hero />

      {/* Central responsive panel (no page scroll) */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-4">
        <div className="pointer-events-auto w-full max-w-6xl">
          <FormsHub />
        </div>
      </div>

      {/* Floating Parrainage badge at bottom center */}
      <div className="pointer-events-none absolute bottom-6 left-0 right-0 flex justify-center px-6">
        <div className="pointer-events-auto w-full max-w-5xl">
          <Parrainage />
        </div>
      </div>

      {/* Minimal footer inside viewport to avoid scroll */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-3 text-xs text-white/50">
        © {new Date().getFullYear()} Formation1.fr – Organisme certifié Qualiopi
      </div>

      {/* Floating WhatsApp action */}
      <a
        href="https://wa.me/33600000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 font-semibold text-white shadow-lg shadow-emerald-500/30 hover:bg-emerald-400"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-5 w-5" /> WhatsApp
      </a>
    </div>
  );
}

export default App;
