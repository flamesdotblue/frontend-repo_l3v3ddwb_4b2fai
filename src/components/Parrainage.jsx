import { Gift } from "lucide-react";

export default function Parrainage() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-white shadow-xl backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-sm text-emerald-300">
                <Gift className="h-4 w-4" /> Programme Parrainage
              </div>
              <h3 className="mt-3 text-2xl font-bold">200€ par entreprise formée parrainée</h3>
              <p className="mt-2 max-w-2xl text-white/80">
                Recommandez Formation1.fr à vos partenaires. Pour chaque entreprise parrainée qui forme ses équipes, recevez une prime de 200€.
              </p>
            </div>
            <a href="#inscription" className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-5 py-3 font-semibold text-white shadow hover:bg-emerald-400">
              Parrainer maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
