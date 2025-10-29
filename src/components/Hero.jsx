import { Rocket, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.25),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(16,185,129,0.2),transparent_50%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-sm text-white/90 backdrop-blur">
            <Star className="h-4 w-4 text-yellow-300" />
            Certifié Qualiopi
          </div>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
            Formation1.fr
          </h1>
          <p className="mt-2 text-lg font-medium text-sky-200">
            Transformez votre avenir professionnel
          </p>
          <p className="mt-4 max-w-2xl text-white/80">
            Accédez aux meilleures formations et bénéficiez des aides jusqu'à 5000€ par salarié. OPCO, FNE-Formation, Apprentissage, CPF — nous vous guidons à chaque étape.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#inscription" className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-3 font-semibold text-white shadow hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-400">
              <Rocket className="h-5 w-5" />
              Inscription Entreprise
            </a>
            <a href="#simulateur" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30">
              Simuler mon budget
            </a>
            <a href="#catalogue" className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-5 py-3 font-semibold text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30">
              Voir le catalogue
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
