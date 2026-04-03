import heroBg from "@/assets/hero-bg.jpg";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4 animate-fade-up">
          Project Showcase
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 animate-fade-up-delay-1">
          Building the{" "}
          <span className="text-gradient">Future</span>
          <br />
          One Project at a Time
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up-delay-2">
          A curated collection of projects showcasing modern web development, 
          creative design, and innovative solutions.
        </p>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold 
                     hover:opacity-90 transition-all glow-primary animate-fade-up-delay-3"
        >
          View Projects
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
