import { informationall, logoHmif } from "@/utils/imagesPath";
import { Globe } from "lucide-react";

const Navbar = () => {
  return (
    <header className="flex items-center justify-center p-1 overflow-hidden">
      <nav className="grid w-full grid-cols-2 gap-4 px-8 py-4 font-medium rounded-2xl md:grid-cols-3 font-general-sans bg-card">
        <div className="flex items-center justify-start gap-2">
          <img
            src={logoHmif}
            alt={logoHmif}
            className="w-full h-auto max-w-8"
          />
          <img
            src={informationall}
            alt={informationall}
            className="w-full h-auto max-w-10"
          />
        </div>
        <div className="items-center justify-center hidden md:flex">
          <h1 className="text-xl text-center">
            HMIF BEM FT-UMJ PERIODE 2023-2024
          </h1>
        </div>
        <div className="flex items-center justify-end">
          <a
            href="https://hmif.org"
            target="_blank"
            className="p-2 rounded-full bg-primary text-card"
          >
            <Globe size={24} strokeWidth={1.5} />
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
