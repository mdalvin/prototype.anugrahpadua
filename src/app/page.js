import {
  BenefitPoints,
  Hero,
  // MediaPlayer,
  Partner,
  Service,
} from "./components";
import dynamic from "next/dynamic";

const MediaPlayer = dynamic(() => import("./components/MediaPlayer"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="h-full w-full bg-white">
      <Hero />
      <MediaPlayer />
      <Service />
      <BenefitPoints />
      <Partner />
    </main>
  );
}
