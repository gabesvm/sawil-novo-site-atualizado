
import { ArrowRight, Calendar, Users, Award, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sawil-800 to-sawil-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Sobre a Sawil Contabilidade</h1>
            <p className="text-xl opacity-90 mb-4">
              Há mais de 50 anos construindo histórias de sucesso junto com nossos clientes.
            </p>
          </div>
        </div>
      </section>

      {/* Our History */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-5">Nossa História</h2>
              <p className="text-gray-700 mb-4">
                Fundada em 1970 pelo contador Wilson Silva, a Sawil Contabilidade iniciou suas atividades como um pequeno escritório na região central de Presidente Prudente. Com o compromisso de oferecer serviços contábeis de qualidade e atendimento personalizado, a empresa conquistou a confiança de empresários locais e começou a expandir suas operações.
              </p>
              <p className="text-gray-700 mb-4">
                Na década de 90, com a entrada da segunda geração na administração do negócio, a Sawil passou por um importante processo de modernização, investindo em tecnologia e expandindo sua equipe de profissionais especializados.
              </p>
              <p className="text-gray-700">
                Hoje, com mais de cinco décadas de atuação, somos uma referência em contabilidade no oeste paulista, atendendo empresas de diversos segmentos e portes, sempre com o mesmo compromisso com a excelência e ética profissional que norteou nossa fundação.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="/placeholder.svg"
                alt="História da Sawil Contabilidade"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossos Valores</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Na Sawil, acreditamos que o sucesso do cliente é o nosso sucesso. Por isso, todos os nossos serviços são orientados pelos seguintes valores fundamentais:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Ética",
                description: "Comprometimento com a transparência e a honestidade em todas as relações profissionais.",
                icon: <Award className="h-10 w-10 text-sawil-600" />
              },
              {
                title: "Excelência",
                description: "Busca constante pela perfeição em nossos serviços e atendimento ao cliente.",
                icon: <Target className="h-10 w-10 text-sawil-600" />
              },
              {
                title: "Inovação",
                description: "Adaptação contínua às novas tecnologias e metodologias para oferecer soluções modernas e eficientes.",
                icon: <Calendar className="h-10 w-10 text-sawil-600" />
              },
              {
                title: "Respeito",
                description: "Valorização dos relacionamentos com clientes, colaboradores e parceiros com empatia e consideração.",
                icon: <Users className="h-10 w-10 text-sawil-600" />
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-700">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-sawil-50 rounded-lg border border-sawil-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-700">
                Proporcionar soluções contábeis e fiscais de excelência, contribuindo para o sucesso e crescimento sustentável de nossos clientes, através de serviços de alto valor agregado e relacionamentos duradouros.
              </p>
            </div>
            <div className="p-6 bg-sawil-50 rounded-lg border border-sawil-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como referência em serviços contábeis e consultoria empresarial no oeste paulista, destacando-se pela inovação, qualidade e comprometimento com os resultados dos clientes.
              </p>
            </div>
            <div className="p-6 bg-sawil-50 rounded-lg border border-sawil-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Valores</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Ética e transparência</li>
                <li>• Excelência nos serviços</li>
                <li>• Comprometimento com resultados</li>
                <li>• Desenvolvimento contínuo</li>
                <li>• Valorização das pessoas</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-sawil-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Conheça Nossa Equipe
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Nossos profissionais estão prontos para oferecer o melhor atendimento e soluções contábeis para o seu negócio.
          </p>
          <Button asChild size="lg" className="bg-white text-sawil-700 hover:bg-gray-100">
            <Link to="/equipe" className="flex items-center">
              Conheça Nossos Especialistas <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
