import Category from "@/components/Home/Category";
import Explore from "@/components/Home/Explore";
import Featured from "@/components/Home/Featured";
import Hero from "@/components/Home/Hero";

const Home = () => {
  return(
    <main>
      <Hero />
      <Explore />
      <Featured />
      <Category />
    </main>
  );
}

export default Home;