import { Carousel } from "flowbite-react";
import img1 from "../../../assets/images/Bild2.jpg";
import img2 from "../../../assets/images/Background.jpg";
import img3 from "../../../assets/images/clean-1.svg";
import img4 from "../../../assets/images/bg_99.jpg";
import img5 from "../../../assets/images/clean.svg";

export default function PhotoGallery() {
  return (
    <div className="h-56 sm:h-64 xl:h-96 2xl:h-96 max-w-7xl mx-auto">
      <Carousel>
        <img className="object-cover" src={img1} alt="..." />
        <img className="object-cover" src={img2} alt="..." />
        <img className="object-cover" src={img3} alt="..." />
        <img className="object-cover" src={img4} alt="..." />
        <img className="object-cover" src={img5} alt="..." />
      </Carousel>
    </div>
  );
}
