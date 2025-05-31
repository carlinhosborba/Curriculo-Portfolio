import Link from 'next/link';
import Image from 'next/image';
import './globals.css';

export const metadata = {
  title: 'Portfólio de Carlos Borba',
  description: 'Currículo e projetos desenvolvidos',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-gray-900 text-gray-100">
        <header className="bg-gray-800 text-white shadow p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/perfil.jpg" // Coloque a imagem em public/perfil.jpg
              alt="Foto de perfil"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h1 className="text-lg font-bold">Carlos Borba</h1>
          </div>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/sobre">Sobre</Link>
            <Link href="/academico">Acadêmico</Link>
            <Link href="/profissional">Profissional</Link>
            <Link href="/projetos">Projetos</Link>
            <Link href="/jogo">Jogo</Link>
          </nav>
        </header>
        <main className="max-w-4xl mx-auto p-6">{children}</main>
      </body>
    </html>
  );
}
