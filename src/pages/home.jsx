import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import FeaturedGames from "../components/FeaturedGames";
import Predictions from "../components/Predictions";
import PremiumSection from "../components/PremiumSection";

function Home() {
  return (
    <MainLayout>
      <Hero />
      <FeaturedGames />
      <Predictions />
      <PremiumSection />
    </MainLayout>
  );
}

export default Home;