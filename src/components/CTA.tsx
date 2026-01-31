import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="bg-white py-24 text-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 text-center lg:px-8">
        <h2 className="font-display text-4xl font-bold tracking-tight sm:text-6xl">
          Curate Your Confidence.
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Join the waitlist for Vara Edit today. Experience the intersection of high fashion and artificial intelligence.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
           <Button size="lg" className="h-14 rounded-none bg-black px-10 text-lg text-white hover:bg-gray-800">
            Download for iOS
          </Button>
          <Button size="lg" variant="outline" className="h-14 rounded-none border-black px-10 text-lg text-black hover:bg-gray-100">
            View Web Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
