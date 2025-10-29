import Hero from "./components/Hero";
import Parrainage from "./components/Parrainage";
import FormsHub from "./components/FormsHub";
import Catalog from "./components/Catalog";
import { MessageCircle } from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white antialiased">
      <Hero />
      <Parrainage />
      <FormsHub />
      <Catalog />

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold">Formation1.fr – Qualiopi</h3>
            <p className="text-white/80">Organisme de formation professionnelle certifié Qualiopi</p>
            <p className="text-white/70">Contact : <a href="mailto:info@formation1.fr" className="underline decoration-sky-400/50 underline-offset-4">info@formation1.fr</a></p>
            <p className="text-white/60">Formation professionnelle • Financement OPCO • Aides FNE-Formation • Apprentissage • CPF</p>
            <div className="mt-4 text-xs text-white/50">© {new Date().getFullYear()} Formation1.fr • Made in Bolt</div>
          </div>
        </div>
      </footer>

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
