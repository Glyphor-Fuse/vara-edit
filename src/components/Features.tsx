import { Scan, Sparkles, Layers, Zap } from "lucide-react";

const features = [
  {
    icon: Scan,
    title: "LiDAR Body Mapping",
    description: "Military-grade precision scanning creates your exact 3D double for flawless fit prediction.",
  },
  {
    icon: Layers,
    title: "Fabric Physics Engine",
    description: "Our proprietary engine simulates drape, stretch, and weight of 500+ material types.",
  },
  {
    icon: Sparkles,
    title: "Contextual Styling",
    description: "AI that understands 'Cocktail Attire' vs 'Black Tie' and adapts suggestions accordingly.",
  },
  {
    icon: Zap,
    title: "Instant Render",
    description: "Zero latency. See yourself in 50 outfits in the time it takes to zip up one dress.",
  },
];

const Features = () => {
  return (
    <section className="py-24 bg-black text-white relative">
      <div className="absolute inset-0 bg-[url('/images/grid-texture.png')] opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-16 md:flex justify-between items-end border-b border-white/10 pb-8">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4">TECHNICAL SUPERIORITY</h2>
            <p className="text-gray-400">
              Vara isn't just a filter. It's a physics simulation wrapped in a stylist's intuition.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
             <span className="text-xs font-mono text-purple-400 border border-purple-400/30 px-2 py-1">
               V 2.0.4 BETA
             </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-6 border border-white/5 hover:border-purple-500/50 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="h-12 w-12 bg-white/5 flex items-center justify-center mb-6 group-hover:bg-purple-900/20 transition-colors">
                <feature.icon className="h-6 w-6 text-white group-hover:text-purple-400" />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-wide mb-3">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed group-hover:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
