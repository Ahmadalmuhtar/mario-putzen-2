import img from "../../../assets/images/clean.svg";
import img1 from "../../../assets/images/clean-1.svg";
import img2 from "../../../assets/images/cleaner.svg";
import img3 from "../../../assets/images/cleaning-lady.svg";
import Layout from "../../layout";

const features = [
  {
    name: "Expertin",
    description:
      "Unser modernes Unternehmen hat sich auf die Vielfältigkeit der Reinigung spezialisiert",
    image: img,
  },
  {
    name: "Dienstleistungen",
    description:
      "Mit einem Team erfahrener Reinigungskräfte und modernster Ausrüstung kümmern wir uns um Ihre Außen- und Innenflächen",
    image: img1,
  },
  {
    name: "Beratung",
    description: "Eine umfangreiche Beratung erhalten Sie von uns kostenfrei",
    image: img2,
  },
  {
    name: "kostengünstig",
    description:
      "Wir bieten leistungsstarke Dienstleistungen zu wettbewerbsfähigen Preisen",
    image: img3,
  },
];

export default function FeatureSection() {
  const borderColors = [
    "hover:ring-blue-700",
    "hover:ring-purple-700",
    "hover:ring-teal-700",
    "hover:ring-emeraland-700",
  ];

  return (
    <Layout>
      <div className="bg-white pb-10">
        <div className="mx-auto px-6 lg:px-8">
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 text-left lg:gap-y-16">
              {features.map((feature, index) => (
                <div
                  className={`ring-2 rounded-2xl p-10 transition-all duration-300 ease-in-out ring-blue-500`}
                  key={index}
                >
                  <div className="grid grid-cols-2">
                    <div className="flex items-center">
                      <div>
                        <h3 className="text-base font-semibold leading-7 text-gray-900">
                          {feature.name}
                        </h3>
                        <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
                          <div>
                            <p>{feature.description}</p>
                          </div>
                        </dl>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <img className="h-48 w-48" src={feature.image} />
                    </div>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
}
