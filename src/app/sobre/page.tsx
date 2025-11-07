"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SobrePage() {
  return (
    <main className="bg-black text-gray-200 min-h-screen flex flex-col items-center pt-32 pb-24 px-6 md:px-20 space-y-16">
      
      {/* ===== LOGO PRINCIPAL NO TOPO ===== */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="flex flex-col items-center"
      >
        <Image
          src="/images/logos/yggdrasil.png"
          alt="Logo Yggdrasil"
          width={120}
          height={120}
          className="drop-shadow-[0_0_20px_rgba(191,167,111,0.8)]"
        />
        <h1 className="text-5xl font-extrabold text-[#bfa76f] mt-4 drop-shadow-[0_0_12px_rgba(191,167,111,0.6)]">
          Yggdrasil
        </h1>
        <p className="text-gray-400 text-lg mt-2 text-center">
          Inovação, Consciência e Tecnologia no mais alto nível.
        </p>
      </motion.div>

      {/* ===== BOX 1 - SOBRE A EMPRESA ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full bg-[#111]/70 border border-[#bfa76f]/40 rounded-2xl p-8 shadow-[0_0_25px_rgba(191,167,111,0.15)]"
      >
        <h2 className="text-3xl font-bold text-[#bfa76f] mb-4 text-center">
          Sobre a Empresa
        </h2>
        <p className="text-gray-300 leading-relaxed text-justify">
          A <span className="text-[#bfa76f] font-semibold">Yggdrasil</span> é uma corporação 
          dedicada à criação e desenvolvimento de tecnologias inovadoras que unem 
          ciência, arte e consciência. Fundada por{" "}
          <span className="text-[#bfa76f] font-semibold">Natanael A. de Assis</span>, a empresa nasceu 
          com o propósito de transformar o modo como a humanidade interage com o digital, 
          sempre de forma ética, criativa e sustentável.
        </p>
      </motion.section>

      {/* ===== BOX 2 - MISSÃO, VISÃO E VALORES ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full bg-[#111]/70 border border-[#bfa76f]/40 rounded-2xl p-8 shadow-[0_0_25px_rgba(191,167,111,0.15)]"
      >
        <h2 className="text-3xl font-bold text-[#bfa76f] mb-8 text-center">
          Missão, Visão e Valores
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-semibold text-[#e6cc8c] mb-2">Missão</h3>
            <p className="text-gray-300 text-justify">
              Criar tecnologias conscientes e transformadoras que unam inovação e responsabilidade, 
              elevando o potencial humano e promovendo o equilíbrio entre o progresso e a preservação do planeta.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#e6cc8c] mb-2">Visão</h3>
            <p className="text-gray-300 text-justify">
              Ser referência global em pesquisa e desenvolvimento tecnológico ético, 
              integrando ciência, natureza e inteligência artificial de forma harmônica.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-[#e6cc8c] mb-2">Valores</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2 text-justify">
              <li>Inovação com propósito</li>
              <li>Consciência e responsabilidade social</li>
              <li>Ética e integridade</li>
              <li>Excelência técnica e criativa</li>
              <li>Respeito à vida e ao conhecimento</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ===== BOX 3 - FUNDADOR ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full bg-[#111]/70 border border-[#bfa76f]/40 rounded-2xl p-8 shadow-[0_0_25px_rgba(191,167,111,0.15)]"
      >
        <h2 className="text-3xl font-bold text-[#bfa76f] mb-4 text-center">O Fundador</h2>
        <p className="text-gray-300 leading-relaxed text-justify">
          <span className="text-[#bfa76f] font-semibold">Natanael A. de Assis</span> é o idealizador 
          e fundador da Yggdrasil. Visionário e apaixonado por ciência e tecnologia, 
          acredita que o verdadeiro avanço ocorre quando o ser humano compreende o poder criativo 
          da mente e o coloca a serviço do bem coletivo. Seu trabalho busca integrar o conhecimento 
          ancestral à tecnologia moderna, criando um elo entre o natural e o digital.
        </p>
      </motion.section>

      {/* ===== BOX 4 - FAMÍLIA FUNDADORA ===== */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl w-full bg-[#111]/70 border border-[#bfa76f]/40 rounded-2xl p-8 shadow-[0_0_25px_rgba(191,167,111,0.15)] flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold text-[#bfa76f] mb-6 text-center">
          A Família Fundadora
        </h2>
        <div className="relative w-48 h-48 mb-6">
          <Image
            src="/images/logos/brazao.png"
            alt="Brasão da Família Assis"
            fill
            className="object-contain drop-shadow-[0_0_25px_rgba(191,167,111,0.7)]"
          />
        </div>
        <p className="text-gray-300 text-center leading-relaxed max-w-2xl">
          A <span className="text-[#bfa76f]">Família Assis</span> é a guardiã da tradição e da 
          filosofia que sustentam a Yggdrasil. Com base em valores de integridade, 
          disciplina e sabedoria, a família inspira a empresa a manter sua essência: 
          criar com propósito, servir com excelência e construir um legado que ultrapassa gerações.
        </p>
      </motion.section>

      {/* ===== LINHA FINAL ===== */}
      <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-[#bfa76f] to-transparent" />
    </main>
  );
}
