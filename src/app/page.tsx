import HomeHero from "./components/home/HomeHero";
import HomeExpertise from "./components/home/HomeExpertise";
import HomeReviews from "./components/home/HomeReviews";
import HomeActivities from "./components/home/HomeActivities";
import HomeJoin from "./components/home/HomeJoin";

export default function Home() {
  return (
    <main className="main-home relative">
      <HomeHero />
      <HomeExpertise />
      <HomeReviews />
      <HomeActivities />
      <HomeJoin />
    </main>
  );
}
