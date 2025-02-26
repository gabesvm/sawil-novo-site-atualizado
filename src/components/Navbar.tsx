
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 overflow-hidden">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="fill-sawil-700">
                <path d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" id="curve" />
                <path d="M85,57 C45,57 25,90 25,122 C25,155 45,180 75,180 L75,165 C55,165 40,147 40,122 C40,98 55,72 85,72 L85,57 Z" />
                <path d="M110,57 L110,72 C140,72 155,98 155,122 C155,147 140,165 120,165 L120,180 C150,180 170,155 170,122 C170,90 150,57 110,57 Z" />
                <path d="M80,80 L80,140 C80,140 110,120 110,110 C110,100 80,80 80,80 Z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-sawil-800">Sawil</span>
            <span className="text-sm font-light text-sawil-600">contabilidade</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link
              to="/"
              className={cn("nav-link text-sm font-medium transition-colors", 
                isActive("/") ? "text-sawil-800 active" : "text-gray-600 hover:text-sawil-800"
              )}
            >
              Home
            </Link>
            <Link
              to="/sobre"
              className={cn("nav-link text-sm font-medium transition-colors", 
                isActive("/sobre") ? "text-sawil-800 active" : "text-gray-600 hover:text-sawil-800"
              )}
            >
              Sobre
            </Link>
            <Link
              to="/servicos"
              className={cn("nav-link text-sm font-medium transition-colors", 
                isActive("/servicos") ? "text-sawil-800 active" : "text-gray-600 hover:text-sawil-800"
              )}
            >
              Serviços
            </Link>
            <Link
              to="/estrutura"
              className={cn("nav-link text-sm font-medium transition-colors", 
                isActive("/estrutura") ? "text-sawil-800 active" : "text-gray-600 hover:text-sawil-800"
              )}
            >
              Estrutura
            </Link>
            <Link
              to="/equipe"
              className={cn("nav-link text-sm font-medium transition-colors", 
                isActive("/equipe") ? "text-sawil-800 active" : "text-gray-600 hover:text-sawil-800"
              )}
            >
              Equipe
            </Link>
            <Link
              to="/contato"
              className={cn("nav-link text-sm font-medium transition-colors", 
                isActive("/contato") ? "text-sawil-800 active" : "text-gray-600 hover:text-sawil-800"
              )}
            >
              Fale Conosco
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button asChild className="bg-sawil-700 hover:bg-sawil-800 text-white" size="sm">
              <Link to="/area-cliente">Área do Cliente</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="px-4 pt-2 pb-6 space-y-4">
            <Link
              to="/"
              className={cn("block py-2 text-base font-medium transition-colors", 
                isActive("/") ? "text-sawil-700" : "text-gray-600 hover:text-sawil-700"
              )}
            >
              Home
            </Link>
            <Link
              to="/sobre"
              className={cn("block py-2 text-base font-medium transition-colors", 
                isActive("/sobre") ? "text-sawil-700" : "text-gray-600 hover:text-sawil-700"
              )}
            >
              Sobre
            </Link>
            <Link
              to="/servicos"
              className={cn("block py-2 text-base font-medium transition-colors", 
                isActive("/servicos") ? "text-sawil-700" : "text-gray-600 hover:text-sawil-700"
              )}
            >
              Serviços
            </Link>
            <Link
              to="/estrutura"
              className={cn("block py-2 text-base font-medium transition-colors", 
                isActive("/estrutura") ? "text-sawil-700" : "text-gray-600 hover:text-sawil-700"
              )}
            >
              Estrutura
            </Link>
            <Link
              to="/equipe"
              className={cn("block py-2 text-base font-medium transition-colors", 
                isActive("/equipe") ? "text-sawil-700" : "text-gray-600 hover:text-sawil-700"
              )}
            >
              Equipe
            </Link>
            <Link
              to="/contato"
              className={cn("block py-2 text-base font-medium transition-colors", 
                isActive("/contato") ? "text-sawil-700" : "text-gray-600 hover:text-sawil-700"
              )}
            >
              Fale Conosco
            </Link>
            <div className="pt-2">
              <Button asChild className="w-full bg-sawil-700 hover:bg-sawil-800 text-white">
                <Link to="/area-cliente">Área do Cliente</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
