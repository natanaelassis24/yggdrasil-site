"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { pesquisas } from "../data";

export default function LaboratorioPost() {
  const params = useParams();
  const slug = params?.slug as string;
  const post = pesquisas.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="bg-[#0a0a0a] text-gray-200 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#bfa76f] mb-4">404</h1>
          <p className="text-gray-400 mb-6">
            Publicação não encontrada ou ainda em revisão.
          </p>
          <Link href="/laboratorio" className="text-[#bfa76f] underline">
            Voltar ao Laboratório
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-[#0a0a0a] text-gray-200 min-h-screen py-20 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">
        <Link href="/laboratorio" className="text-sm text-gray-400 hover:text-[#bfa76f]">
          ← Voltar ao Laboratório
        </Link>

        <header className="mt-6 mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#bfa76f]">
            {post.titulo}
          </h1>
          <p className="text-gray-400 mt-3">{post.status}</p>
        </header>

        {post.imagem && (
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden mb-8">
            <Image
              src={post.imagem}
              alt={post.titulo}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <article className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
          <div style={{ whiteSpace: "pre-line" }}>{post.conteudo}</div>
        </article>
      </div>
    </main>
  );
}
