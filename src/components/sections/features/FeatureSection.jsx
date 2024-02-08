import {
  ArrowPathIcon,
  TrashIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import img from '../../../assets/images/clean.svg';
import img1 from '../../../assets/images/clean-1.svg';
import img2 from '../../../assets/images/cleaner.svg';
import img3 from '../../../assets/images/cleaning-lady.svg';

const features = [
  {
    name: "Expertin",
    description:
      "Unser modernes Unternehmen hat sich auf die Vielfältigkeit der Reinigung spezialisiert",
    icon: TrashIcon,
  },
  {
    name: "Dienstleistungen",
    description:
      "Mit einem Team erfahrener Reinigungskräfte und modernster Ausrüstung kümmern wir uns um Ihre Außen- und Innenflächen",
    icon: LockClosedIcon,
  },
  {
    name: "Beratung",
    description:
      "Eine umfangreiche Beratung erhalten Sie von uns kostenfrei",
    icon: ArrowPathIcon,
  },
  {
    name: "kostengünstig",
    description:
      "Wir bieten leistungsstarke Dienstleistungen zu wettbewerbsfähigen Preisen",
    icon: FingerPrintIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white pb-10">
      <div className="mx-auto px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="relative pl-16 border-r-2 border-blue-700 border-opacity-50"
              >
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-700">
                    <feature.icon 
                      className="h-7 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
