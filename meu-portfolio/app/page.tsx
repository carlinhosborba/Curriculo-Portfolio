'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-3xl font-semibold mb-4">Bem-vindo ao meu portfólio!</h2>
      <p className="text-lg">
        Aqui você encontrará minha trajetória profissional, acadêmica, meus projetos e um pequeno jogo que desenvolvi.
      </p>
    </motion.section>
  );
}
