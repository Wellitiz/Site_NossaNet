import { Hero } from "@/components/sections/Hero";
import { Pricing } from "@/components/sections/Pricing";
import { ParallaxSection } from "@/components/sections/Parallax";
import { Business } from "@/components/sections/Business";
import { About } from "@/components/sections/About";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <Pricing />
      <ParallaxSection />
      <Business />
      <About />
    </div>
  );
}
