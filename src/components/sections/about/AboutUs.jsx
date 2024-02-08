import React from "react";

const AboutUs = () => {
  return (    

<div className="bg-white px-6 pt-8">
      <div className="mx-auto max-w-5xl text-center grid grid-cols-6 gap-4">
      <div className="col-span-2 flex items-center">
  <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
    <span className="border-b-2 border-opacity-55 border-blue-700 whitespace-nowrap">Ü</span>ber Uns
  </h2>
</div>
        <div className="col-span-4 text-justify">
        <p className="mt-6 text-lg leading-8 text-gray-600">
        <span className="border-b-2 border-opacity-55 border-blue-700 whitespace-nowrap">Mit einem T</span>eam erfahrener Reinigungskräfte und modernster Ausrüstung
          kümmern wir uns um Ihre Außen- und Innenflächen. Egal ob Büro-,
          Unterhalts- oder Glasreinigung: Profitieren Sie von unserer
          kostenlosen Erstberatung und holen Sie sich noch heute ein
          unverbindliches Angebot.
        </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
