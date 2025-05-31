export default function Sobre() {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Sobre o Projeto</h2>
      <p className="mb-2">
        Este portfólio foi desenvolvido com as seguintes tecnologias e ferramentas:
      </p>
      <ul className="list-disc pl-6 space-y-1">
        <li><strong>Next.js (App Router)</strong> – Framework para React com rotas modernas</li>
        <li><strong>React</strong> – Biblioteca para construção de interfaces</li>
        <li><strong>TypeScript</strong> – Superset do JavaScript com tipagem estática</li>
        <li><strong>Tailwind CSS</strong> – Framework CSS utilitário para estilização rápida e responsiva</li>
        <li><strong>API do GitHub</strong> – Integração para exibir projetos públicos automaticamente</li>
        <li><strong>Jogo da Senha</strong> – Implementação personalizada com lógica em React</li>
      </ul>
    </section>
  );
}
