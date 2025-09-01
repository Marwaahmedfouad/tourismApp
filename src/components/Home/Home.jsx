import Destinations from "../Destinations/Destinations";
import Hero from "../Hero/Hero";
import ImageGallery from "../ImageGallery/ImageGallery";
import Features from "../Features/Features";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <Destinations />
      <ImageGallery />
      <Features />
      {/* <Testimonials /> */}
    </>
  );
};

export default Home;