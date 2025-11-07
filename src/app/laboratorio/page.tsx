"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Laboratorio() {
  const pesquisas = [
    {
      slug: "neural-link",
      titulo: "Integração Neural com Sistemas de IA",
      descricao:
        "Exploramos novas formas de comunicação entre redes neurais artificiais e sinais biológicos humanos, buscando criar uma ponte segura e ética entre mente e máquina.",
      imagem: "/images/lab/neural-link.jpg",
      status: "Em andamento",
    },
    {
      slug: "energy-core",
      titulo: "Energia Adaptativa Auto-Regenerativa",
      descricao:
        "Pesquisamos fontes de energia baseadas em algoritmos auto-regenerativos e materiais inteligentes, com foco em eficiência e sustentabilidade ambiental.",
      imagem: "/images/lab/energy-core.jpg",
      status: "Fase experimental",
    },
    {
      slug: "vr-lab",
      titulo: "Ambientes Virtuais Imersivos de Simulação",
      descricao:
        "Desenvolvimento de ambientes simulados com interação realista entre IA e humanos, aplicáveis em educação, engenharia e psicologia cognitiva.",
      imagem: "/images/lab/vr-lab.jpg",
      status: "Publicação recente",
    },
  ];

  return (
    <main className="bg-[#0a0a0a] text-gray-200 min-h-screen py-24 px-8 md:px-20">
      {/* ========================= CABEÇALHO ========================= */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl font-extrabold text-[#bfa76f] drop-shadow-[0_0_15px_rgba(191,167,111,0.5)]">
          Laboratório
        </h1>
        <p className="text-gray-400 mt-3 text-lg max-w-3xl mx-auto">
          Onde ideias se tornam descobertas.  
          O laboratório da Yggdrasil é o núcleo de pesquisa e desenvolvimento de tecnologias emergentes, 
          experimentos e publicações científicas da corporação.
        </p>
      </motion.div>

      {/* ========================= PESQUISAS ========================= */}
      <section className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {pesquisas.map((item, index) => (
          <Link
            key={index}
            href={`/laboratorio/${item.slug}`}
            className="no-underline"
          >
            <motion.div
              className="bg-zinc-900/50 rounded-2xl border border-[#bfa76f]/20 shadow-[0_0_30px_rgba(191,167,111,0.1)] overflow-hidden hover:shadow-[0_0_40px_rgba(191,167,111,0.25)] transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <Image
                src={item.imagem}
                alt={item.titulo}
                width={500}
                height={300}
                className="w-full h-56 object-cover border-b border-[#bfa76f]/20 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-6 no-underline">
                <h2 className="text-2xl font-semibold text-[#e6cc8c] mb-3 group-hover:text-[#fff3c6] transition-colors">
                  {item.titulo}
                </h2>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {item.descricao}
                </p>
                <span className="text-[#bfa76f] text-sm font-medium">
                  {item.status}
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </section>

      {/* ========================= RODAPÉ / CHAMADA ========================= */}
      <motion.div
        className="text-center text-gray-500 mt-20 italic"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 1 }}
      >
        Novas publicações e experimentos são adicionados regularmente pelos
        pesquisadores da Yggdrasil.
      </motion.div>
    </main>
  );
}
