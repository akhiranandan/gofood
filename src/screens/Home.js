import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <>
      <Navbar />
      <Carousel />
      <div className="m-3">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
};

export default Home;
