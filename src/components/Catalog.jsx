import { GraduationCap } from "lucide-react";

const distance = [
  {
    title: "Développeur Web",
    duration: "12 mois",
    level: "Bac+2",
    desc: "Apprenez à créer des sites web modernes avec HTML, CSS, JavaScript, React et Node.js",
  },
  { title: "Data Analyst", duration: "8 mois", level: "Bac+3/4", desc: "Maîtrisez l'analyse de données avec Python, SQL, et la visualisation de données" },
  { title: "Chef de Projet Digital", duration: "10 mois", level: "Bac+5", desc: "Pilotez des projets digitaux de A à Z avec méthodologies agiles" },
  { title: "Designer UX/UI", duration: "10 mois", level: "Bac+3/4", desc: "Créez des expériences utilisateur exceptionnelles" },
  { title: "Développeur Python", duration: "12 mois", level: "Bac+2", desc: "Maîtrisez Python pour le développement web et data" },
  { title: "Community Manager", duration: "6 mois", level: "Bac+2", desc: "Gérez la présence digitale des marques sur les réseaux sociaux" },
  { title: "Marketing Digital", duration: "8 mois", level: "Bac+3/4", desc: "Élaborez des stratégies marketing digitales performantes" },
  { title: "Développeur Mobile", duration: "12 mois", level: "Bac+3/4", desc: "Créez des applications iOS et Android" },
  { title: "Cybersécurité", duration: "10 mois", level: "Bac+5", desc: "Protégez les systèmes d'information contre les cyberattaques" },
  { title: "Architecte Logiciel", duration: "12 mois", level: "Bac+5", desc: "Concevez des architectures logicielles robustes et évolutives" },
  { title: "DevOps", duration: "10 mois", level: "Bac+3/4", desc: "Automatisez le déploiement et la gestion des infrastructures" },
  { title: "Intelligence Artificielle", duration: "12 mois", level: "Bac+5", desc: "Développez des solutions d'IA et de Machine Learning" },
  { title: "Product Manager", duration: "10 mois", level: "Bac+5", desc: "Définissez la vision produit et la roadmap" },
  { title: "Développeur Java", duration: "12 mois", level: "Bac+3/4", desc: "Maîtrisez Java et l'écosystème Spring" },
  { title: "Consultant SEO", duration: "8 mois", level: "Bac+3/4", desc: "Optimisez le référencement naturel des sites web" },
];

const obligatoires = [
  { title: "SST - Santé Sécurité au Travail", duration: "2 jours", level: "Initial", desc: "Formation obligatoire pour les membres du CHSCT et responsables sécurité" },
  { title: "Habilitation Électrique", duration: "3 jours", level: "Initial", desc: "Formation obligatoire pour travailler sur ou à proximité d'installations électriques" },
  { title: "CACES R489 (Chariots)", duration: "5 jours", level: "Initial", desc: "Certificat d'aptitude à la conduite en sécurité des chariots élévateurs" },
  { title: "Hygiène Alimentaire (HACCP)", duration: "14h", level: "Initial", desc: "Formation obligatoire pour la restauration commerciale" },
  { title: "Permis d'Exploitation", duration: "20h", level: "Initial", desc: "Formation obligatoire pour ouvrir un débit de boissons" },
  { title: "Agent de Sécurité (CQP APS)", duration: "175h", level: "Initial", desc: "Qualification obligatoire pour exercer la sécurité privée" },
  { title: "SSIAP 1 (Incendie)", duration: "67h", level: "Initial", desc: "Formation obligatoire pour agent de service de sécurité incendie" },
  { title: "Conduite d'Engins de Chantier", duration: "5 jours", level: "Initial", desc: "CACES pour la conduite d'engins de chantier" },
  { title: "Échafaudage", duration: "3 jours", level: "Initial", desc: "Formation obligatoire au montage et utilisation d'échafaudages" },
  { title: "Travail en Hauteur", duration: "2 jours", level: "Initial", desc: "Formation sécurité pour travaux en hauteur avec port du harnais" },
  { title: "Transport de Matières Dangereuses (ADR)", duration: "3 jours", level: "Initial", desc: "Formation obligatoire pour le transport de marchandises dangereuses" },
  { title: "Pont Roulant", duration: "2 jours", level: "Initial", desc: "Formation à la conduite de ponts roulants et portiques" },
  { title: "RSE - Responsabilité Sociétale des Entreprises", duration: "2 jours", level: "Initial", desc: "Formation aux enjeux et obligations RSE" },
  { title: "RGPD et Protection des Données", duration: "1 jour", level: "Initial", desc: "Formation obligatoire à la protection des données personnelles" },
  { title: "Prévention des Risques Psychosociaux", duration: "2 jours", level: "Initial", desc: "Formation obligatoire pour les managers et RH" },
];

