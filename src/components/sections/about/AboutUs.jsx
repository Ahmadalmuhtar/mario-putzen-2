import React from "react";
import Layout from "../../layout";

const AboutUs = () => {
  return (
    <Layout>
      <div className="bg-white px-6 pt-8">
        <div className="mx-auto max-w-5xl text-center md:text-left md:grid md:grid-cols-6 md:gap-4">
          <div className="md:col-span-2 flex items-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <p>
              <span className="border-b-2 border-opacity-55 border-blue-700 whitespace-nowrap">
                Üb
              </span>
              er Uns
              </p>
            </h2>
          </div>
          <div className="md:col-span-4 text-lg md:text-justify">
            <p className="mt-6 leading-8 text-gray-600">
              <span className="border-b-2 border-opacity-55 border-blue-700 whitespace-nowrap">
                Mit einem T
              </span>
              eam erfahrener Reinigungskräfte und modernster Ausrüstung kümmern wir
              uns um Ihre Außen- und Innenflächen. Egal ob Büro-, Unterhalts-
              oder Glasreinigung: Profitieren Sie von unserer kostenlosen
              Erstberatung und holen Sie sich noch heute ein unverbindliches
              Angebot.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
