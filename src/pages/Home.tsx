
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="hero-section min-h-[85vh] flex items-center pt-24 pb-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              Contabilidade que valoriza seu negócio
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Há mais de 50 anos oferecendo soluções contábeis personalizadas para empresas de todos os portes em Presidente Prudente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" asChild className="bg-sawil-600 hover:bg-sawil-700 text-white border-none">
                <Link to="/servicos">Nossos Serviços</Link>
              </Button>
              <Button size="lg" asChild variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white">
                <Link to="/contato">Fale Conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Simplifique sua contabilidade com a Sawil
              </h2>
              <p className="text-gray-700 mb-6">
                Na Sawil Contabilidade, acreditamos que cada negócio é único. Por isso, oferecemos soluções personalizadas que atendem às necessidades específicas da sua empresa, permitindo que você se concentre no que realmente importa: o crescimento do seu negócio.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Equipe com mais de 30 profissionais especializados",
                  "Mais de 500 empresas atendidas em diferentes setores",
                  "Tecnologia avançada para processos mais eficientes",
                  "Atendimento personalizado e consultoria estratégica"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-sawil-600 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild>
                <Link to="/sobre" className="flex items-center">
                  Conheça Nossa História <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="/placeholder.svg" 
                alt="Equipe Sawil Contabilidade" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Oferecemos um conjunto completo de serviços contábeis para atender todas as necessidades da sua empresa, desde a abertura até a gestão financeira e fiscal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Contabilidade Empresarial",
                description: "Controle contábil completo para sua empresa, com relatórios mensais e análises detalhadas.",
                icon: "📊"
              },
              {
                title: "Consultoria Fiscal",
                description: "Orientação especializada para redução da carga tributária de forma legal e segura.",
                icon: "📝"
              },
              {
                title: "Planejamento Tributário",
                description: "Estratégias para otimização fiscal e enquadramento no melhor regime tributário.",
                icon: "💰"
              },
              {
                title: "Departamento Pessoal",
                description: "Gestão completa da folha de pagamento, admissões, demissões e obrigações trabalhistas.",
                icon: "👥"
              },
              {
                title: "Abertura de Empresas",
                description: "Assessoria completa para abertura, alteração contratual e encerramento de empresas.",
                icon: "🏢"
              },
              {
                title: "Assessoria Contábil",
                description: "Acompanhamento contínuo para tomada de decisões estratégicas com base em dados confiáveis.",
                icon: "📈"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md transition-all duration-300 service-card">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <Link to="/servicos" className="text-sawil-600 font-medium hover:text-sawil-800 inline-flex items-center">
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/servicos">Ver Todos os Serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-sawil-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para simplificar a contabilidade da sua empresa?
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Entre em contato conosco hoje mesmo e descubra como podemos ajudar seu negócio a crescer com tranquilidade contábil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-white text-sawil-800 hover:bg-gray-100">
              <Link to="/contato">Solicitar Proposta</Link>
            </Button>
            <Button size="lg" asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/area-cliente">Área do Cliente</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
