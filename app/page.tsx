"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Instagram, Menu, X, CheckCircle, ChevronRight, Sparkles, ChevronDown } from "lucide-react";

// --- CATEGORIAS (Organizadas para facilitar a busca) ---
const categories = [
  { id: 'facial', name: 'Estética Facial' },
  { id: 'corporal', name: 'Corporal & Capilar' },
  { id: 'beleza', name: 'Beleza & Cílios' },
  { id: 'otomodelacao', name: 'Otomodelação' },
];

// --- LISTA COMPLETA DE SERVIÇOS ---
const services = [
  // --- ESTÉTICA FACIAL (Toxina, Preenchimento, Fios, Skinbooster, Limpeza) ---
  { category: 'facial', title: 'Toxina Botulínica Full Face + Platisma (Nefertite)', price: 'R$ 2.200,00', desc: 'Face completa e pescoço.' },
  { category: 'facial', title: 'Toxina Botulínica Full Face', price: 'R$ 1.500,00', desc: 'Tratamento completo para rugas faciais.' },
  { category: 'facial', title: 'Toxina Botulínica Terço Superior', price: 'R$ 900,00', desc: 'Testa, glabela e olhos.' },
  { category: 'facial', title: 'Toxina Botulínica Terço Sup. + Nefertite', price: 'R$ 1.500,00', desc: 'Terço superior e pescoço.' },
  { category: 'facial', title: 'Mesotox', price: 'R$ 800,00', desc: 'Toxina botulínica para qualidade da pele.' },
  { category: 'facial', title: 'Toxina por Unidade', price: 'R$ 30,00', desc: 'Aplicação pontual.' },
  
  { category: 'facial', title: 'Preenchimento Ácido Hialurônico (1ml)', price: 'R$ 899,00', desc: 'Volume e contorno natural.' },
  { category: 'facial', title: 'Revitalização Facial AH (2ml)', price: 'R$ 200,00', desc: 'Hidratação profunda não reticulada.' },
  { category: 'facial', title: 'Emagrecimento Facial', price: 'R$ 600,00', desc: 'Redução de medidas na face.' },
  
  { category: 'facial', title: 'Bioestimulador Sculptra (Galderma)', price: 'R$ 2.200,00', desc: 'Estímulo potente de colágeno.' },
  { category: 'facial', title: 'Bioestimulador Elleva (Rennova)', price: 'R$ 1.800,00', desc: '210 mg.' },
  { category: 'facial', title: 'Bioestimulador Diamond (Rennova)', price: 'R$ 1.800,00', desc: 'Hidroxiapatita de Cálcio.' },
  { category: 'facial', title: 'Bioestimulador Radiesse (Merz)', price: 'R$ 1.800,00', desc: '1,5 ml.' },
  { category: 'facial', title: 'Evo PDRN', price: 'R$ 1.200,00', desc: 'Regeneração celular avançada.' },
  
  { category: 'facial', title: 'Fios Filler 21G (4 unid)', price: 'R$ 1.400,00', desc: 'Preenchimento e sustentação.' },
  { category: 'facial', title: 'Fios Liso Agulhado 29G (10 unid)', price: 'R$ 1.200,00', desc: 'Estímulo de colágeno.' },
  { category: 'facial', title: 'Fios Espiculado 19G (unid)', price: 'R$ 320,00', desc: 'Tração e lifting.' },
  { category: 'facial', title: 'Fios Parafuso 27G (unid)', price: 'R$ 150,00', desc: 'Volumização pontual.' },
  
  { category: 'facial', title: 'Skinbooster Face', price: 'R$ 600,00', desc: 'Hidratação injetável profunda.' },
  { category: 'facial', title: 'Skinbooster Pescoço', price: 'R$ 300,00', desc: 'Rejuvenescimento do pescoço.' },
  { category: 'facial', title: 'Skinbooster Colo', price: 'R$ 450,00', desc: 'Tratamento para o colo.' },
  { category: 'facial', title: 'Skinbooster Mãos', price: 'R$ 300,00', desc: 'Hidratação e rejuvenescimento das mãos.' },
  { category: 'facial', title: 'Skinbooster 4 Regiões', price: 'R$ 1.200,00', desc: 'Combo completo de hidratação.' },
  
  { category: 'facial', title: 'Limpeza de Pele Master', price: 'R$ 250,00', desc: 'Vapor de ozônio, ultrassom e fotomodulação.' },
  { category: 'facial', title: 'Limpeza de Pele com Vapor', price: 'R$ 180,00', desc: 'Limpeza profunda clássica.' },
  { category: 'facial', title: 'Limpeza Plus Dermo', price: 'R$ 120,00', desc: 'Manutenção da pele limpa.' },
  { category: 'facial', title: 'Peeling Ácido Retinóico', price: 'R$ 99,00', desc: 'Valor promocional de campanha.' },
  { category: 'facial', title: 'Peeling Ultrassônico', price: 'R$ 80,00', desc: 'Renovação celular suave.' },
  { category: 'facial', title: 'Microagulhamento', price: 'R$ 300,00', desc: 'Indução percutânea de colágeno.' },
  { category: 'facial', title: 'Protocolo Ultra Pré HOF', price: 'R$ 800,00', desc: 'Tratamento para manchas hipercrômicas.' },
  { category: 'facial', title: 'Protocolo Revita Pré HOF', price: 'R$ 800,00', desc: 'Tratamento focado em acne.' },
  { category: 'facial', title: 'Laser Vermelho / LED Azul', price: 'R$ 120,00', desc: 'Fototerapia.' },
  { category: 'facial', title: 'Laser + Máscara Facial', price: 'R$ 240,00', desc: 'Sessão completa de fototerapia.' },
  { category: 'facial', title: 'Máscara Argila Branca', price: 'R$ 120,00', desc: 'Clareamento e hidratação.' },

  // --- CORPORAL & CAPILAR ---
  { category: 'corporal', title: 'Lipoquímica Enzimática (Sessão)', price: 'R$ 180,00', desc: 'Pacote c/ 10 sessões: R$ 1.200,00.' },
  { category: 'corporal', title: 'Hiperidrose', price: 'R$ 2.500,00', desc: 'Axila, palma das mãos ou virilha.' },
  { category: 'corporal', title: 'Ativador Metabólico', price: 'R$ 200,00', desc: 'Acelerador de metabolismo (30 min).' },
  { category: 'corporal', title: 'Intradermoterapia Capilar', price: 'R$ 220,00', desc: 'Aplicação direta de ativos.' },
  { category: 'corporal', title: 'Terapia Capilar (Sessão)', price: 'R$ 250,00', desc: 'Tratamento completo de 2h.' },
  { category: 'corporal', title: 'Tratamento Capilar', price: 'R$ 200,00', desc: 'Cuidados essenciais para os fios.' },
  { category: 'corporal', title: 'Camuflagem de Estrias', price: 'R$ 300,00', desc: 'Valor por área.' },
  { category: 'corporal', title: 'Camuflagem de Cicatriz', price: 'R$ 200,00', desc: 'Avaliação necessária (A partir de R$ 300,00).' },
  { category: 'corporal', title: 'Dermopigmentação de Areola', price: 'R$ 900,00', desc: 'Reconstrução estética.' },

  // --- BELEZA & CÍLIOS ---
  { category: 'beleza', title: 'Design de Sobrancelhas', price: 'R$ 60,00', desc: 'Design personalizado.' },
  { category: 'beleza', title: 'Design com Henna / Tintura', price: 'R$ 70,00', desc: 'Realce e definição.' },
  { category: 'beleza', title: 'Micropigmentação Sobrancelhas', price: 'R$ 350,00', desc: 'Fio a fio ou shadow.' },
  { category: 'beleza', title: 'Finalização na Cera', price: 'R$ 10,00', desc: 'Acabamento perfeito.' },
  { category: 'beleza', title: 'Extensão de Cílios', price: 'R$ 250,00', desc: 'Volume e alongamento (3h).' },
  { category: 'beleza', title: 'Micropigmentação Labial', price: 'R$ 350,00', desc: 'Efeito batom ou natural.' },
  { category: 'beleza', title: 'Neutralização Labial', price: 'R$ 350,00', desc: 'Correção de cor (por sessão).' },
  { category: 'beleza', title: 'SPA Labial', price: 'R$ 100,00', desc: 'Hidratação e esfoliação.' },
  { category: 'beleza', title: 'Rejuvenescimento Labial', price: 'R$ 250,00', desc: 'Tratamento anti-age.' },
  { category: 'beleza', title: 'Depilação Buço', price: 'R$ 15,00', desc: 'Remoção com cera.' },
  { category: 'beleza', title: 'Depilação Face', price: 'R$ 20,00', desc: 'Remoção completa.' },

  // --- OTOMODELAÇÃO ---
  { category: 'otomodelacao', title: 'Otomodelação Infantil', price: 'R$ 3.000,00', desc: 'Correção de orelhas sem cortes.' },
  { category: 'otomodelacao', title: 'Otomodelação Adulto', price: 'R$ 2.388,00', desc: 'Valor à vista ou 12x R$ 199,00.' },
];

