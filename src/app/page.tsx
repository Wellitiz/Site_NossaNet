import { Hero } from "@/components/sections/Hero";
import dynamic from 'next/dynamic';

const Stats = dynamic(() => import("@/components/sections/Stats").then(mod => mod.Stats));
const Pricing = dynamic(() => import("@/components/sections/Pricing").then(mod => mod.Pricing));
const Features = dynamic(() => import("@/components/sections/Features").then(mod => mod.Features));
const ParallaxSection = dynamic(() => import("@/components/sections/Parallax").then(mod => mod.ParallaxSection));
const Business = dynamic(() => import("@/components/sections/Business").then(mod => mod.Business));
const About = dynamic(() => import("@/components/sections/About").then(mod => mod.About));

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Stats />
      <Pricing />
      <Features />
      <ParallaxSection />
      <Business />
      <About />
    </div>
  );
}
