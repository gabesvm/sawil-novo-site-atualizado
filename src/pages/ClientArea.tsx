
import { useState } from "react";
import { ArrowRight, Lock, FileText, Upload, BarChart, Download, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

const ClientArea = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login (in a real app, this would be an API call)
    if (loginData.email && loginData.password) {
      // Success login simulation
      setIsLoggedIn(true);
      toast.success("Login realizado com sucesso!");
    } else {
      // Error simulation
      toast.error("Por favor, preencha todos os campos!");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setLoginData({
      email: "",
      password: ""
    });
    toast.info("Você saiu da sua conta");
  };

  // Documents data (this would come from an API in a real app)
  const documents = [
    { id: 1, name: "Balanço Patrimonial - 2023", date: "15/03/2023", type: "PDF", size: "2.4 MB" },
    { id: 2, name: "DRE - Dezembro 2023", date: "10/01/2024", type: "PDF", size: "1.8 MB" },
    { id: 3, name: "Apuração de Impostos - 4º Trimestre", date: "05/01/2024", type: "PDF", size: "3.2 MB" },
    { id: 4, name: "Folha de Pagamento - Janeiro 2024", date: "05/02/2024", type: "PDF", size: "1.5 MB" },
    { id: 5, name: "Certificado Digital", date: "20/12/2023", type: "P7B", size: "156 KB" }
  ];

  // Documents to sign
  const pendingDocuments = [
    { id: 1, name: "Contrato de Prestação de Serviços 2024", deadline: "20/03/2024", status: "Pendente" },
    { id: 2, name: "Procuração Eletrônica", deadline: "15/03/2024", status: "Pendente" }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {!isLoggedIn ? (
          <div className="max-w-md mx-auto">
            <div className="text-center mb-8">
              <Lock className="mx-auto h-12 w-12 text-sawil-600 mb-4" />
              <h1 className="text-2xl font-bold text-gray-900">Área do Cliente</h1>
              <p className="text-gray-600 mt-2">
                Acesse documentos, informações contábeis e serviços exclusivos
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Login</CardTitle>
                <CardDescription>
                  Entre com suas credenciais para acessar a área restrita
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={loginData.email}
                      onChange={handleLoginChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Senha</Label>
                      <a 
                        href="#" 
                        className="text-xs text-sawil-600 hover:underline"
                        onClick={(e) => {
                          e.preventDefault();
                          toast.info("Entre em contato com nosso suporte para recuperar sua senha");
                        }}
                      >
                        Esqueceu a senha?
                      </a>
                    </div>
                    <Input
                      id="password"
                      name="password"
                      type="password"
                      placeholder="••••••••"
                      value={loginData.password}
                      onChange={handleLoginChange}
                    />
                  </div>
                  <Button type="submit" className="w-full">Entrar</Button>
                </form>
              </CardContent>
              <CardFooter className="flex flex-col space-y-4">
                <Separator />
                <div className="text-center text-sm text-gray-600">
                  <p>Ainda não tem acesso?</p>
                  <Button 
                    variant="link" 
                    className="text-sawil-600 p-0 h-auto"
                    onClick={() => toast.info("Entre em contato com nosso time comercial para solicitar acesso")}
                  >
                    Solicite suas credenciais
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Olá, Cliente</h1>
                <p className="text-gray-600">Bem-vindo(a) à sua área exclusiva</p>
              </div>
              <Button variant="outline" onClick={handleLogout}>Sair</Button>
            </div>

            <Tabs defaultValue="documents" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="documents" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Documentos</span>
                </TabsTrigger>
                <TabsTrigger value="upload" className="flex items-center gap-2">
                  <Upload className="h-4 w-4" />
                  <span>Envios</span>
                </TabsTrigger>
                <TabsTrigger value="reports" className="flex items-center gap-2">
                  <BarChart className="h-4 w-4" />
                  <span>Relatórios</span>
                </TabsTrigger>
                <TabsTrigger value="calendar" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Calendário</span>
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="documents">
                <Card>
                  <CardHeader>
                    <CardTitle>Seus Documentos</CardTitle>
                    <CardDescription>
                      Acesse e baixe os documentos contábeis da sua empresa
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="rounded-md border">
                      <div className="p-4">
                        <div className="grid grid-cols-12 text-sm font-medium text-gray-500">
                          <div className="col-span-6 md:col-span-5">Nome</div>
                          <div className="col-span-3 md:col-span-3 text-right md:text-left">Data</div>
                          <div className="col-span-2 md:col-span-2 hidden md:block">Tipo</div>
                          <div className="col-span-1 md:col-span-1 hidden md:block">Tamanho</div>
                          <div className="col-span-3 md:col-span-1 text-right">Ação</div>
                        </div>
                      </div>
                      <Separator />
                      {documents.map((doc) => (
                        <div key={doc.id}>
                          <div className="grid grid-cols-12 items-center p-4 text-sm">
                            <div className="col-span-6 md:col-span-5 font-medium">{doc.name}</div>
                            <div className="col-span-3 md:col-span-3 text-right md:text-left text-gray-500">{doc.date}</div>
                            <div className="col-span-2 md:col-span-2 hidden md:block text-gray-500">{doc.type}</div>
                            <div className="col-span-1 md:col-span-1 hidden md:block text-gray-500">{doc.size}</div>
                            <div className="col-span-3 md:col-span-1 text-right">
                              <Button 
                                variant="ghost" 
                                size="sm" 
                                className="h-8 w-8 p-0"
                                onClick={() => toast.success(`Documento "${doc.name}" baixado com sucesso`)}
                              >
                                <span className="sr-only">Download</span>
                                <Download className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                          {doc.id < documents.length && <Separator />}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle>Documentos para Assinatura</CardTitle>
                    <CardDescription>
                      Documentos que requerem sua assinatura digital
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {pendingDocuments.length > 0 ? (
                      <div className="rounded-md border">
                        <div className="p-4">
                          <div className="grid grid-cols-12 text-sm font-medium text-gray-500">
                            <div className="col-span-6 md:col-span-6">Nome</div>
                            <div className="col-span-3 md:col-span-3">Prazo</div>
                            <div className="col-span-2 md:col-span-2">Status</div>
                            <div className="col-span-1 md:col-span-1 text-right">Ação</div>
                          </div>
                        </div>
                        <Separator />
                        {pendingDocuments.map((doc) => (
                          <div key={doc.id}>
                            <div className="grid grid-cols-12 items-center p-4 text-sm">
                              <div className="col-span-6 md:col-span-6 font-medium">{doc.name}</div>
                              <div className="col-span-3 md:col-span-3 text-amber-600">{doc.deadline}</div>
                              <div className="col-span-2 md:col-span-2 text-red-500">{doc.status}</div>
                              <div className="col-span-1 md:col-span-1 text-right">
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  onClick={() => toast.success(`Redirecionando para assinatura de "${doc.name}"`)}
                                >
                                  Assinar
                                </Button>
                              </div>
                            </div>
                            {doc.id < pendingDocuments.length && <Separator />}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8">
                        <p className="text-gray-500">Não há documentos pendentes de assinatura.</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="upload">
                <Card>
                  <CardHeader>
                    <CardTitle>Envio de Documentos</CardTitle>
                    <CardDescription>
                      Envie documentos para análise da nossa equipe contábil
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center w-full">
                      <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <Upload className="w-10 h-10 mb-3 text-gray-400" />
                          <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Clique para enviar</span> ou arraste e solte</p>
                          <p className="text-xs text-gray-500">PDF, PNG, JPG ou JPEG (Máx. 10MB)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={() => toast.success("Documento enviado com sucesso!")} />
                      </label>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <p className="text-sm text-gray-500">
                      Os documentos enviados serão analisados pela nossa equipe em até 24 horas úteis.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
              
              <TabsContent value="reports">
                <Card>
                  <CardHeader>
                    <CardTitle>Relatórios Gerenciais</CardTitle>
                    <CardDescription>
                      Acompanhe os principais indicadores da sua empresa
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <BarChart className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Relatórios em desenvolvimento
                      </h3>
                      <p className="text-gray-500 max-w-md">
                        Estamos trabalhando para disponibilizar relatórios gerenciais personalizados para sua empresa em breve.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="calendar">
                <Card>
                  <CardHeader>
                    <CardTitle>Calendário Fiscal</CardTitle>
                    <CardDescription>
                      Acompanhe os prazos de entrega de obrigações e pagamento de tributos
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="h-[400px] flex items-center justify-center">
                    <div className="text-center">
                      <Calendar className="w-16 h-16 mx-auto text-gray-300 mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Calendário em implementação
                      </h3>
                      <p className="text-gray-500 max-w-md">
                        Em breve você poderá acompanhar todos os prazos e obrigações da sua empresa diretamente por aqui.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientArea;