const faq = [
  { question: "Como agendar uma avaliação?", answer: "Você pode agendar diretamente pelo nosso WhatsApp clicando no botão 'Agendar' no topo do site. A avaliação estética tem o valor de R$ 100,00." },
  { question: "Quais as formas de pagamento?", answer: "Aceitamos cartões de crédito, débito e Pix. Parcelamos procedimentos maiores, como a Otomodelação, em até 12x." },
  { question: "Onde a clínica fica localizada?", answer: "Estamos no Edifício Vogue, em Vicente Pires - Brasília, com estacionamento fácil e acessibilidade." },
];

// --- COMPONENTES VISUAIS ---
const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("facial");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const whatsappLink = "https://wa.me/556132425394?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20Reviva%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!";

  return (
    <div className="min-h-screen bg-reviva-cream text-reviva-dark font-sans overflow-hidden">
      
      {/* --- NAVBAR --- */}
      <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-white/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-serif font-bold text-reviva-gold tracking-[0.15em] hover:opacity-80 transition-opacity">
            REVIVA
          </a>

          <nav className="hidden md:flex gap-8 items-center font-medium text-sm tracking-widest text-gray-600 uppercase">
            {["Início", "Sobre", "Procedimentos", "Localização"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="hover:text-reviva-gold transition-colors relative group">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-reviva-gold transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href={whatsappLink}
              target="_blank"
              className="bg-reviva-dark text-white px-8 py-3 rounded-full hover:bg-reviva-gold transition-all duration-300 shadow-lg hover:shadow-reviva-gold/30 transform hover:-translate-y-1 font-bold text-xs"
            >
              AGENDAR
            </a>
          </nav>

          <button className="md:hidden text-reviva-dark p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100vh" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-reviva-cream absolute top-full left-0 w-full border-t border-gray-100 overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-8 text-center font-serif text-2xl h-full justify-center">
                {["Início", "Sobre", "Procedimentos", "Localização"].map((item) => (
                   <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} onClick={() => setIsMobileMenuOpen(false)} className="hover:text-reviva-gold">{item}</a>
                ))}
                <a href={whatsappLink} className="text-reviva-gold font-bold mt-4">Agendar Agora</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main>
        {/* --- HERO SECTION --- */}
        <section id="inicio" className="relative pt-32 pb-20 px-6 flex flex-col items-center justify-center text-center min-h-screen">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div 
              animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }} 
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-reviva-gold/10 rounded-full blur-[100px]" 
            />
            <motion.div 
              animate={{ y: [0, 30, 0], opacity: [0.3, 0.5, 0.3] }} 
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#E8DCC4]/40 rounded-full blur-[120px]" 
            />
          </div>
          
          <div className="relative z-10 max-w-5xl space-y-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 border border-reviva-gold/30 bg-white/40 backdrop-blur-md rounded-full px-6 py-2 shadow-sm"
            >
              <Sparkles size={14} className="text-reviva-gold" />
              <span className="text-xs font-bold tracking-[0.2em] text-reviva-dark uppercase">
                Estética Avançada em Brasília
              </span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium text-reviva-dark leading-[1.1] tracking-tight"
            >
              Reviva sua <span className="text-reviva-gold italic font-normal">beleza</span>. <br />
              Eleve sua essência.
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
            >
              Transformamos sua autoestima com técnicas modernas e naturais.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            >
              <a 
                href={whatsappLink}
                target="_blank"
                className="group relative px-8 py-4 bg-reviva-dark text-white rounded-full font-bold overflow-hidden shadow-2xl hover:shadow-reviva-gold/50 transition-all"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-reviva-gold to-reviva-goldDark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">Agendar Avaliação <ChevronRight size={16} /></span>
              </a>
              <a 
                href="#servicos"
                className="px-8 py-4 bg-white border border-gray-200 text-reviva-dark rounded-full font-bold hover:border-reviva-gold hover:text-reviva-gold transition-all"
              >
                Ver Procedimentos
              </a>
            </motion.div>
          </div>
        </section>

        {/* --- MARQUEE --- */}
        <div className="bg-reviva-gold py-4 overflow-hidden whitespace-nowrap relative z-20">
          <div className="animate-marquee inline-block">
            {[...Array(10)].map((_, i) => (
              <span key={i} className="text-white font-serif italic text-2xl mx-8 opacity-80">
                Estética Avançada • Autoestima • Naturalidade • Bem-estar •
              </span>
            ))}
          </div>
        </div>

        {/* --- SOBRE --- */}
        <section id="sobre" className="py-32 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <FadeIn>
              <div className="relative">
                <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-reviva-gold opacity-50"></div>
                <div className="bg-gray-100 aspect-[3/4] md:aspect-square w-full rounded-[2rem] overflow-hidden shadow-2xl relative">
                   <div className="absolute inset-0 bg-[#EAEAEA] flex flex-col items-center justify-center text-gray-400">
                     <span className="text-5xl mb-4">🌿</span>
                     <span className="font-serif italic">Foto da Clínica</span>
                   </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-reviva-gold opacity-50"></div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h2 className="text-xs font-bold tracking-[0.2em] text-reviva-gold uppercase mb-4">Sobre Nós</h2>
              <h3 className="text-4xl md:text-5xl font-serif text-reviva-dark mb-8 leading-tight">
                Naturalmente Você.
              </h3>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
                <p>
                  Na <strong>Reviva Saúde e Beleza</strong>, acreditamos que a verdadeira beleza está em realçar o que você tem de melhor — sem exageros, sem excessos, com total respeito à sua essência.
                </p>
                <p>
                  Com um time experiente e apaixonado, combinamos saúde, estética e amor pelo que fazemos. Você estará em mãos seguras, num ambiente onde cada atendimento é feito com carinho, atenção e excelência.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-10">
                <div className="border-l border-reviva-gold/30 pl-4">
                    <div className="text-3xl font-serif text-reviva-gold">Vicente Pires</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Localização</div>
                </div>
                <div className="border-l border-reviva-gold/30 pl-4">
                    <div className="text-3xl font-serif text-reviva-gold">5.0</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">Avaliação</div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* --- MENU DE SERVIÇOS --- */}
        <section id="servicos" className="py-32 bg-reviva-light/50 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-reviva-dark">Menu de Tratamentos</h2>
              <p className="text-gray-600">Explore nossa seleção completa de procedimentos.</p>
            </div>

            {/* Abas de Categorias */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-8 py-3 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat.id 
                      ? "bg-reviva-gold text-white shadow-lg scale-105" 
                      : "bg-white text-gray-500 hover:text-reviva-gold hover:shadow-md"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Grid de Serviços */}
            <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {services
                  .filter((s) => s.category === activeCategory)
                  .map((service, index) => (
                  <motion.div 
                    layout
                    key={service.title + index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-white p-6 rounded-3xl shadow-sm border border-transparent hover:border-reviva-gold/30 hover:shadow-xl transition-all duration-500 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                      <Sparkles size={40} className="text-reviva-gold" />
                    </div>
                    <div className="relative z-10 flex flex-col h-full justify-between">
                      <div>
                        <h3 className="font-serif text-xl text-reviva-dark group-hover:text-reviva-gold transition-colors mb-2">{service.title}</h3>
                        <p className="text-gray-500 font-light text-sm mb-4">{service.desc}</p>
                      </div>
                      <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
                        <span className="text-reviva-goldDark font-bold text-lg">
                          {service.price}
                        </span>
                        <a href={whatsappLink} className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-reviva-gold transition-colors">
                          Agendar
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="py-24 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-serif text-center mb-12">Dúvidas Frequentes</h2>
            <div className="space-y-4">
              {faq.map((item, i) => (
                <div key={i} className="border-b border-gray-100 pb-4">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex justify-between items-center w-full text-left py-4 focus:outline-none hover:text-reviva-gold transition-colors"
                  >
                    <span className="font-medium text-lg text-reviva-dark">{item.question}</span>
                    <ChevronDown className={`text-reviva-gold transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-500 pb-4 leading-relaxed font-light">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer id="localizacao" className="bg-reviva-dark text-white pt-24 pb-12">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-16 mb-16">
            <div className="space-y-6">
              <span className="text-3xl font-serif font-bold text-reviva-gold">REVIVA</span>
              <p className="text-gray-400 font-light leading-relaxed max-w-sm">
                Sua clínica de estética de confiança em Vicente Pires. Tecnologia, conforto e resultados reais.
              </p>
              <div className="flex gap-4">
                <a href="https://instagram.com/reviva.bsb" target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-reviva-gold transition-colors">
                  <Instagram size={18} />
                </a>
                <a href={whatsappLink} target="_blank" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-reviva-gold transition-colors">
                  <Phone size={18} />
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold tracking-widest text-reviva-gold uppercase">Contato</h4>
              <ul className="space-y-4 text-gray-300 font-light">
                <li className="flex items-start gap-3">
                  <MapPin className="text-reviva-gold shrink-0 mt-1" size={18} />
                  <span>Edifício Vogue, 4° andar, Sala 412<br/>Vicente Pires, Brasília/DF</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-reviva-gold shrink-0" size={18} />
                  <span>(61) 3242-5394</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Seg - Sex: 08h às 22h</span>
                </li>
              </ul>
            </div>

            <div className="h-[200px] w-full rounded-2xl overflow-hidden bg-gray-800 relative group border border-gray-700">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.749064789886!2d-48.0336!3d-15.8166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ5JzAwLjAiUyA0OMKwMDInMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr3"
                 width="100%" 
                 height="100%" 
                 style={{border:0}} 
                 allowFullScreen={true} 
                 loading="lazy" 
                 className="opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
               ></iframe>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-xs text-gray-500 uppercase tracking-widest">
              © {new Date().getFullYear()} Reviva Saúde e Beleza. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </main>
      
      {/* Botão Flutuante do WhatsApp */}
      <a 
        href={whatsappLink}
        target="_blank"
        className="fixed bottom-8 right-8 z-50 group"
      >
        <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-reviva-dark px-4 py-2 rounded-lg shadow-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Agende agora
        </span>
        <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 border-4 border-white/20">
           <Phone size={32} fill="white" className="text-white" />
        </div>
      </a>
    </div>
  );
}