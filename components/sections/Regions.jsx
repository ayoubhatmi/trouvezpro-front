import React from "react";
import FranceMap from "../FranceMap";

const Regions = () => {
  return (
    <section className="flex flex-col gap-4 items-center pb-12">
      <h2 className="text-2xl mt-5 lg:text-4xl font-semibold text-center">
        Découvrez les entreprises par région
      </h2>
      <div className="w-full max-w-xl">
        <FranceMap />
      </div>
    </section>
  );
};

export default Regions;
