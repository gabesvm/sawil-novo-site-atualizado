
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Structure from "./pages/Structure";
import Team from "./pages/Team";
import ClientArea from "./pages/ClientArea";
import Contact from "./pages/Contact";

// ScrollToTop component to ensure page starts at the top on navigation
function ScrollToTop() {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
}

// Page transition wrapper
function PageTransitionWrapper({ children }: { children: React.ReactNode }) {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsVisible(false);
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className={`transition-all duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      {children}
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <div className="flex flex-col min-h-screen">
          <ScrollToTop />
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <PageTransitionWrapper>
                  <Home />
                </PageTransitionWrapper>
              } />
              <Route path="/sobre" element={
                <PageTransitionWrapper>
                  <About />
                </PageTransitionWrapper>
              } />
              <Route path="/servicos" element={
                <PageTransitionWrapper>
                  <Services />
                </PageTransitionWrapper>
              } />
              <Route path="/estrutura" element={
                <PageTransitionWrapper>
                  <Structure />
                </PageTransitionWrapper>
              } />
              <Route path="/equipe" element={
                <PageTransitionWrapper>
                  <Team />
                </PageTransitionWrapper>
              } />
              <Route path="/area-cliente" element={
                <PageTransitionWrapper>
                  <ClientArea />
                </PageTransitionWrapper>
              } />
              <Route path="/contato" element={
                <PageTransitionWrapper>
                  <Contact />
                </PageTransitionWrapper>
              } />
            </Routes>
          </main>
          <Footer />
        </div>
        <Toaster position="top-center" />
      </TooltipProvider>
    </BrowserRouter>
  );
};

export default App;
