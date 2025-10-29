import { useMemo, useState } from "react";
import { Building2, GraduationCap, Calculator, Send } from "lucide-react";

function TabButton({ active, onClick, icon: Icon, children }) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg px-4 py-2 font-medium transition ${
        active ? "bg-white text-slate-900" : "bg-white/10 text-white hover:bg-white/20"
      }`}
    >
      <Icon className="h-4 w-4" /> {children}
    </button>
  );
}

export default function FormsHub() {
  const [tab, setTab] = useState("inscription");

  return (
    <section id="inscription" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-6 flex flex-wrap gap-3">
          <TabButton active={tab === "inscription"} onClick={() => setTab("inscription")} icon={Building2}>
            Inscription Entreprise
          </TabButton>
          <TabButton active={tab === "matching"} onClick={() => setTab("matching")} icon={GraduationCap}>
            Matching Apprenti-Entreprise
          </TabButton>
          <TabButton active={tab === "simulateur"} onClick={() => setTab("simulateur")} icon={Calculator}>
            Simulateur Budget OPCO
          </TabButton>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-white shadow-xl backdrop-blur">
          {tab === "inscription" && <CompanySignup />}
          {tab === "matching" && <ApprenticeMatching />}
          {tab === "simulateur" && <BudgetSimulator />}
        </div>
      </div>
    </section>
  );
}

function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-medium text-white/90">
      {children}
    </label>
  );
}

function Input(props) {
  return (
    <input
      {...props}
      className={`w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-white placeholder-white/50 outline-none ring-sky-400 transition focus:ring-2 ${
        props.className || ""
      }`}
    />
  );
}

function Select({ children, ...props }) {
  return (
    <select
      {...props}
      className="w-full rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-white outline-none ring-sky-400 transition focus:ring-2"
    >
      {children}
    </select>
  );
}

function CompanySignup() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h3 className="text-xl font-bold">Inscription Entreprise</h3>
      <p className="mb-6 mt-1 text-white/80">Profitez des aides à la formation pour vos salariés.</p>
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="societe">Nom de l'entreprise</Label>
          <Input id="societe" name="societe" placeholder="Ex: Dupond SAS" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="emailPro">Email professionnel</Label>
          <Input id="emailPro" type="email" name="emailPro" placeholder="vous@entreprise.fr" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="secteur">Secteur d'activité</Label>
          <Input id="secteur" name="secteur" placeholder="Ex: Industrie, Service..." />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="masse">Masse salariale (€)</Label>
          <Input id="masse" name="masse" type="number" min="0" step="1000" placeholder="200000" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="nb">Nb salariés</Label>
          <Input id="nb" name="nb" type="number" min="0" step="1" placeholder="25" />
        </div>
        <div className="md:col-span-2">
          <button className="inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-2.5 font-semibold text-white hover:bg-sky-500">
            <Send className="h-4 w-4" /> S'inscrire et profiter des aides
          </button>
        </div>
      </form>
      {submitted && (
        <div className="mt-4 rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200">
          Merci, votre demande a été enregistrée. Notre équipe vous recontacte sous 24h.
        </div>
      )}
    </div>
  );
}

function ApprenticeMatching() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div>
      <h3 className="text-xl font-bold">Matching Apprenti-Entreprise</h3>
      <p className="mb-6 mt-1 text-white/80">Trouvez l'entreprise ou l'apprenti idéal selon votre objectif.</p>
      <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="nomApprenti">Nom de l'apprenti</Label>
          <Input id="nomApprenti" name="nomApprenti" placeholder="Ex: Lina Martin" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="emailApprenti">Email de l'apprenti</Label>
          <Input id="emailApprenti" type="email" name="emailApprenti" placeholder="lina@email.fr" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="entrepriseRecherchee">Entreprise recherchée (optionnel)</Label>
          <Input id="entrepriseRecherchee" name="entrepriseRecherchee" placeholder="Nom de l'entreprise" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="emailEntreprise">Email entreprise (optionnel)</Label>
          <Input id="emailEntreprise" type="email" name="emailEntreprise" placeholder="contact@societe.fr" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="secteurVise">Secteur visé</Label>
          <Input id="secteurVise" name="secteurVise" placeholder="Ex: Numérique, BTP, Santé..." />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="formationSouhaitee">Formation souhaitée</Label>
          <Input id="formationSouhaitee" name="formationSouhaitee" placeholder="Ex: Développeur Web" />
        </div>
        <div className="md:col-span-2">
          <button className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 font-semibold text-white hover:bg-emerald-400">
            <Send className="h-4 w-4" /> Trouver mon match
          </button>
        </div>
      </form>
      {submitted && (
        <div className="mt-4 rounded-lg border border-emerald-400/20 bg-emerald-400/10 p-3 text-emerald-200">
          Merci, nous vous proposerons les meilleurs matchs sous 48h.
        </div>
      )}
    </div>
  );
}

function formatCurrency(n) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(n || 0);
}

function BudgetSimulator() {
  const [masse, setMasse] = useState(0);
  const [nb, setNb] = useState(0);
  const [fne, setFne] = useState(false);
  const [email, setEmail] = useState("");

  const result = useMemo(() => {
    const masseNum = Number(masse) || 0;
    const nbNum = Number(nb) || 0;
    const opcoBase = masseNum * 0.01; // Hypothèse: 1% de la masse salariale
    const supportParSalarie = nbNum * 100; // Hypothèse d'aide unitaire
    let total = opcoBase + supportParSalarie;
    let bonusFNE = 0;
    if (fne) {
      bonusFNE = total * 0.5; // Hypothèse FNE: +50% quand éligible
      total += bonusFNE;
    }
    return { opcoBase, supportParSalarie, bonusFNE, total };
  }, [masse, nb, fne]);

  return (
    <div id="simulateur">
      <h3 className="text-xl font-bold">Simulateur Budget Formation OPCO</h3>
      <p className="mb-6 mt-1 text-white/80">Estimez rapidement votre budget éligible.</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="masse2">Masse salariale (€)</Label>
          <Input id="masse2" type="number" min="0" step="1000" value={masse} onChange={(e) => setMasse(e.target.value)} />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="nb2">Nb salariés</Label>
          <Input id="nb2" type="number" min="0" step="1" value={nb} onChange={(e) => setNb(e.target.value)} />
        </div>
        <div className="flex items-center gap-3">
          <input id="fne" type="checkbox" className="h-4 w-4" checked={fne} onChange={(e) => setFne(e.target.checked)} />
          <Label htmlFor="fne">FNE-Formation : {fne ? "Oui" : "Non"}</Label>
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="emailSimu">Email de contact</Label>
          <Input id="emailSimu" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="vous@entreprise.fr" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-4">
        <Stat title="OPCO (1%)" value={formatCurrency(result.opcoBase)} />
        <Stat title="Aide par salarié" value={formatCurrency(result.supportParSalarie)} />
        <Stat title="Bonus FNE" value={formatCurrency(result.bonusFNE)} />
        <Stat title="Budget total estimé" value={formatCurrency(result.total)} highlight />
      </div>

      <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-sky-600 px-5 py-2.5 font-semibold text-white hover:bg-sky-500">
        <Send className="h-4 w-4" /> Calculer mon budget
      </button>
    </div>
  );
}

function Stat({ title, value, highlight }) {
  return (
    <div className={`rounded-xl border p-4 ${highlight ? "border-sky-400/30 bg-sky-400/10" : "border-white/10 bg-white/5"}`}>
      <div className="text-sm text-white/70">{title}</div>
      <div className="mt-1 text-2xl font-bold text-white">{value}</div>
    </div>
  );
}
