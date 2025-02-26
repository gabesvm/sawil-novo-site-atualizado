
import { Link } from "react-router-dom";
import { ArrowRight, Mail, Phone, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Team = () => {
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Carlos Silva",
      role: "Diretor-Presidente",
      bio: "Contador com mais de 30 anos de experiência, Carlos fundou a Sawil Contabilidade em 1992 e transformou-a em uma referência na região.",
      photo: "/placeholder.svg",
      linkedin: "https://linkedin.com"
    },
    {
      id: 2,
      name: "Ana Oliveira",
      role: "Diretora Contábil",
      bio: "Especialista em contabilidade empresarial, Ana lidera nossa equipe contábil há 15 anos, com foco em eficiência e precisão nos processos.",
      photo: "/placeholder.svg",
      linkedin: "https://linkedin.com"
    },
    {
      id: 3,
      name: "Ricardo Santos",
      role: "Diretor Fiscal",
      bio: "Contador e advogado tributarista, Ricardo é responsável por garantir conformidade fiscal e desenvolver estratégias tributárias para nossos clientes.",
      photo: "/placeholder.svg",
      linkedin: "https://linkedin.com"
    },
    {
      id: 4,
      name: "Juliana Costa",
      role: "Gerente de Departamento Pessoal",
      bio: "Com especialização em legislação trabalhista, Juliana coordena toda a área de departamento pessoal com excelência há 10 anos.",
      photo: "/placeholder.svg",
      linkedin: "https://linkedin.com"
    },
    {
      id: 5,
      name: "Marcos Pereira",
      role: "Contador Sênior",
      bio: "Dedicado e meticuloso, Marcos é especialista em contabilidade para pequenas e médias empresas, com foco em setores específicos como construção civil e comércio.",
      photo: "/placeholder.svg",
      linkedin: "https://linkedin.com"
    },
    {
      id: 6,
      name: "Fernanda Lima",
      role: "Consultora Tributária",
      bio: "Com mestrado em Direito Tributário, Fernanda oferece orientação especializada para otimização fiscal e resolução de questões complexas.",
      photo: "/placeholder.svg",
      linkedin: "https://linkedin.com"
    },
    {
      id: 7,
      name: "Roberto Almeida",
      role: "Gerente de TI",
      bio: "Especialista em sistemas de gestão contábil, Roberto garante que nossa infraestrutura tecnológica esteja sempre atualizada e segura.",
      photo: "/placeholder.svg",
      linkedin: "https://linkedin.com"
    },
    {
      id: 8,
      name: "Luciana Mendes",
      role: "Contadora",
      bio: "Formada em contabilidade com especialização em IFRS, Luciana atende empresas de médio porte com dedicação e precisão.",
      photo: "/placeholder.svg",
      linkedin: "https://linkedin.com"
    }
  ];

  // Department data
  const departments = [
    { name: "Contabilidade", count: 12 },
    { name: "Fiscal", count: 8 },
    { name: "Departamento Pessoal", count: 6 },
    { name: "Consultoria", count: 4 },
    { name: "Administrativo", count: 3 },
    { name: "TI", count: 2 }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sawil-800 to-sawil-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Nossa Equipe</h1>
            <p className="text-xl opacity-90">
              Conheça os profissionais dedicados que fazem a Sawil Contabilidade ser uma referência no mercado
            </p>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Uma Equipe de Especialistas</h2>
              <p className="text-gray-700 mb-6">
                Na Sawil Contabilidade, contamos com uma equipe de mais de 30 profissionais altamente qualificados e especializados em diversas áreas da contabilidade, finanças e tributação.
              </p>
              <p className="text-gray-700 mb-6">
                Nossos colaboradores participam regularmente de treinamentos e atualizações para garantir que estejam sempre em dia com as constantes mudanças na legislação contábil e fiscal brasileira.
              </p>
              <p className="text-gray-700">
                Investimos continuamente na formação e desenvolvimento de nossos profissionais, pois acreditamos que uma equipe bem preparada é fundamental para oferecer serviços de excelência aos nossos clientes.
              </p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {departments.map((dept, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="font-medium text-gray-900">{dept.name}</h3>
                    <p className="text-sawil-600 font-semibold">{dept.count} profissionais</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg"
                alt="Equipe Sawil Contabilidade"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Liderança</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Conheça os profissionais que lideram a Sawil Contabilidade e garantem a excelência em nossos serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sawil-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-700 mb-4">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a 
                      href={`mailto:contato@sawil.com.br?subject=Contato com ${member.name}`} 
                      className="text-gray-500 hover:text-sawil-700 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                    <a 
                      href="tel:+551832225000" 
                      className="text-gray-500 hover:text-sawil-700 transition-colors"
                      aria-label={`Ligar para ${member.name}`}
                    >
                      <Phone size={18} />
                    </a>
                    <a 
                      href={member.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-sawil-700 transition-colors"
                      aria-label={`LinkedIn de ${member.name}`}
                    >
                      <Linkedin size={18} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Team */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nossa Equipe Técnica</h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Profissionais especializados que trabalham diariamente para oferecer o melhor serviço contábil para sua empresa
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.slice(3).map((member) => (
              <div key={member.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-bold text-gray-900 text-center">{member.name}</h3>
                <p className="text-sawil-600 font-medium mb-3 text-center">{member.role}</p>
                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-sawil-700 transition-colors"
                    aria-label={`LinkedIn de ${member.name}`}
                  >
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-sawil-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Faça parte da nossa equipe
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Estamos sempre em busca de talentos para fazer parte do nosso time. Envie seu currículo e venha crescer conosco.
          </p>
          <Button asChild size="lg" className="bg-white text-sawil-700 hover:bg-gray-100">
            <Link to="/contato" className="flex items-center">
              Envie seu Currículo <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Team;
