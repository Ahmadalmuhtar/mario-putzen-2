import { Carousel } from "@material-tailwind/react";
import img1 from "../../../assets/images/Bild.jpg";
import img2 from "../../../assets/images/Bild2.jpg";
import img3 from "../../../assets/images/img4.png";

export default function QualityService() {
  return (
    <Carousel
      transition={{ duration: 2 }}
      className="rounded-xl pt-12 items-center bg-center"
    >
      <div className=""></div>
      <img src={img1} alt="image 1" className="h-full w-full object-cover" />
      <img src={img2} alt="image 2" className="h-full w-full object-cover" />
      <img src={img3} alt="image 3" className="h-full w-full object-cover" />
    </Carousel>
  );
}
