import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden bg-black pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://raw.githubusercontent.com/Glyphor-Fuse/vara-edit/main/public/images/hero-fashion.jpg"
          alt="Avant-garde fashion model"
          className="h-full w-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <span className="inline-block rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium tracking-widest text-white uppercase backdrop-blur-sm">
            The Future of Personal Styling
          </span>
        </div>
        
        <h1 className="mt-6 animate-fade-up font-display text-5xl font-bold tracking-tight text-white opacity-0 sm:text-7xl lg:text-8xl" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          Effortless <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Precision.</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl animate-fade-up text-lg text-gray-300 opacity-0 sm:text-xl" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          Upload your wardrobe. Define the occasion. Let Vara Edit curate your perfect look with editorial-grade AI precision.
        </p>

        <div className="mt-10 flex animate-fade-up items-center justify-center gap-4 opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
          <Button size="lg" className="h-12 rounded-none bg-white px-8 text-black hover:bg-gray-200">
            Start Your Edit
          </Button>
          <Button size="lg" variant="outline" className="group h-12 rounded-none border-white text-white hover:bg-white hover:text-black">
            View Lookbook
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
