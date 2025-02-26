
import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-5 w-5 text-sawil-600" />,
      title: "Endereço",
      content: (
        <>
          Av. Washington Luiz, 1200<br />
          Centro, Presidente Prudente - SP<br />
          CEP: 19010-090
        </>
      )
    },
    {
      icon: <Phone className="h-5 w-5 text-sawil-600" />,
      title: "Telefones",
      content: (
        <>
          (18) 3222-5000<br />
          (18) 99999-9999 (WhatsApp)
        </>
      )
    },
    {
      icon: <Mail className="h-5 w-5 text-sawil-600" />,
      title: "Email",
      content: (
        <>
          contato@sawil.com.br<br />
          comercial@sawil.com.br
        </>
      )
    },
    {
      icon: <Clock className="h-5 w-5 text-sawil-600" />,
      title: "Horário de Atendimento",
      content: (
        <>
          Segunda a Sexta: 8h às 18h<br />
          Sábados: 8h às 12h
        </>
      )
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-sawil-800 to-sawil-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Fale Conosco</h1>
            <p className="text-xl opacity-90">
              Estamos prontos para atender às suas necessidades contábeis
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
                <p className="text-gray-700 mb-8">
                  Entre em contato conosco por um dos canais abaixo ou preencha o formulário ao lado. 
                  Nossa equipe está pronta para atendê-lo com excelência.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex">
                    <div className="mt-1 mr-4">{info.icon}</div>
                    <div>
                      <h3 className="font-medium text-gray-900">{info.title}</h3>
                      <div className="text-gray-700 mt-1">{info.content}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Envie uma Mensagem</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Assunto</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Assunto da mensagem"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mensagem</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva sua solicitação em detalhes"
                      className="min-h-[150px]"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full md:w-auto gap-2">
                    Enviar Mensagem
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3695.6581398421105!2d-51.380541624558216!3d-22.12721884178638!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f45f38956151%3A0xb9a26df3a192b4dd!2sAv.%20Washington%20Luiz%2C%201200%20-%20Centro%2C%20Pres.%20Prudente%20-%20SP%2C%2019010-090!5e0!3m2!1sen!2sbr!4v1709574121543!5m2!1sen!2sbr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Sawil Contabilidade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