const emploi = [
  { title: "Assistant Ressources Humaines", duration: "12 mois", level: "Bac+2", desc: "Gérez l'administration du personnel et le recrutement" },
  { title: "Conseiller en Insertion Professionnelle", duration: "8 mois", level: "Bac+2", desc: "Accompagnez les demandeurs d'emploi vers l'insertion" },
  { title: "Chargé d'Exploitation Transport", duration: "10 mois", level: "Bac+2", desc: "Organisez et optimisez les flux de transport" },
  { title: "Gestionnaire de Paie", duration: "12 mois", level: "Bac+2", desc: "Établissez les bulletins de salaire et déclarations sociales" },
  { title: "Responsable de Petite Entreprise", duration: "12 mois", level: "Bac+3/4", desc: "Pilotez une TPE/PME au quotidien" },
  { title: "Secrétaire Assistant", duration: "8 mois", level: "Bac", desc: "Assurez l'assistanat et le secrétariat polyvalent" },
  { title: "Technicien Helpdesk", duration: "8 mois", level: "Bac+2", desc: "Assurez le support informatique de niveau 1 et 2" },
  { title: "Chargé de Clientèle Banque", duration: "10 mois", level: "Bac+2", desc: "Conseillez les clients en produits bancaires" },
  { title: "Assistant Manager d'Unité Marchande", duration: "12 mois", level: "Bac+2", desc: "Gérez un point de vente et animez une équipe" },
  { title: "Négociateur Immobilier", duration: "8 mois", level: "Bac+2", desc: "Vendez et louez des biens immobiliers" },
  { title: "Comptable Assistant", duration: "12 mois", level: "Bac+2", desc: "Tenez la comptabilité générale d'une entreprise" },
  { title: "Préparateur de Commandes", duration: "6 mois", level: "CAP/BEP", desc: "Préparez et expédiez les commandes en entrepôt" },
  { title: "Employé Commercial", duration: "6 mois", level: "CAP/BEP", desc: "Vendez en magasin et assurez la mise en rayon" },
  { title: "Agent de Maintenance", duration: "10 mois", level: "Bac+2", desc: "Assurez la maintenance préventive et curative" },
  { title: "Animateur Socioculturel", duration: "12 mois", level: "Bac+2", desc: "Concevez et animez des projets d'animation" },
  { title: "Technicien de Spectacle", duration: "10 mois", level: "Bac+2", desc: "Assurez la régie technique de spectacles" },
];

function Section({ id, title, items, highlight }) {
  return (
    <div id={id} className="mt-12">
      <div className="mb-4 flex items-center gap-2">
        <GraduationCap className={`h-5 w-5 ${highlight ? "text-sky-300" : "text-white"}`} />
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((c) => (
          <article key={c.title} className="group rounded-xl border border-white/10 bg-white/5 p-5 text-white shadow backdrop-blur transition hover:border-sky-400/30 hover:bg-sky-400/10">
            <div className="flex items-center justify-between">
              <h4 className="text-lg font-semibold">{c.title}</h4>
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs text-white/80">{c.level}</span>
            </div>
            <p className="mt-2 text-sm text-white/80">{c.desc}</p>
            <div className="mt-3 flex items-center gap-3 text-sm text-white/70">
              <span className="rounded-md border border-white/10 px-2 py-1">{c.duration}</span>
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center rounded-lg bg-sky-600 px-4 py-2 font-semibold text-white hover:bg-sky-500">
              Demander cette formation
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

export default function Catalog() {
  return (
    <section id="catalogue" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <header className="max-w-2xl">
          <h2 className="text-3xl font-extrabold text-white">Catalogue de Formations Détaillé</h2>
          <p className="mt-2 text-white/80">Du numérique aux obligations réglementaires, trouvez la formation adaptée à votre besoin.</p>
        </header>

        <Section id="distance" title="Formations à Distance" items={distance} highlight />
        <Section id="obligatoires" title="Formations Obligatoires" items={obligatoires} />
        <Section id="emploi" title="Formations Emploi" items={emploi} />
      </div>
    </section>
  );
}
