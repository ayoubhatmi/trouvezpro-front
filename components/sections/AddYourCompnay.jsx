import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const AddYourCompnay = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 mb-12  rounded-md text-center text-white px-4 py-12 gap-4">
      <h2 className="text-3xl font-bold">
        Professionnel ? Ajoutez Votre Entreprise dès Aujourd'hui !
      </h2>
      <p className="text-lg max-w-2xl">
        Profitez d'une inscription simple, rapide et gratuite pour rejoindre
        notre annuaire. Augmentez votre visibilité et boostez votre présence en
        ligne 🚀
      </p>
      <Button
        className="w-fit p-6 text-lg mt-4 bg-[#f5fb9c] text-black font-medium hover:bg-[#f3fc74]"
        asChild
      >
        <Link href={"/ajouter-entreprise"}>Ajouter votre Entreprise</Link>
      </Button>
    </div>
  );
};

export default AddYourCompnay;
