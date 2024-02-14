import { Carousel } from "flowbite-react";
import img1 from "../../../assets/images/cleaning-bath-tub-al8j2b4eki1jxrqm.jpg";
import img2 from "../../../assets/images/360_F_330817072_DJIe5dlLrZDLjI62ORM5xDcDjixTUQrY.jpg";
import img3 from "../../../assets/images/cleaners-2048px-disinfectants-2x1-1.webp";
import img4 from "../../../assets/images/bg_99.jpg";
import Layout from "../../layout";

export default function PhotoGallery() {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto">
        <Carousel className="carousel sm:h-72 md:h-96 lg:h-[600px]">
          <img className="h-full w-full object-cover object-center" src={img4} alt="marioputzen" />
          <img className="h-full w-full object-cover object-center" src={img1} alt="marioputzen" />
          <img className="h-full w-full object-cover object-center" src={img2} alt="marioputzen" />
          <img className="h-full w-full object-cover object-center" src={img3} alt="marioputzen" />
        </Carousel>
      </div>
    </Layout>
  );
}
