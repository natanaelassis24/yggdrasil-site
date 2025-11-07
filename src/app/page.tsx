"use client";

import { motion } from "framer-motion";
import { Carousel } from "@/components/Carousel";

export default function Home() {
  const images = [
    "/images/empresa/sede1.jpg",
    "/images/empresa/sede2.jpg",
    "/images/empresa/sede3.jpg",
    "/images/empresa/sede4.jpg",
  ];

  return (
    <main className="bg-black text-gray-200">
      {/* ========================= HERO ========================= */}
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900/30 to-black pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-[#bfa76f] via-yellow-500 to-[#bfa76f] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(191,167,111,0.4)]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          YGGDRASIL 
        </motion.h1>
        <motion.p
          className="max-w-2xl text-lg text-gray-400"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Uma entidade tecnológica em constante evolução.  
          Onde a inovação se entrelaça com a consciência e o futuro se torna presente.
        </motion.p>
      </section>

      {/* ========================= SOBRE A EMPRESA ========================= */}
      <section className="relative py-24 px-8 md:px-20 bg-gradient-to-b from-black to-zinc-950">
        <motion.h2
          className="text-4xl font-bold text-[#bfa76f] mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Sobre a Yggdrasil
        </motion.h2>
        <motion.p
          className="max-w-4xl mx-auto text-gray-400 text-center leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          A Yggdrasil é uma Big Tech que transcende o conceito tradicional de empresa.  
          Somos um núcleo de integração total entre tecnologia, design e inteligência.  
          Nossa essência é conectar sistemas, pessoas e ideias para criar um ecossistema  
          onde o progresso é orgânico e contínuo — como as raízes da própria Yggdrasil,  
          a árvore que sustenta os mundos.
        </motion.p>
      </section>

      {/* ========================= SEDE DA EMPRESA ========================= */}
      <section className="relative py-24 px-8 md:px-20 bg-gradient-to-b from-zinc-950 to-black">
        <motion.h2
          className="text-4xl font-bold text-[#bfa76f] mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          A Sede da Yggdrasil
        </motion.h2>

        <motion.div
          className="max-w-5xl mx-auto text-gray-400 text-center leading-relaxed mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          O edifício Yggdrasil é um monumento à fusão entre arquitetura e tecnologia.  
          Projetado para respirar, adaptar-se e evoluir — cada andar é um ambiente inteligente  
          capaz de reagir ao clima, à presença humana e às necessidades operacionais.  
          É mais que um espaço físico: é o coração pulsante da nossa rede neural corporativa.
        </motion.div>

        {/* Carrossel de imagens da sede */}
        <Carousel images={images} />
      </section>

      {/* ========================= VISÃO DE FUTURO ========================= */}
      <section className="relative py-24 px-8 md:px-20 bg-gradient-to-b from-black to-zinc-950">
        <motion.h2
          className="text-4xl font-bold text-[#bfa76f] mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Visão de Futuro
        </motion.h2>
        <motion.p
          className="max-w-4xl mx-auto text-gray-400 text-center leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          O futuro é uma extensão natural da consciência coletiva.  
          A Yggdrasil busca moldar esse futuro através de sistemas que aprendem,  
          adaptam-se e evoluem com o mundo — não acima dele.  
          Nossa visão é simples e poderosa: uma tecnologia que coexistisse  
          com a vida em harmonia, expandindo os limites da criação.
        </motion.p>

        <motion.div
          className="w-24 h-[2px] mx-auto mt-10 bg-gradient-to-r from-transparent via-[#bfa76f] to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 1 }}
        />
      </section>
    </main>
  );
}
