'use client';

import { useState, useEffect } from 'react';

type Tentativa = {
  tentativa: string;
  resultado: string;
};

function gerarSenha() {
  let numeros = new Set<number>();
  while (numeros.size < 4) {
    numeros.add(Math.floor(Math.random() * 10));
  }
  return Array.from(numeros).join('');
}

export default function Jogo() {
  const [senha, setSenha] = useState('');
  const [input, setInput] = useState('');
  const [tentativas, setTentativas] = useState<Tentativa[]>([]);
  const [finalizado, setFinalizado] = useState(false);

  useEffect(() => {
    setSenha(gerarSenha());
  }, []);

  const verificar = () => {
    if (input.length !== 4) return alert('Digite 4 dígitos diferentes');
    if (tentativas.length >= 10 || finalizado) return;

    let bulls = 0, cows = 0;
    for (let i = 0; i < 4; i++) {
      if (input[i] === senha[i]) bulls++;
      else if (senha.includes(input[i])) cows++;
    }

    const nova = { tentativa: input, resultado: `${bulls}B ${cows}C` };
    const novas = [nova, ...tentativas];
    setTentativas(novas);
    setInput('');

    if (bulls === 4 || novas.length >= 10) {
      setFinalizado(true);
    }
  };

  const novoJogo = () => {
    setSenha(gerarSenha());
    setTentativas([]);
    setInput('');
    setFinalizado(false);
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-4">Jogo da Senha (Bulls and Cows)</h2>
      <div className="space-y-2 mb-4">
        <input
          type="text"
          maxLength={4}
          value={input}
          onChange={e => setInput(e.target.value.replace(/\D/g, ''))}
          className="border p-2 rounded w-32 text-center"
          disabled={finalizado}
        />
        <button
          onClick={verificar}
          className="bg-emerald-500 hover:bg-emerald-600"
          disabled={finalizado}
        >
          Verificar
        </button>
        <button
          onClick={() => alert(`Senha secreta: ${senha}`)}
          className="bg-emerald-500 hover:bg-emerald-600"
        >
          Mostrar Senha
        </button>
      </div>

      <ul className="space-y-2">
        {tentativas.map((t, i) => (
          <li key={i} className="bg-white p-2 rounded shadow flex justify-between">
            <span>{t.tentativa}</span>
            <span>{t.resultado}</span>
          </li>
        ))}
      </ul>

      {finalizado && (
        <div className="mt-4">
          <p className="font-semibold text-red-600">
            {tentativas[0]?.resultado.startsWith('4B') ? 'Parabéns! Você acertou a senha!' : 'Fim de jogo! Número máximo de tentativas.'}
          </p>
          <button
            onClick={novoJogo}
            className="bg-emerald-500 hover:bg-emerald-600"
          >
            Novo Jogo
          </button>
        </div>
      )}
    </section>
  );
}
