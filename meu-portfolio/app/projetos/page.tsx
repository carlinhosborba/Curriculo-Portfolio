'use client';

import { useEffect, useState } from 'react';

type Repo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
};

export default function Projetos() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch('https://api.github.com/users/carlinhosborba/repos')
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6">Projetos no GitHub</h2>
      <ul className="space-y-4">
        {repos.map(repo => (
          <li key={repo.id} className="border p-4 rounded-lg shadow bg-white">
            <a href={repo.html_url} target="_blank" className="text-xl font-semibold text-blue-600 hover:underline">
              {repo.name}
            </a>
            <p className="text-gray-700">{repo.description || 'Sem descrição.'}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
