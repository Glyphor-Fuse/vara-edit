import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-tighter text-white font-display">
          VARA EDIT
        </Link>

        {/* Desktop Links */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="#features" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link to="#canvas" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Style Canvas
          </Link>
          <Link to="#about" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Manifesto
          </Link>
          <Button variant="outline" className="border-white/20 bg-transparent text-white hover:bg-white hover:text-black transition-all">
            Sign In
          </Button>
          <Button className="bg-white text-black hover:bg-gray-200">
            Get Styled
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 w-full border-b border-white/10 bg-black p-6 md:hidden">
          <div className="flex flex-col gap-4">
            <Link to="#features" className="text-lg font-medium text-white" onClick={() => setIsOpen(false)}>
              Features
            </Link>
            <Link to="#canvas" className="text-lg font-medium text-white" onClick={() => setIsOpen(false)}>
              Style Canvas
            </Link>
            <Link to="#about" className="text-lg font-medium text-white" onClick={() => setIsOpen(false)}>
              Manifesto
            </Link>
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="outline" className="w-full justify-center border-white/20 text-white hover:bg-white hover:text-black">
                Sign In
              </Button>
              <Button className="w-full justify-center bg-white text-black hover:bg-gray-200">
                Get Styled
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
