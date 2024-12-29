import AboutHero from "../components/about/AboutHero";
import AboutNumber from "../components/about/AboutNumber";
import AboutCollaborate from "../components/about/AboutCollaborate";
import AboutClient from "../components/about/AboutClient";
import AboutTeam from "../components/about/AboutTeam";

const About = () => {
  return (
    <main className="main-about relative">
      <AboutHero />
      <AboutNumber />
      <AboutCollaborate />
      <AboutClient />
      <AboutTeam />
    </main>
  );
};

export default About;
