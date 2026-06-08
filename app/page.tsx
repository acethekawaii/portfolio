import { AboutSection } from "./_components/about-section";
import { Hero } from "./_components/hero";
import { StackSection } from "./_components/stack-section";
import { WorkSection } from "./_components/work-section";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <WorkSection />
      <StackSection />
      <AboutSection />
    </main>
  );
}
