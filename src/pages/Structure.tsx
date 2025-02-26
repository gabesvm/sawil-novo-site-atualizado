
import { Building, Shield, Cpu, BookOpen, Users, Coffee } from "lucide-react";

const Structure = () => {
  const facilities = [
    {
      title: "Instalações Modernas",
      description: "Nosso escritório conta com mais de 500m² de área construída, projetada para oferecer um ambiente de trabalho confortável e produtivo para nossa equipe e clientes.",
      icon: <Building className="h-8 w-8 text-sawil-600" />
    },
    {
      title: "Segurança da Informação",
      description: "Investimos em sistemas avançados de segurança de dados, com backup diário em múltiplos servidores e protocolos rígidos de proteção de informações dos clientes.",
      icon: <Shield className="h-8 w-8 text-sawil-600" />
    },
    {
      title: "Tecnologia de Ponta",
      description: "Utilizamos softwares contábeis de última geração e equipamentos modernos para garantir eficiência e precisão em todos os nossos serviços.",
      icon: <Cpu className="h-8 w-8 text-sawil-600" />
    },
    {
      title: "Biblioteca Técnica",
      description: "Mantemos um acervo atualizado de publicações especializadas em contabilidade, direito tributário e gestão empresarial para consulta da equipe.",
      icon: <BookOpen className="h-8 w-8 text-sawil-600" />
    },
    {
      title: "Salas de Reunião",
      description: "Dispomos de salas de reunião equipadas com recursos audiovisuais para atendimento personalizado aos clientes e treinamentos da equipe.",
      icon: <Users className="h-8 w-8 text-sawil-600" />
    },
    {
      title: "Área de Convivência",
      description: "Espaço dedicado ao descanso e integração da equipe, promovendo um ambiente de trabalho mais agradável e colaborativo.",
      icon: <Coffee className="h-8 w-8 text-sawil-600" />
    }
  ];

  const departments = [
    {
      name: "Departamento Contábil",
      description: "Responsável pela escrituração contábil, elaboração de demonstrações financeiras e relatórios gerenciais.",
      team: "8 profissionais especializados"
    },
    {
      name: "Departamento Fiscal",
      description: "Cuida da apuração de impostos, obrigações acessórias e planejamento tributário para os clientes.",
      team: "7 profissionais especializados"
    },
    {
      name: "Departamento Pessoal",
      description: "Gerencia todas as rotinas trabalhistas, desde admissões até rescisões e obrigações periódicas.",
      team: "6 profissionais especializados"
    },
    {
      name: "Departamento Societário",
      description: "Responsável pelo registro de empresas, alterações contratuais e demais processos societários.",
      team: "4 profissionais especializados"
    },
    {
      name: "Consultoria Empresarial",
      description: "Oferece orientação estratégica para tomada de decisões com base nas informações contábeis e fiscais.",
      team: "3 consultores sêniores"
    },
    {
      name: "Suporte e TI",
      description: "Garante o funcionamento adequado dos sistemas e a segurança das informações dos clientes.",
      team: "2 especialistas em tecnologia"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sawil-800 to-sawil-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Nossa Estrutura</h1>
            <p className="text-xl opacity-90">
              Conheça a infraestrutura completa que a Sawil Contabilidade oferece para garantir a excelência nos serviços
            </p>
          </div>
        </div>
      </section>

      {/* Office Images */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nossas Instalações</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="/placeholder.svg"
                  alt={`Instalações Sawil ${item}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Infraestrutura Completa
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{facility.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{facility.title}</h3>
                <p className="text-gray-700">{facility.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Departamentos Especializados
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-