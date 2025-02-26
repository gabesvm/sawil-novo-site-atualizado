
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => {
  // Service data
  const services = [
    {
      id: 1,
      title: "Contabilidade Empresarial",
      description: "Serviços contábeis completos para empresas de todos os portes e segmentos, garantindo conformidade e segurança para seu negócio.",
      features: [
        "Escrituração contábil completa",
        "Elaboração de balancetes mensais",
        "Demonstrações financeiras",
        "Análise de indicadores financeiros",
        "Relatórios gerenciais personalizados"
      ],
      icon: "📊"
    },
    {
      id: 2,
      title: "Consultoria Fiscal",
      description: "Orientação especializada para otimização da carga tributária e adequação às constantes mudanças na legislação fiscal.",
      features: [
        "Análise do regime tributário ideal",
        "Planejamento tributário estratégico",
        "Apuração de impostos",
        "Acompanhamento de obrigações fiscais",
        "Consultoria em normas e procedimentos fiscais"
      ],
      icon: "📝"
    },
    {
      id: 3,
      title: "Planejamento Tributário",
      description: "Desenvolvimento de estratégias legais para redução da carga tributária e otimização dos recursos da sua empresa.",
      features: [
        "Estudo de viabilidade entre regimes tributários",
        "Análise de benefícios fiscais aplicáveis",
        "Elaboração de planejamento anual",
        "Revisão periódica de estratégias fiscais",
        "Acompanhamento de resultados"
      ],
      icon: "💰"
    },
    {
      id: 4,
      title: "Departamento Pessoal",
      description: "Gestão completa da folha de pagamento e todas as rotinas trabalhistas da sua empresa, com eficiência e segurança.",
      features: [
        "Admissão e desligamento de funcionários",
        "Folha de pagamento e encargos sociais",
        "Férias, 13º salário e rescisões",
        "Elaboração de obrigações acessórias",
        "Homologações e cálculos trabalhistas"
      ],
      icon: "👥"
    },
    {
      id: 5,
      title: "Abertura de Empresas",
      description: "Assessoria completa para constituição de novas empresas, desde a escolha do regime tributário até a regularização documental.",
      features: [
        "Análise e escolha do tipo societário",
        "Elaboração de contrato social",
        "Registro nos órgãos competentes",
        "Obtenção de licenças e alvarás",
        "Orientação inicial para novos empresários"
      ],
      icon: "🏢"
    },
    {
      id: 6,
      title: "Assessoria Contábil",
      description: "Suporte contínuo para tomada de decisões estratégicas com base em análises contábeis e financeiras consistentes.",
      features: [
        "Consultoria para decisões estratégicas",
        "Análise de viabilidade econômica",
        "Estudos de custos e formação de preços",
        "Implementação de controles financeiros",
        "Avaliação de desempenho empresarial"
      ],
      icon: "📈"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sawil-800 to-sawil-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl opacity-90">
              Soluções contábeis completas e personalizadas para o sucesso do seu negócio
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="text-sawil-600 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gray-100 rounded-lg p-8 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img
                    src="/placeholder.svg"
                    alt={service.title}
                    className="w-full h-auto rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Soluções Personalizadas</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Além dos serviços acima, oferecemos soluções customizadas para atender às necessidades específicas do seu negócio. Conte com nossa experiência para desenvolver estratégias contábeis alinhadas aos seus objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-sawil-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Vamos conversar sobre o seu negócio
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Entre em contato conosco para uma análise personalizada das necessidades contábeis da sua empresa.
          </p>
          <Button asChild size="lg" className="bg-white text-sawil-700 hover:bg-gray-100">
            <Link to="/contato" className="flex items-center">
              Solicitar Proposta <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
