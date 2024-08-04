import Image from "next/image";
import cover from "@/public/images/cover.png";
import HeaderCard from "./HeaderCard";
import AboutCard from "./AboutCard";
import LegalInfoCard from "./LegalInfoCard";
import ContactCard from "./ContactCard";
import AdresseCard from "./AdresseCard";
import OpeningTimes from "./OpeningTimes";
import CompanyCard from "@/components/CompanyCard";

const CompanyPage = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center py-8">
      <Image src={cover} className="rounded-md hidden sm:flex" />
      <div className="sm:max-w-4xl w-full flex relative flex-col gap-4 sm:top-[-5rem]">
        <HeaderCard />
        <AboutCard />
        <LegalInfoCard />
        <div className="w-full flex flex-col gap-4 sm:flex-row sm:gap-4">
          <ContactCard />
          <OpeningTimes />
        </div>
        <AdresseCard />

        <div className="flex flex-col gap-4 items-center mt-4">
          <p className="flex sm:text-3xl text-xl text-center font-medium">
            Autres résultats peuvent vous intéresser
          </p>
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
