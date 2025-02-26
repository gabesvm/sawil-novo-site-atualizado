
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
    