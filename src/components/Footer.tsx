
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="relative h-10 w-10 overflow-hidden">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="fill-sawil-700">
                  <path d="M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0" id="curve" />
                  <path d="M85,57 C45,57 25,90 25,122 C25,155 45,180 75,180 L75,165 C55,165 40,147 40,122 C40,98 55,72 85,72 L85,57 Z" />
                  <path d="M110,57 L110,72 C140,72 155,98 155,122 C155,147 140,165 120,165 L120,180 C150,180 170,155 170,122 C170,90 150,57 110,57 Z" />
                  <path d="M80,80 L80,140 C80,140 110,120 110,110 C110,100 80,80 80,80 Z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-sawil-800">Sawil</span>
                <span className="text-sm font-light text-sawil-600">contabilidade</span>
              </div>
            </Link>
            <p className="text-gray-600 text-sm">
              Há mais de 50 anos prestando serviços de contabilidade em Presidente Prudente, 
              com qualidade e ótimos resultados para nossos clientes.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-sawil-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-sawil-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-sawil-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 text-sm hover:text-sawil-700 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-600 text-sm hover:text-sawil-700 transition-colors">
                  Sobre
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-600 text-sm hover:text-sawil-700 transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/estrutura" className="text-gray-600 text-sm hover:text-sawil-700 transition-colors">
                  Estrutura
                </Link>
              </li>
              <li>
                <Link to="/equipe" className="text-gray-600 text-sm hover:text-sawil-700 transition-colors">
                  Equipe
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-600 text-sm hover:text-sawil-700 transition-colors">
                  Fale Conosco
                </Link>
              </li>
              <li>
                <Link to="/area-cliente" className="text-gray-600 text-sm hover:text-sawil-700 transition-colors">
                  Área do Cliente
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/servicos" className="text-gray-600 text-sm hover:text-sawil-700 transition-colors">
                  Contabilidade Empresarial
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-600 text-sm hover:text-sawil-700 transition-colors">
                  Consultoria Fiscal
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-600 text-sm hover:text-sawil-700 transition-colors">
                  Planejamento Tributário
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-600 text-sm hover:text-sawil-700 transition-colors">
                  Departamento Pessoal
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-600 text-sm hover:text-sawil-700 transition-colors">
                  Abertura de Empresas
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-gray-900 mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={18} className="text-sawil-700 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Av. Washington Luiz, 1200, Centro<br />
                  Presidente Prudente - SP, 19010-090
                </span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="text-sawil-700 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  (18) 3222-5000<br />
                  (18) 99999-9999 (WhatsApp)
                </span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-sawil-700 mt-0.5 mr-2 flex-shrink-0" />
                <a href="mailto:contato@sawil.com.br" className="text-gray-600 text-sm hover:text-sawil-700 transition-colors">
                  contato@sawil.com.br
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Sawil Contabilidade. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm mt-2 md:mt-0">
              Desenvolvido por <a href="#" className="text-sawil-700 hover:underline">Seu Nome</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
