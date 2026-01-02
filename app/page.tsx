"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { Phone, MapPin, Instagram, Menu, X, ChevronRight, Sparkles, ChevronDown, ChevronLeft, Star, ArrowUpRight, Clock, User } from "lucide-react";

// --- DADOS REAIS DA REVIVA ---

// 1. Categorias (Mapeadas do seu texto)
const categories = [
  { id: 'facial', name: 'Facial' },
  { id: 'corporal', name: 'Corporal' },
  { id: 'beleza', name: 'Beleza & Cílios' },
  { id: 'dermopig', name: 'Dermopigmentação' },
  { id: 'otomodelacao', name: 'Otomodelação' },
];

// 2. Lista Completa de Serviços (Preços e Tempos Reais)
const services = [
  // --- FACIAL (Estética) ---
  { category: 'facial', title: 'Toxina Botulínica Full Face + Platisma (Nefertite)', price: 'R$ 2.200,00', desc: 'Tratamento completo face e pescoço. Duração: 1h' },
  { category: 'facial', title: 'Toxina Botulínica Full Face', price: 'R$ 1.500,00', desc: 'Tratamento completo para rugas. Duração: 1h' },
  { category: 'facial', title: 'Toxina Botulínica Terço Superior', price: 'R$ 900,00', desc: 'Testa, glabela e olhos. Duração: 1h' },
  { category: 'facial', title: 'Preenchimento Ácido Hialurônico (1ml)', price: 'R$ 899,00', desc: 'Volume e contorno. Duração: 1h' },
  { category: 'facial', title: 'Bioestimulador Sculptra (Galderma)', price: 'R$ 2.200,00', desc: 'Estímulo de colágeno potente. Duração: 1h' },
  { category: 'facial', title: 'Bioestimulador Elleva (Rennova)', price: 'R$ 1.800,00', desc: '210 mg. Duração: 1h' },
  { category: 'facial', title: 'Bioestimulador Radiesse (Merz)', price: 'R$ 1.800,00', desc: '1,5 ml. Duração: 1h' },
  { category: 'facial', title: 'Evo PDRN', price: 'R$ 1.200,00', desc: 'Regeneração celular. Duração: 1h' },
  { category: 'facial', title: 'Fios Filler 21G (4 unid)', price: 'R$ 1.400,00', desc: 'Blister com 4 unidades. Duração: 1h' },
  { category: 'facial', title: 'Fios Liso Agulhado (10 unid)', price: 'R$ 1.200,00', desc: '29G 38 mm. Duração: 1h' },
  { category: 'facial', title: 'Fios Espiculado (Unid)', price: 'R$ 320,00', desc: '19G 100 mm. Duração: 1h 30 min' },
  { category: 'facial', title: 'Revitalização Facial AH', price: 'R$ 200,00', desc: 'Não reticulado 1,2 mg - 2 ml. Duração: 1h' },
  { category: 'facial', title: 'Skinbooster Face', price: 'R$ 600,00', desc: 'Hidratação profunda. Duração: 1h' },
  { category: 'facial', title: 'Skinbooster 4 Regiões', price: 'R$ 1.200,00', desc: 'Face, pescoço, colo e mãos. Duração: 2h' },
  { category: 'facial', title: 'Microagulhamento', price: 'R$ 300,00', desc: 'Indução de colágeno. Duração: 1h' },
  { category: 'facial', title: 'Limpeza de Pele Master', price: 'R$ 250,00', desc: 'C/ vapor ozônio, ultrassônico e foto modulação. Duração: 2h' },
  { category: 'facial', title: 'Limpeza de Pele (Vapor Ozônio)', price: 'R$ 180,00', desc: 'Limpeza profunda tradicional. Duração: 1h 40 min' },
  { category: 'facial', title: 'Peeling Ácido Retinóico', price: 'R$ 150,00', desc: 'Campanha promocional: R$ 99,00. Duração: 1h' },
  { category: 'facial', title: 'Emagrecimento Facial', price: 'R$ 600,00', desc: 'Redução de papada e contorno. Duração: 1h' },
  { category: 'facial', title: 'Protocolo Revita Pré HOF (Acne)', price: 'R$ 800,00', desc: 'Tratamento focado em acne. Duração: 1h 30 min' },

  // --- CORPORAL ---
  { category: 'corporal', title: 'Lipoquímica Enzimática', price: 'R$ 180,00', desc: 'Sessão avulsa. Pacote c/ 10: R$ 1.200,00. Duração: 2h' },
  { category: 'corporal', title: 'Hiperidrose', price: 'R$ 2.500,00', desc: 'Axila, palma das mãos ou virilha. Duração: 1h' },
  { category: 'corporal', title: 'Camuflagem de Estrias', price: 'R$ 300,00', desc: 'Valor por área. Duração: 1h' },
  { category: 'corporal', title: 'Camuflagem de Cicatriz', price: 'R$ 200,00', desc: 'A partir de R$ 300,00 (Avaliar). Duração: 1h' },
  { category: 'corporal', title: 'Intradermoterapia Capilar', price: 'R$ 220,00', desc: 'Aplicação no couro cabeludo. Duração: 1h' },
  { category: 'corporal', title: 'Terapia Capilar', price: 'R$ 250,00', desc: 'Sessão completa. Duração: 2h' },
  { category: 'corporal', title: 'Ativador Metabólico', price: 'R$ 200,00', desc: 'Aplicação intramuscular. Duração: 30 min' },

  // --- BELEZA & CÍLIOS ---
  { category: 'beleza', title: 'Design de Sobrancelhas', price: 'R$ 60,00', desc: 'Design personalizado. Duração: 40 min' },
  { category: 'beleza', title: 'Design com Henna / Tintura', price: 'R$ 70,00', desc: 'Realce do olhar. Duração: 1h' },
  { category: 'beleza', title: 'Micropigmentação Sobrancelhas', price: 'R$ 350,00', desc: 'Técnica fio a fio ou shadow. Duração: 2h' },
  { category: 'beleza', title: 'Extensão de Cílios', price: 'R$ 250,00', desc: 'Volume e alongamento. Duração: 3h' },
  { category: 'beleza', title: 'Micropigmentação Labial', price: 'R$ 350,00', desc: 'Efeito batom ou natural. Duração: 2h' },
  { category: 'beleza', title: 'SPA Labial', price: 'R$ 100,00', desc: 'Hidratação e esfoliação. Duração: 40 min' },
  { category: 'beleza', title: 'Depilação Buço', price: 'R$ 15,00', desc: 'Remoção com cera. Duração: 30 min' },

  // --- DERMOPIGMENTAÇÃO ---
  { category: 'dermopig', title: 'Dermopigmentação de Areola', price: 'R$ 900,00', desc: 'Reconstrução estética. Duração: 1h 30 min' },
  { category: 'dermopig', title: 'Neutralização Labial', price: 'R$ 350,00', desc: 'Correção de cor (por sessão). Duração: 2h' },
  { category: 'dermopig', title: 'Rejuvenescimento Labial', price: 'R$ 250,00', desc: 'Tratamento anti-idade. Duração: 1h 30 min' },

  // --- OTOMODELAÇÃO ---
  { category: 'otomodelacao', title: 'Otomodelação Adulto', price: 'R$ 2.388,00', desc: '12x R$ 199,00. Sem cortes. Duração: 3h' },
  { category: 'otomodelacao', title: 'Otomodelação Infantil', price: 'R$ 3.000,00', desc: 'Correção definitiva. Duração: 3h' },
];

