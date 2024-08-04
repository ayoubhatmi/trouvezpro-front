import {
  Laptop,
  HeartPulse,
  Construction,
  Bus,
  Zap,
  Shirt,
  ChevronRight,
} from "lucide-react";
import CategoryCard from "../CategoryCard";
import Link from "next/link";

const Categories = () => {
  const categories = [
    {
      name: "Technologie et Informatique",
      href: "/categories/technologie-informatique",
      icon: <Laptop size={32} className="text-[#7168DB]" />,
      style: "bg-[#EEEDFB]",
    },
    {
      name: "Santé et Bien-être",
      href: "/categories/sante-bien-etre",
      icon: <HeartPulse size={32} className="text-[#FB790B]" />,
      style: "bg-[#FFF3EA]",
    },
    {
      name: "Immobilier et Construction",
      href: "/categories/immobilier-construction",
      icon: <Construction size={32} className="text-[#38DBE4]" />,
      style: "bg-[#EDFDFD]",
    },
    {
      name: "Transport et Logistique",
      href: "/categories/transport-logistique",
      icon: <Bus size={32} className="text-[#F3193C]" />,
      style: "bg-[#FEEAEC]",
    },
    {
      name: "Énergie et Environnement",
      href: "/categories/energie-environnement",
      icon: <Zap size={32} className="text-[#19CDA0]" />,
      style: "bg-[#E6FBF6]",
    },
    {
      name: "Mode et Beauté",
      href: "/categories/mode-beaute",
      icon: <Shirt size={32} className="text-[#FFB000]" />,
      style: "bg-[#FFF8E6]",
    },
  ];

  return (
    <section className="flex items-center flex-col py-8 text-center gap-8 w-full ">
      <h2 className="text-3xl font-semibold">
        Explorez les entreprises par secteurs d&#39;activité
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-4">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            category={category.name}
            href={category.href}
            icon={category.icon}
            style={category.style}
          />
        ))}
      </div>
      <Link
        href={"/categories"}
        className="flex gap-2 text-[#2457C2] underline items-center"
      >
        Voir plus <ChevronRight size={18} />
      </Link>
    </section>
  );
};

export default Categories;
