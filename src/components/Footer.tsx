import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 py-12 text-gray-400">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white font-display">
              VARA EDIT
            </Link>
            <p className="text-sm">© 2024 Vara Edit Inc. All rights reserved.</p>
          </div>
          
          <div className="flex gap-8 text-sm">
            <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms</Link>
            <Link to="#" className="hover:text-white transition-colors">Instagram</Link>
            <Link to="#" className="hover:text-white transition-colors">Twitter</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
