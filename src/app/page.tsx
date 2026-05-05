import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { Features } from "@/components/sections/Features";
import { Stats } from "@/components/sections/Stats";
import { ParallaxSection } from "@/components/sections/Parallax";
import { Business } from "@/components/sections/Business";
import { About } from "@/components/sections/About";

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
