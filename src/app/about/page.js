import { About, CompanyValues, Gallery, VnM } from "../components";

export default function AboutPage() {
  return (
    <main className="h-full w-full bg-white">
      <About />
      <VnM />
      <CompanyValues />
      <Gallery />
    </main>
  );
}
