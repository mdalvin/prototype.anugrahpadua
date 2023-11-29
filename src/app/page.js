import { BenefitPoints, Hero, Partner, Service } from "./components";

export default function Home() {
  return (
    <main className="h-full w-full bg-white">
      <Hero />
      <Service />
      <BenefitPoints />
      <Partner />
    </main>
  );
}