// 3. Profissionais
const professionals = [
  { name: "Viviane Borges de Oliveira Mendonça", role: "Enfermeira especialista em Estética Avançada" },
  { name: "Nárgila Souza Dias Mendonça", role: "Lash Design" }
];

// 4. FAQ e Informações
const faq = [
  { question: "Como funciona a avaliação?", answer: "Nossa avaliação estética tem o valor de R$ 100,00, que é revertido no seu procedimento. Analisamos sua anatomia e indicamos os melhores tratamentos." },
  { question: "Quais as formas de pagamento?", answer: "Aceitamos cartões de crédito, débito e Pix. Parcelamos procedimentos maiores, como a Otomodelação, em até 12x." },
  { question: "Onde a clínica fica localizada?", answer: "Estamos no Edifício Vogue, 4º andar, sala 412, em Vicente Pires - Brasília/DF." },
];

const hours = [
  { day: "Segunda a Sexta", time: "08:00 - 22:00" },
  { day: "Sábado", time: "08:00 - 20:00" },
  { day: "Domingo", time: "Fechado" }
];

// --- COMPONENTES VISUAIS AUXILIARES ---

const letterVariant = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
};

const containerVariant = {
  visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
};

const RevealTitle = ({ text, className }: { text: string, className?: string }) => (
  <motion.h1 
    className={`overflow-hidden flex flex-wrap justify-center gap-x-3 ${className}`}
    variants={containerVariant}
    initial="hidden"
    animate="visible"
  >
    {text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden pb-4">
        <motion.span variants={letterVariant} className="inline-block">
          {word}
        </motion.span>
      </span>
    ))}
  </motion.h1>
);

