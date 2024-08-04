import BenefitCard from "@/components/BenefitCard";
import benefitImg1 from "@/public/images/SEO-pana.svg";
import benefitImg2 from "@/public/images/growth-rafiki.svg";
import benefitImg3 from "@/public/images/search-rafiki.svg";

const Advantages = () => {
  return (
    <section className="flex items-center flex-col py-8 text-center gap-8 w-full ">
      <h2 className="text-3xl font-semibold">
        Pourquoi Ajouter Votre Entreprise à TrouvezPro ?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full mt-4">
        <BenefitCard
          title={"Augmentez le Trafic vers Votre Site"}
          image={benefitImg2}
        />
        <BenefitCard
          title={"Inscription sur un Annuaire Professionnel Fiable"}
          image={benefitImg3}
        />
        <BenefitCard
          title={"Boostez Votre Visibilité en Ligne"}
          image={benefitImg1}
        />
      </div>
    </section>
  );
};

export default Advantages;
