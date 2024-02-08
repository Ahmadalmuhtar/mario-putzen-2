import { Carousel } from "flowbite-react";
import img1 from "../../../assets/images/young-dark-haired-woman-cleaning-surfaces-kitchen.jpg";
import img2 from "../../../assets/images/young-man-wearing-casual-clothes-cap-rubber-gloves-holding-bucket-with-cleaning-tools-using-smartphone-doing-selfie-happy-excited-standing-orange-wall.jpg";
import img3 from "../../../assets/images/front-view-happy-male-housekeeper-showing-something-blue-isolated-space.jpg";
import img4 from "../../../assets/images/bg_99.jpg";
import Layout from "../../layout";

export default function PhotoGallery() {
  return (
    <Layout>
      <div className="h-56 sm:h-64 xl:h-96 2xl:h-96 max-w-7xl mx-auto">
        <Carousel>
          <img className="object-cover h-96 w-full" src={img1} alt="..." />
          <img className="object-cover h-96 w-full" src={img2} alt="..." />
          <img className="object-cover h-96 w-full" src={img3} alt="..." />
          <img className="object-cover h-96 w-full" src={img4} alt="..." />
        </Carousel>
      </div>
    </Layout>
  );
}
