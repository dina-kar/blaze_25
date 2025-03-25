import HeroGeometric from "@/components/kokonutui/hero-geometric";
import AboutPage from "@/components/about";
import EventsPage from "@/components/event";

export default function Home() {
  return (
    <main>
      <HeroGeometric />
      <EventsPage />
      <AboutPage/>
    </main>
  );
}