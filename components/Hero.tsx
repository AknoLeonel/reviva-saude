"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden bg-[url('/bg-texture.png')] bg-cover">
      {/* Overlay suave */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0"></div>

      <div className="z-10 flex flex-col items-center max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image 
            src="/logo-reviva.jpg" // Coloque a imagem que você mandou na pasta public
            alt="Reviva Saúde e Beleza Logo" 
            width={180} 
            height={180} 
            className="mb-4 drop-shadow-md"
          />
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-playfair font-bold text-primary"
        >
          Reviva sua beleza. <br/> Redescubra sua essência.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl font-light"
        >
          Transformamos sua autoestima com técnicas modernas e naturais em um ambiente acolhedor e exclusivo em Vicente Pires.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 mt-8"
        >
          <a 
            href="#servicos" 
            className="px-8 py-3 rounded-full border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            Conhecer Procedimentos
          </a>
          <a 
            href="https://wa.me/556132425394"
            className="px-8 py-3 rounded-full bg-primary text-white font-semibold shadow-lg hover:shadow-xl hover:bg-[#b08d4b] transition-all"
          >
            Agendar Avaliação
          </a>
        </motion.div>
      </div>
    </section>
  );
}