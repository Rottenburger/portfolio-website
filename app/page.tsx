import { AnimatedImageBentoGridComponent } from "@/components/animated-image-bento-grid";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { SkillsAndLinks } from "@/components/skills-and-links";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <main className="relative bg-black-100 flex 
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        <AnimatedImageBentoGridComponent />
        <SkillsAndLinks />
      </div>
    </main></>
  );
}
