import PageHeader from "@/components/PageHeader";
import { Pagination } from "@/components/Pagination";
import Link from "next/link";

const page = () => {
  const categories = [
    {
      name: "Technologie et Informatique",
      href: "/categories/technologie",
    },
    {
      name: "Santé et Bien-être",
      href: "/categories/sante",
    },
    {
      name: "Immobilier et Construction",
      href: "/categories/immobilier",
    },
    {
      name: "Transport et Logistique",
      href: "/categories/transport",
    },
    {
      name: "Énergie et Environnement",
      href: "/categories/energie",
    },
    {
      name: "Mode et Beauté",
      href: "/categories/mode-beaute",
    },
    {
      name: "Éducation et Formation",
      href: "/categories/education",
    },
    {
      name: "Finance et Investissement",
      href: "/categories/finance",
    },
    {
      name: "Arts et Culture",
      href: "/categories/arts-culture",
    },
    {
      name: "Tourisme et Voyages",
      href: "/categories/tourisme",
    },
    {
      name: "Alimentation et Boissons",
      href: "/categories/alimentation",
    },
    {
      name: "Sport et Loisirs",
      href: "/categories/sport-loisirs",
    },
    {
      name: "Services Juridiques",
      href: "/categories/services-juridiques",
    },
    {
      name: "Automobile et Mécanique",
      href: "/categories/automobile",
    },
    {
      name: "Marketing et Publicité",
      href: "/categories/marketing",
    },
    {
      name: "Événementiel et Organisation",
      href: "/categories/evenementiel",
    },
    {
      name: "Juridique et Conformité",
      href: "/categories/juridique",
    },
    {
      name: "Musique et Divertissement",
      href: "/categories/musique",
    },
    {
      name: "Gestion de Projet",
      href: "/categories/gestion-projet",
    },
    {
      name: "Développement Personnel",
      href: "/categories/developpement-personnel",
    },
    {
      name: "Commerce et Vente",
      href: "/categories/commerce",
    },
    {
      name: "Télécommunications",
      href: "/categories/telecommunications",
    },
    {
      name: "Recherche et Développement",
      href: "/categories/recherche",
    },
    {
      name: "Sécurité et Protection",
      href: "/categories/securite",
    },
    {
      name: "Construction et Rénovation",
      href: "/categories/construction-renovation",
    },
    {
      name: "Animalerie et Animaux de Compagnie",
      href: "/categories/animalerie",
    },
    {
      name: "Gastronomie et Cuisine",
      href: "/categories/gastronomie",
    },
    {
      name: "Services à Domicile",
      href: "/categories/services-domicile",
    },
    {
      name: "Psychologie et Coaching",
      href: "/categories/psychologie",
    },
    {
      name: "B2B et B2C",
      href: "/categories/b2b-b2c",
    },
    {
      name: "Économie Circulaire",
      href: "/categories/economie-circulaire",
    },
    {
      name: "Infrastructures et Equipements",
      href: "/categories/infrastructures",
    },
    {
      name: "Ressources Humaines",
      href: "/categories/ressources-humaines",
    },
    {
      name: "Technologies de l&#39;Information et Communication",
      href: "/categories/tic",
    },
  ];

  return (
    <>
      <PageHeader
        title="Catégories"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Catégories" }]}
      />
      <div className="flex flex-col py-8 gap-8 w-full items-center">
        {/* <h2 className="sm:text-3xl text-2xl font-bold text-[#03346E] text-center">
          Explorez les Entreprises par Secteurs d&#39;Activité
        </h2> */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {categories.map((category, index) => (
            <li key={index}>
              <Link
                href={category.href}
                className="flex gap-4 rounded-lg border bg-card text-card-foreground shadow-sm p-4 items-center text-lg font-medium"
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>

        <Pagination />
      </div>
    </>
  );
};

export default page;
