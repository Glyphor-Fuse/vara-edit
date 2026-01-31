import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

type Occasion = "Gala" | "Brunch" | "Boardroom";

const occasions: Occasion[] = ["Gala", "Brunch", "Boardroom"];

const occasionData = {
  Gala: {
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/vara-edit/main/public/images/outfit-gala.jpg",
    title: "The Evening Standard",
    description: "Opulent textures meet structural elegance. Vara suggests a velvet silhouette paired with minimalist platinum accents.",
  },
  Brunch: {
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/vara-edit/main/public/images/outfit-brunch.jpg",
    title: "Off-Duty Editor",
    description: "Relaxed tailoring in breathable linens. A curated balance of comfort and high-fashion sensibility for the daylight hours.",
  },
  Boardroom: {
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/vara-edit/main/public/images/outfit-boardroom.jpg",
    title: "Executive Presence",
    description: "Sharp lines and authoritative hues. Command the room with a modern power suit tailored for the digital age.",
  },
};

const StyleCanvas = () => {
  const [activeOccasion, setActiveOccasion] = useState<Occasion>("Gala");

  return (
    <section id="canvas" className="bg-black py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">The Style Canvas</h2>
          <p className="mt-4 text-gray-400">One avatar. Infinite possibilities. Watch the AI adapt.</p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Controls */}
          <div className="order-2 flex flex-col items-start gap-8 lg:order-1">
            <div className="flex w-full gap-2 border-b border-white/10 pb-4">
              {occasions.map((occasion) => (
                <button
                  key={occasion}
                  onClick={() => setActiveOccasion(occasion)}
                  className={`flex-1 pb-4 text-sm font-medium tracking-wide transition-all ${
                    activeOccasion === occasion
                      ? "border-b-2 border-white text-white"
                      : "text-gray-500 hover:text-gray-300"
                  }`}
                >
                  {occasion.toUpperCase()}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeOccasion}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-4"
              >
                <h3 className="font-display text-4xl italic text-white">{occasionData[activeOccasion].title}</h3>
                <p className="text-lg leading-relaxed text-gray-400">
                  {occasionData[activeOccasion].description}
                </p>
              </motion.div>
            </AnimatePresence>

            <Button className="mt-4 rounded-none bg-white px-8 py-6 text-black hover:bg-gray-200">
              Generate This Look
            </Button>
          </div>

          {/* Dynamic Image */}
          <div className="order-1 aspect-[3/4] w-full overflow-hidden rounded-sm bg-gray-900 lg:order-2">
             <AnimatePresence mode="wait">
              <motion.img
                key={activeOccasion}
                src={occasionData[activeOccasion].image}
                alt={`Model dressed for ${activeOccasion}`}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full object-cover"
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StyleCanvas;
