export const categories = [
  { id: 'facial', name: 'Facial', icon: '✨' },
  { id: 'corporal', name: 'Corporal & Capilar', icon: '🌿' },
  { id: 'beleza', name: 'Beleza & Cílios', icon: '💎' },
  { id: 'otomodelacao', name: 'Otomodelação', icon: '👂' },
];

export const services = [
  // --- ESTÉTICA FACIAL ---
  { category: 'facial', title: 'Toxina Botulínica Full Face + Nefertite', price: 'R$ 2.200,00', desc: 'Face completa e pescoço (Platisma).' },
  { category: 'facial', title: 'Toxina Botulínica Full Face', price: 'R$ 1.500,00', desc: 'Tratamento completo para rugas faciais.' },
  { category: 'facial', title: 'Toxina Botulínica Terço Superior', price: 'R$ 900,00', desc: 'Testa, glabela e olhos.' },
  { category: 'facial', title: 'Toxina Botulínica Terço Sup. + Nefertite', price: 'R$ 1.500,00', desc: 'Terço superior e pescoço.' },
  { category: 'facial', title: 'Mesotox', price: 'R$ 800,00', desc: 'Toxina botulínica para qualidade da pele.' },
  { category: 'facial', title: 'Preenchimento Ácido Hialurônico (1ml)', price: 'R$ 899,00', desc: 'Volume e contorno natural.' },
  { category: 'facial', title: 'Revitalização Facial AH (2ml)', price: 'R$ 200,00', desc: 'Hidratação profunda não reticulada.' },
  { category: 'facial', title: 'Emagrecimento Facial', price: 'R$ 600,00', desc: 'Redução de medidas na face.' },
  
  // Bioestimuladores
  { category: 'facial', title: 'Bioestimulador Sculptra (Galderma)', price: 'R$ 2.200,00', desc: 'Estímulo potente de colágeno.' },
  { category: 'facial', title: 'Bioestimulador Elleva (Rennova)', price: 'R$ 1.800,00', desc: 'Estimulador de colágeno 210 mg.' },
  { category: 'facial', title: 'Bioestimulador Diamond (Rennova)', price: 'R$ 1.800,00', desc: 'Hidroxiapatita de Cálcio.' },
  { category: 'facial', title: 'Bioestimulador Radiesse (Merz)', price: 'R$ 1.800,00', desc: 'Bioestimulador Premium 1,5 ml.' },
  { category: 'facial', title: 'Evo PDRN', price: 'R$ 1.200,00', desc: 'Regeneração celular avançada.' },
  
  // Fios
  { category: 'facial', title: 'Fios Filler 21G (4 unid)', price: 'R$ 1.400,00', desc: 'Preenchimento e sustentação.' },
  { category: 'facial', title: 'Fios Liso Agulhado 29G (10 unid)', price: 'R$ 1.200,00', desc: 'Estímulo de colágeno.' },
  { category: 'facial', title: 'Fios Espiculado 19G (unid)', price: 'R$ 320,00', desc: 'Tração e lifting.' },
  
  // Skinbooster & Limpeza
  { category: 'facial', title: 'Skinbooster Face', price: 'R$ 600,00', desc: 'Hidratação injetável profunda.' },
  { category: 'facial', title: 'Skinbooster 4 Regiões', price: 'R$ 1.200,00', desc: 'Combo completo (Face, Pescoço, Colo, Mãos).' },
  { category: 'facial', title: 'Limpeza de Pele Master', price: 'R$ 250,00', desc: 'Vapor de ozônio, ultrassom e fotomodulação.' },
  { category: 'facial', title: 'Limpeza de Pele com Vapor', price: 'R$ 180,00', desc: 'Limpeza profunda clássica.' },
  { category: 'facial', title: 'Peeling Ultrassônico', price: 'R$ 80,00', desc: 'Renovação celular suave.' },
  { category: 'facial', title: 'Microagulhamento', price: 'R$ 300,00', desc: 'Indução percutânea de colágeno.' },

  // --- CORPORAL & CAPILAR ---
  { category: 'corporal', title: 'Lipoquímica Enzimática (Sessão)', price: 'R$ 180,00', desc: 'Gordura localizada (Pacote 10x: R$ 1.200).' },
  { category: 'corporal', title: 'Hiperidrose', price: 'R$ 2.500,00', desc: 'Tratamento para suor excessivo (Axila/Mãos).' },
  { category: 'corporal', title: 'Ativador Metabólico', price: 'R$ 200,00', desc: 'Acelerador de metabolismo (30 min).' },
  { category: 'corporal', title: 'Intradermoterapia Capilar', price: 'R$ 220,00', desc: 'Aplicação direta de ativos no couro cabeludo.' },
  { category: 'corporal', title: 'Terapia Capilar (Sessão)', price: 'R$ 250,00', desc: 'Tratamento completo de 2h.' },
  { category: 'corporal', title: 'Camuflagem de Estrias', price: 'R$ 300,00', desc: 'Valor por área.' },
  { category: 'corporal', title: 'Dermopigmentação de Areola', price: 'R$ 900,00', desc: 'Reconstrução estética.' },

  // --- BELEZA & CÍLIOS ---
  { category: 'beleza', title: 'Design de Sobrancelhas', price: 'R$ 60,00', desc: 'Design personalizado.' },
  { category: 'beleza', title: 'Design com Henna / Tintura', price: 'R$ 70,00', desc: 'Realce e definição.' },
  { category: 'beleza', title: 'Micropigmentação Sobrancelhas', price: 'R$ 350,00', desc: 'Técnica fio a fio ou shadow.' },
  { category: 'beleza', title: 'Extensão de Cílios', price: 'R$ 250,00', desc: 'Volume e alongamento (Duração 3h).' },
  { category: 'beleza', title: 'Micropigmentação Labial', price: 'R$ 350,00', desc: 'Efeito batom ou revitalização natural.' },
  { category: 'beleza', title: 'SPA Labial', price: 'R$ 100,00', desc: 'Hidratação profunda e esfoliação.' },
  { category: 'beleza', title: 'Depilação Face Completa', price: 'R$ 20,00', desc: 'Remoção de pelos faciais.' },

  // --- OTOMODELAÇÃO ---
  { category: 'otomodelacao', title: 'Otomodelação Adulto', price: 'R$ 2.388,00', desc: 'Correção definitiva sem cortes. (12x R$ 199).' },
  { category: 'otomodelacao', title: 'Otomodelação Infantil', price: 'R$ 3.000,00', desc: 'Correção de orelhas (Little Ears).' },
];

export const faq = [
  { question: "Como agendar uma avaliação?", answer: "Você pode agendar diretamente pelo nosso WhatsApp clicando no botão 'Agendar' no topo do site. A avaliação estética tem o valor de R$ 100,00." },
  { question: "Quais as formas de pagamento?", answer: "Aceitamos cartões de crédito, débito e Pix. Parcelamos procedimentos maiores, como a Otomodelação, em até 12x." },
  { question: "Onde a clínica fica localizada?", answer: "Estamos no Edifício Vogue, em Vicente Pires - Brasília, com estacionamento fácil e acessibilidade." },
];

export const whatsappLink = "https://wa.me/556132425394?text=Ol%C3%A1%2C%20vi%20o%20site%20da%20Reviva%20e%20gostaria%20de%20agendar%20um%20hor%C3%A1rio!";