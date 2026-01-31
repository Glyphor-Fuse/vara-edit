import { Upload, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const steps = [
  {
    icon: Upload,
    title: "Upload Wardrobe",
    description: "Digitize your closet. Simply snap photos of your items, or link your favorite retail accounts.",
  },
  {
    icon: Wand2,
    title: "AI Curation",
    description: "Our proprietary style algorithm analyzes textures, cuts, and occasions to build cohesive fits.",
  },
  {
    icon: Shirt,
    title: "Virtual Fitting",
    description: "Visualize the look on your digital twin before you commit. No changing room required.",
  },
];

const Workflow = () => {
  return (
    <section id="features" className="bg-zinc-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 md:text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Seamless Intelligence</h2>
          <p className="mt-4 text-gray-400">From chaos to curated in three simple steps.</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="border-white/10 bg-white/5 backdrop-blur-sm transition-transform hover:-translate-y-1">
              <CardHeader>
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-none bg-white/10 text-white">
                  <step.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl text-white font-display tracking-wide">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
