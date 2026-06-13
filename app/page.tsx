import { Hero } from "./_components/hero";
import { PersonTeaser } from "./_components/person-teaser";
import { StackSection } from "./_components/stack-section";
import { WorkSection } from "./_components/work-section";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <WorkSection />
      <StackSection />
      <PersonTeaser />
    </main>
  );
}
