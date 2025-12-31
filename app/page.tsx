"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin, Clock, Instagram, Menu, X, CheckCircle, ChevronRight, Star } from "lucide-react";

// --- DADOS (Pode manter aqui para facilitar ou importar do arquivo data se preferir) ---
const categories = [
  { id: 'estetica', name: 'Estética Facial' },
  { id: 'corporal', name: 'Corporal & Capilar' },
  { id: 'beleza', name: 'Beleza & Cílios' },
  { id: 'outros', name: 'Outros' },
];

const services = [
  { category: 'estetica', title: 'Toxina Botulínica (Full Face)', price: 'R$ 1.500,00', desc: 'Testa, glabela e pés de galinha.' },
  { category: 'estetica', title: 'Preenchimento Labial (1ml)', price: 'R$ 899,00', desc: 'Ácido Hialurônico.' },
  { category: 'corporal', title: 'Lipoquímica Enzimática', price: 'R$ 1.200,00', desc: 'Pacote com 10 sessões.' },
  { category: 'beleza', title: 'Design de Sobrancelhas', price: 'R$ 60,00', desc: 'Design personalizado.' },
  { category: 'beleza', title: 'Extensão de Cílios', price: 'R$ 250,00', desc: 'Volume e alongamento.' },
];

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("estetica");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const whatsappLink = "https://wa.me/556132425394?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20na%20Reviva!";

  return (
    <div className="min-h-screen bg-reviva-cream text-reviva-dark font-sans">
      
      {/* --- NAVBAR --- */}
      <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-2xl font-serif font-bold text-reviva-gold tracking-widest uppercase">Reviva</span>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 items-center font-medium text-sm tracking-wide">
            <a href="#hero" className="hover:text-reviva-gold transition-colors">Início</a>
            <a href="#sobre" className="hover:text-reviva-gold transition-colors">Sobre</a>
            <a href="#servicos" className="hover:text-reviva-gold transition-colors">Procedimentos</a>
            <a href="#localizacao" className="hover:text-reviva-gold transition-colors">Localização</a>
            <a 
              href={whatsappLink}
              target="_blank"
              className="bg-reviva-gold text-white px-6 py-2 rounded-full hover:bg-reviva-goldDark transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Agendar
            </a>
          </nav>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-reviva-dark" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="flex flex-col p-6 gap-4 text-center font-medium">
              <a href="#hero" onClick={() => setIsMobileMenuOpen(false)}>Início</a>
              <a href="#sobre" onClick={() => setIsMobileMenuOpen(false)}>Sobre</a>
              <a href="#servicos" onClick={() => setIsMobileMenuOpen(false)}>Procedimentos</a>
              <a href={whatsappLink} className="text-reviva-gold font-bold">Agendar Agora</a>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        {/* --- HERO SECTION --- */}
        <section id="hero" className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center min-h-[90vh]">
          {/* Fundo Decorativo */}
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-reviva-light to-reviva-cream opacity-70"></div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl space-y-8"
          >
            <div className="inline-block border border-reviva-gold/40 rounded-full px-4 py-1">
              <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-reviva-gold uppercase">
                Estética Avançada em Vicente Pires
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-reviva-dark leading-[1.1]">
              Reviva sua beleza. <br />
              <span className="text-reviva-gold italic">Redescubra sua essência.</span>
            </h1>
            
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
              Transformamos sua autoestima com técnicas modernas e naturais. 
              Um espaço exclusivo pensado para realçar o que você tem de melhor.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href={whatsappLink}
                className="flex items-center justify-center gap-2 bg-green-600 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:bg-green-700 transition-all hover:scale-105"
              >
                <Phone size={20} /> Agendar Avaliação
              </a>
              <a 
                href="#servicos"
                className="flex items-center justify-center gap-2 bg-white border border-gray-200 text-reviva-dark px-10 py-4 rounded-full font-bold hover:border-reviva-gold hover:text-reviva-gold transition-all"
              >
                Ver Tabela de Preços
              </a>
            </div>
          </motion.div>
        </section>

        {/* --- SOBRE (Grid Moderno) --- */}
        <section id="sobre" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-reviva-gold/10 rounded-2xl rotate-3 -z-10"></div>
              <div className="bg-gray-200 h-[500px] w-full rounded-xl overflow-hidden shadow-2xl relative">
                {/* Substitua pela imagem real */}
                 <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-medium">
                   [FOTO DA VIVIANE/CLÍNICA AQUI]
                   {/* <Image src="/sua-foto.jpg" fill className="object-cover" alt="Clínica Reviva" /> */}
                 </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-serif font-bold text-reviva-dark">
                Naturalmente Você
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                <p>
                  Na <strong>Reviva Saúde e Beleza</strong>, acreditamos que a estética não é sobre transformar quem você é, mas sim sobre revelar sua versão mais confiante.
                </p>
                <p>
                  Com protocolos personalizados e tecnologia de ponta, oferecemos resultados que prezam pela naturalidade e harmonia.
                </p>
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Atendimento Personalizado", "Profissionais Capacitados", "Ambiente Acolhedor", "Tecnologia de Ponta"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium text-reviva-dark">
                    <CheckCircle className="text-reviva-gold shrink-0" size={20} /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* --- SERVIÇOS (Abas Interativas) --- */}
        <section id="servicos" className="py-24 bg-reviva-light">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-serif font-bold mb-4">Nossos Procedimentos</h2>
              <p className="text-gray-600">Selecione uma categoria para explorar.</p>
            </div>

            {/* Tabs de Categoria */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all border ${
                    activeCategory === cat.id 
                      ? "bg-reviva-gold text-white border-reviva-gold shadow-lg transform scale-105" 
                      : "bg-white text-gray-500 border-transparent hover:border-reviva-gold hover:text-reviva-gold"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Lista de Cards */}
            <div className="grid gap-4">
              {services
                .filter((s) => s.category === activeCategory)
                .map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 group border border-transparent hover:border-reviva-gold/20"
                >
                  <div>
                    <h3 className="font-bold text-lg text-reviva-dark group-hover:text-reviva-gold transition-colors">{service.title}</h3>
                    {service.desc && <p className="text-sm text-gray-500 mt-1">{service.desc}</p>}
                  </div>
                  <div className="text-right w-full sm:w-auto flex flex-row sm:flex-col justify-between items-center sm:items-end">
                    <span className="block font-bold text-xl text-reviva-gold">{service.price}</span>
                    <a href={whatsappLink} className="text-xs font-bold text-gray-400 uppercase tracking-wider mt-1 group-hover:text-green-600 flex items-center gap-1">
                      Agendar <ChevronRight size={12} />
                    </a>
                  </div>
                </motion.div>
              ))}
              
              {services.filter(s => s.category === activeCategory).length === 0 && (
                <p className="text-center text-gray-500 py-8 italic">Selecione outra categoria para ver mais opções.</p>
              )}
            </div>
            
            <div className="mt-12 text-center">
              <a href={whatsappLink} className="inline-flex items-center gap-2 text-reviva-dark font-bold hover:text-reviva-gold transition-colors border-b-2 border-reviva-gold pb-1">
                Ver lista completa no WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* --- LOCALIZAÇÃO & FOOTER --- */}
        <section id="localizacao" className="bg-reviva-dark text-white py-20">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-3xl font-serif mb-8 text-reviva-gold">Entre em Contato</h4>
              
              <div className="space-y-6 text-gray-300">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-full"><MapPin className="text-reviva-gold" size={20} /></div>
                  <div>
                    <h5 className="font-bold text-white mb-1">Visite-nos</h5>
                    <p className="leading-relaxed text-sm">
                      Edifício Vogue, 4° andar, Sala 412<br/>
                      Rua 5, Ch. 116, Lt 1e<br/>
                      Vicente Pires, Brasília/DF
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full"><Phone className="text-reviva-gold" size={20} /></div>
                  <div>
                    <h5 className="font-bold text-white mb-1">Ligue ou Mande mensagem</h5>
                    <p className="text-sm">(61) 3242-5394</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-white/10 p-3 rounded-full"><Clock className="text-reviva-gold" size={20} /></div>
                  <div>
                    <h5 className="font-bold text-white mb-1">Horários</h5>
                    <p className="text-sm">Seg - Sex: 08:00 - 22:00</p>
                    <p className="text-sm">Sábado: 08:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa Embed (Placeholder) */}
            <div className="h-[350px] w-full rounded-2xl overflow-hidden bg-gray-800 border border-gray-700 shadow-2xl">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.749002273059!2d-48.033503!3d-15.817228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a33a3b0b3b3b3%3A0x3b3b3b3b3b3b3b3b!2sVicente%20Pires!5e0!3m2!1spt-BR!2sbr!4v1600000000000" 
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 className="grayscale hover:grayscale-0 transition-all duration-700"
               ></iframe>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Reviva Saúde e Beleza. Todos os direitos reservados.
          </div>
        </section>
      </main>

      {/* WhatsApp Flutuante */}
      <a 
        href={whatsappLink}
        target="_blank"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform animate-bounce hover:animate-none"
        aria-label="Agendar via WhatsApp"
      >
        <Phone size={28} fill="currentColor" />
      </a>
    </div>
  );
}