export default function Home() {
  const [activeCategory, setActiveCategory] = useState("facial");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const yHero = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);
  
  const whatsappLink = "https://wa.me/556132425394?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20na%20Reviva!";

  const handleScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const progress = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 340; 
      carouselRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen text-reviva-dark font-sans overflow-x-hidden selection:bg-reviva-gold selection:text-white bg-[#FDFCF8]">
      
      {/* --- NAVBAR --- */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed w-full top-0 z-50"
      >
        <div className="absolute inset-0 glass-panel border-b border-white/40 shadow-sm"></div>
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative z-10">
          <a href="#" className="relative group">
            <span className="text-2xl font-serif font-bold text-gold-gradient tracking-[0.2em]">REVIVA</span>
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-reviva-gold transition-all duration-500 group-hover:w-full"></span>
          </a>

          <nav className="hidden md:flex gap-12 items-center font-medium text-[11px] tracking-[0.25em] text-gray-800 uppercase">
            {["Início", "Sobre", "Menu", "Contato"].map((item) => (
              <a key={item} href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} className="hover:text-reviva-gold transition-colors duration-300">
                {item}
              </a>
            ))}
            <motion.a 
              href={whatsappLink}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-reviva-dark text-white px-8 py-3 border border-reviva-dark hover:bg-transparent hover:text-reviva-dark transition-all duration-300 font-bold"
            >
              AGENDAR
            </motion.a>
          </nav>

          <button className="md:hidden p-2 text-reviva-dark" onClick={() => setIsMobileMenuOpen(true)}>
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </motion.header>

      {/* --- MENU MOBILE --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#FFFCF5] z-[60] flex flex-col items-center justify-center space-y-8"
          >
            <button className="absolute top-6 right-6 p-4 rounded-full bg-black/5 hover:bg-reviva-gold/20 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
               <X size={32} className="text-reviva-dark" />
            </button>
            {["Início", "Sobre", "Menu", "Contato"].map((item, i) => (
               <motion.a 
                 key={item} 
                 href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                 onClick={() => setIsMobileMenuOpen(false)} 
                 initial={{ y: 50, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.1 * i }}
                 className="font-serif text-5xl text-reviva-dark hover:text-reviva-gold transition-colors italic cursor-pointer"
               >
                 {item}
               </motion.a>
            ))}
            <div className="absolute bottom-12 text-center space-y-2 opacity-50 text-sm">
                <p>Brasília - DF</p>
                <p>Vicente Pires</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* --- HERO SECTION --- */}
        <section id="inicio" className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
          {/* Background Dinâmico */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              style={{ y: useTransform(scrollY, [0, 1000], [0, -300]) }}
              className="absolute top-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-reviva-gold/5 rounded-full blur-[100px]" 
            />
            <motion.div 
              style={{ y: useTransform(scrollY, [0, 1000], [0, -100]) }}
              className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-reviva-goldDark/5 rounded-full blur-[120px]" 
            />
          </div>
          
          <motion.div style={{ y: yHero, opacity: opacityHero }} className="relative z-10 max-w-5xl space-y-12">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1.5 }}
              className="inline-flex items-center gap-3 px-6 py-2 border border-reviva-gold/30 rounded-full bg-white/40 backdrop-blur-md"
            >
              <Star size={10} className="text-reviva-gold fill-reviva-gold animate-pulse" />
              <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-gray-600">
                Naturalmente Você
              </span>
            </motion.div>
            
            <RevealTitle 
              text="Reviva sua beleza." 
              className="text-6xl md:text-9xl font-serif text-reviva-dark leading-[0.9] tracking-tight"
            />
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ delay: 0.8, duration: 1 }}
              className="text-gray-500 text-lg md:text-2xl max-w-xl mx-auto font-light leading-relaxed italic"
            >
              Transformamos sua autoestima com técnicas modernas e naturais.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
            >
              <a 
                href={whatsappLink}
                target="_blank"
                className="group relative px-12 py-5 bg-reviva-dark text-white overflow-hidden transition-all hover:scale-105 shadow-xl hover:shadow-reviva-gold/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-reviva-gold to-reviva-goldDark translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative z-10 font-bold text-xs tracking-[0.2em] uppercase flex items-center justify-center gap-3">
                  Agendar Agora <ArrowUpRight size={16} />
                </span>
              </a>
            </motion.div>
          </motion.div>

          <motion.div 
            style={{ opacity: opacityHero }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[10px] tracking-[0.3em] text-reviva-gold uppercase">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-reviva-gold to-transparent"></div>
          </motion.div>
        </section>

        {/* --- MARQUEE --- */}
        <div className="py-8 border-y border-reviva-gold/10 bg-white/50 backdrop-blur-sm overflow-hidden">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
            className="inline-flex whitespace-nowrap"
          >
            {[...Array(6)].map((_, i) => (
              <span key={i} className="text-4xl md:text-6xl font-serif italic text-reviva-gold/15 mx-12">
                Autoestima &nbsp; • &nbsp; Bem-estar &nbsp; • &nbsp; Naturalidade &nbsp; • &nbsp; Excelência &nbsp; • &nbsp;
              </span>
            ))}
          </motion.div>
        </div>

        {/* --- SOBRE (TEXTO REAL) --- */}
        <section id="sobre" className="py-40 px-6 relative bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
            {/* Imagem Artística */}
            <div className="relative z-10 group">
              <div className="absolute inset-0 bg-reviva-gold/10 transform translate-x-4 translate-y-4 -z-10 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
              <div className="aspect-[4/5] bg-[#F0F0F0] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out border border-gray-100">
                 <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-300">
                   <Sparkles size={48} strokeWidth={1} className="mb-4" />
                   <span className="font-serif italic text-3xl">Foto Clínica</span>
                 </div>
              </div>
            </div>
            
            <div className="space-y-10">
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-reviva-gold"></div>
                  <span className="text-reviva-gold font-bold text-xs tracking-[0.3em] uppercase">Quem Somos</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-serif text-reviva-dark leading-tight mb-8">
                  Cuidado com <br /><span className="italic text-gray-400 font-light">propósito.</span>
                </h2>
                <div className="space-y-6 text-gray-600 font-light text-lg leading-relaxed text-justify">
                  <p>
                    Na <strong>Reviva Saúde e Beleza</strong>, acreditamos que a verdadeira beleza está em realçar o que você tem de melhor — sem exageros, sem excessos, com total respeito à sua essência.
                  </p>
                  <p>
                    Localizada no coração de Vicente Pires, nossa clínica foi criada para oferecer um espaço acolhedor, moderno e exclusivo. Nossos protocolos são personalizados, unindo técnicas avançadas à sensibilidade de entender o que você realmente precisa.
                  </p>
                </div>
                
                {/* Cards Profissionais */}
                <div className="mt-12 pt-8 border-t border-gray-100">
                    <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-6">Nossos Especialistas</h4>
                    <div className="grid gap-6">
                        {professionals.map((prof, idx) => (
                             <div key={idx} className="flex items-center gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-reviva-gold group-hover:bg-reviva-gold group-hover:text-white transition-colors">
                                    <User size={18} />
                                </div>
                                <div>
                                    <p className="font-serif text-lg text-reviva-dark">{prof.name}</p>
                                    <p className="text-xs text-gray-400 uppercase tracking-wider">{prof.role}</p>
                                </div>
                             </div>
                        ))}
                    </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- MENU (LISTA REAL) --- */}
        <section id="menu" className="py-40 relative bg-[#FDFCF8]">
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
              <div className="max-w-xl">
                <h2 className="text-5xl md:text-6xl font-serif text-reviva-dark mb-6">Menu Select</h2>
                <p className="text-gray-500 font-light text-lg">Procedimentos de alta performance para resultados visíveis.</p>
              </div>
              
              <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      if (carouselRef.current) carouselRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                    }}
                    className={`px-6 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 border rounded-none ${
                      activeCategory === cat.id 
                        ? "bg-reviva-dark text-white border-reviva-dark" 
                        : "bg-transparent text-gray-400 border-gray-200 hover:border-reviva-gold hover:text-reviva-gold"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Carrossel */}
            <div className="relative group/carousel">
                {/* Controles Desktop */}
                <div className="absolute -top-32 right-0 hidden md:flex gap-4">
                   <button onClick={() => scrollCarousel('left')} className="p-4 border border-gray-200 hover:border-reviva-gold hover:bg-reviva-gold hover:text-white transition-all duration-300 rounded-full"><ChevronLeft size={20}/></button>
                   <button onClick={() => scrollCarousel('right')} className="p-4 border border-gray-200 hover:border-reviva-gold hover:bg-reviva-gold hover:text-white transition-all duration-300 rounded-full"><ChevronRight size={20}/></button>
                </div>

                <div 
                  ref={carouselRef}
                  onScroll={handleScroll}
                  className="flex gap-8 overflow-x-auto pb-16 pt-8 px-4 snap-x snap-mandatory scrollbar-hide"
                  style={{ scrollbarWidth: 'none' }}
                >
                  <AnimatePresence mode="popLayout">
                    {services
                      .filter((s) => s.category === activeCategory)
                      .map((service, index) => (
                      <motion.div 
                        layout
                        key={service.title + index}
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="flex-shrink-0 w-[85vw] sm:w-[380px] snap-center"
                      >
                        <div className="glass-card h-full p-10 hover:-translate-y-3 transition-transform duration-500 flex flex-col justify-between group min-h-[420px] border border-white/60 bg-white/40 hover:bg-white/80 hover:shadow-2xl hover:shadow-gray-200/50">
                          <div>
                            <div className="flex justify-between items-start mb-8">
                              <span className="text-xs font-bold text-gray-300 tracking-widest uppercase border-b border-gray-200 pb-2">0{index + 1}</span>
                              <div className="p-2 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-500">
                                <Sparkles size={16} className="text-reviva-gold" />
                              </div>
                            </div>
                            <h3 className="font-serif text-2xl text-reviva-dark mb-4 group-hover:text-gold-gradient transition-colors leading-tight min-h-[4rem]">
                              {service.title}
                            </h3>
                            <p className="text-gray-500 font-light text-sm leading-relaxed border-l-2 border-transparent group-hover:border-reviva-gold/30 pl-0 group-hover:pl-4 transition-all duration-500">
                              {service.desc}
                            </p>
                          </div>
                          
                          <div className="mt-10 flex items-end justify-between">
                            <div className="flex flex-col">
                              <span className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">Investimento</span>
                              <span className="font-serif italic text-2xl text-reviva-goldDark">{service.price}</span>
                            </div>
                            <a href={whatsappLink} target="_blank" className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-reviva-dark group-hover:bg-reviva-dark group-hover:border-reviva-dark group-hover:text-white transition-all duration-300">
                              <ArrowUpRight size={20} />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Barra de Progresso */}
                <div className="w-full h-px bg-gray-200 mt-4 relative overflow-hidden max-w-sm mx-auto rounded-full">
                  <motion.div 
                    className="absolute top-0 left-0 h-full bg-reviva-gold" 
                    style={{ width: `${scrollProgress}%` }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                </div>
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        <section className="py-32 bg-white relative">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-16">
               <span className="text-reviva-gold font-bold text-xs tracking-[0.3em] uppercase">Tire suas dúvidas</span>
               <h2 className="text-4xl font-serif mt-4 text-reviva-dark">Perguntas Frequentes</h2>
            </div>
            
            <div className="space-y-4">
              {faq.map((item, i) => (
                <div key={i} className="border-b border-gray-100 group">
                  <button 
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex justify-between items-center w-full text-left py-8 focus:outline-none"
                  >
                    <span className="font-sans text-lg text-reviva-dark group-hover:text-reviva-gold transition-colors duration-300">{item.question}</span>
                    <ChevronDown className={`text-gray-300 group-hover:text-reviva-gold transition-all duration-500 ${openFaq === i ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-500 pb-8 font-light leading-relaxed pr-8 pl-4 border-l-2 border-reviva-gold/20">{item.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- FOOTER COMPLETO --- */}
        <footer id="contato" className="bg-[#111] text-white/70 py-24 px-6 font-light text-sm relative overflow-hidden">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 relative z-10">
            {/* Coluna 1: Marca */}
            <div className="col-span-1 md:col-span-1 space-y-8">
              <span className="text-3xl font-serif font-bold text-white tracking-widest block">REVIVA</span>
              <p className="text-white/60 italic leading-relaxed">
                "Transformamos sua autoestima com técnicas modernas e naturais."
              </p>
              <div className="flex gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-xs uppercase tracking-widest">Aberto agora</span>
              </div>
            </div>
            
            {/* Coluna 2: Endereço */}
            <div className="col-span-1 space-y-6">
              <h4 className="text-white font-bold tracking-[0.2em] uppercase text-xs">Endereço</h4>
              <p className="leading-relaxed">
                Rua 5, Ch. 116, Lt 1e<br/>
                4° andar, sala 412<br/>
                Edifício Vogue<br/>
                Vicente Pires, Brasília/DF<br/>
                CEP: 72006-180
              </p>
              <a href="https://maps.google.com" target="_blank" className="inline-flex items-center gap-2 text-reviva-gold hover:text-white transition-colors text-xs uppercase tracking-widest">
                 <MapPin size={14} /> Ver no Mapa
              </a>
            </div>

            {/* Coluna 3: Horários */}
            <div className="col-span-1 space-y-6">
              <h4 className="text-white font-bold tracking-[0.2em] uppercase text-xs">Horário</h4>
              <ul className="space-y-3">
                 {hours.map((h, i) => (
                     <li key={i} className="flex justify-between border-b border-white/5 pb-2">
                        <span>{h.day}</span>
                        <span className="text-white">{h.time}</span>
                     </li>
                 ))}
              </ul>
            </div>

            {/* Coluna 4: Contato */}
            <div className="col-span-1 space-y-6">
              <h4 className="text-white font-bold tracking-[0.2em] uppercase text-xs">Contato</h4>
              <p className="text-2xl text-white font-serif hover:text-reviva-gold transition-colors cursor-pointer block">
                (61) 3242-5394
              </p>
              <div className="flex flex-col gap-2 pt-4">
                <a href="https://instagram.com/reviva.bsb" target="_blank" className="hover:text-reviva-gold transition-colors flex items-center gap-2 group">
                  <Instagram size={16} /> Instagram
                </a>
                <a href={whatsappLink} target="_blank" className="hover:text-reviva-gold transition-colors flex items-center gap-2 group">
                  <Phone size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-widest opacity-40 uppercase">
             <p>© {new Date().getFullYear()} REVIVA SAÚDE E BELEZA. TODOS OS DIREITOS RESERVADOS.</p>
             <p>DESIGNED FOR EXCELLENCE.</p>
          </div>
        </footer>
      </main>
      
      {/* Botão Flutuante Mobile */}
      <motion.a 
        href={whatsappLink}
        target="_blank"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        className="md:hidden fixed bottom-6 right-6 z-40 w-14 h-14 bg-reviva-dark text-white rounded-full flex items-center justify-center shadow-2xl shadow-black/30"
      >
         <Phone size={24} />
      </motion.a>
    </div>
  );
}