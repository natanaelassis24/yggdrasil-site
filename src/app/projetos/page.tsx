"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Projetos() {
  return (
    <main className="bg-[#0a0a0a] text-gray-200 min-h-screen py-24 px-8 md:px-20">
      {/* ========================= TÍTULO ========================= */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-[#bfa76f] drop-shadow-[0_0_15px_rgba(191,167,111,0.5)]">
          Projetos
        </h1>
        <p className="text-gray-400 mt-3 text-lg">
          Inovações que moldam o futuro — criadas pela Yggdrasil.
        </p>
      </motion.div>

      {/* ========================= LEASEWISE ========================= */}
      <section className="max-w-5xl mx-auto bg-zinc-900/40 rounded-2xl shadow-[0_0_30px_rgba(191,167,111,0.15)] border border-[#bfa76f]/20 p-8 md:p-12 backdrop-blur-sm">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-start gap-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Imagem do projeto */}
          <div className="flex-shrink-0">
            <Image
              src="/images/projetos/leasewise.png"
              alt="LeaseWise"
              width={400}
              height={300}
              className="rounded-xl border border-[#bfa76f]/30 shadow-[0_0_20px_rgba(191,167,111,0.3)]"
            />
          </div>

          {/* Texto sobre o projeto */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-[#e6cc8c] mb-4 drop-shadow-[0_0_10px_rgba(191,167,111,0.5)]">
              LeaseWise
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              O <span className="text-[#bfa76f] font-semibold">LeaseWise</span> é o primeiro projeto da Yggdrasil, 
              criado para transformar o modo como o setor de aluguel opera.  
              Nosso objetivo é simplificar, automatizar e modernizar o gerenciamento de locações — 
              desde imóveis até ativos corporativos — por meio de uma plataforma inteligente, 
              segura e eficiente.
            </p>
            <p className="text-gray-400 italic">
              Atualmente em fase final de desenvolvimento, o LeaseWise representa o primeiro passo 
              para a integração total entre tecnologia, gestão e praticidade.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ========================= MAIS PROJETOS (futuro) ========================= */}
      <motion.div
        className="text-center text-gray-500 mt-20 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Outros projetos estão em incubação nos laboratórios da Yggdrasil...
      </motion.div>
    </main>
  );
}
