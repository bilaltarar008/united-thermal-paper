import MainLayout from "../../components/layout/MainLayout";
import Hero from "../../components/home/Hero/Hero";
import Whychooseus from "../../components/home/Whychooseus/Whychooseus";
import Aboutbrand  from "../../components/home/Aboutbrand/Aboutbrand";
import Productcategories  from "../../components/home/Productcategories/Productcategories";
 


function Home() {
  return (
    <MainLayout>
      <Hero />
      <Whychooseus />
      <Aboutbrand />
      <Productcategories />
    </MainLayout>
  );
}

export default Home;