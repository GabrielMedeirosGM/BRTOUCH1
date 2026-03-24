'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminLoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-10">
            <div className="w-20 h-20 rounded-full bg-[#006a67] flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-3xl" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>B</span>
            </div>
          </div>

          {/* Card */}
          <div className="bg-white p-8 md:p-12 shadow-sm">
            <div className="mb-10 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-[#1a1c1c] mb-2"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Acesso ao Sistema
              </h1>
              <p className="text-[#3e4948] text-sm">Entre com suas credenciais para continuar.</p>
            </div>

            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.location.href = '/admin'; }}>
              {/* Email/CPF */}
              <div className="space-y-1.5">
                <label className="block text-[0.6875rem] font-bold uppercase tracking-widest text-[#3e4948] ml-1"
                       htmlFor="identity">
                  Email/CPF
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6e7978]">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-4 py-3 bg-[#e2e2e2] border-0 border-b-2 border-transparent focus:ring-0 focus:border-[#006a67] focus:outline-none transition-all text-sm rounded-sm"
                    id="identity"
                    name="identity"
                    placeholder="usuario@brtouch.com.br"
                    type="text"
                  />
                </div>
              </div>

              {/* Senha */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label className="block text-[0.6875rem] font-bold uppercase tracking-widest text-[#3e4948] ml-1"
                         htmlFor="password">
                    Senha
                  </label>
                  <a className="text-[0.6875rem] font-bold uppercase tracking-widest text-[#006a67] hover:text-[#005e5c] transition-colors"
                     href="#">
                    Esqueci minha senha
                  </a>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-[#6e7978]">
                    <span className="material-symbols-outlined">lock</span>
                  </div>
                  <input
                    className="block w-full pl-10 pr-10 py-3 bg-[#e2e2e2] border-0 border-b-2 border-transparent focus:ring-0 focus:border-[#006a67] focus:outline-none transition-all text-sm rounded-sm"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    type={showPassword ? 'text' : 'password'}
                  />
                  <button
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#6e7978] hover:text-[#3e4948]"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className="material-symbols-outlined">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Botão */}
              <div className="pt-4">
                <button
                  className="w-full bg-[#7cd8d4] text-[#005e5c] font-bold py-4 px-6 rounded-md hover:brightness-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                  type="submit"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Entrar e Continuar
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </form>

            {/* Separador */}
            <div className="mt-12 flex flex-col items-center gap-4">
              <div className="w-full flex items-center gap-4">
                <div className="flex-grow h-px bg-[#e8e8e8]" />
                <span className="text-[0.625rem] font-bold uppercase tracking-[0.2em] text-[#6e7978]">
                  Novo por aqui?
                </span>
                <div className="flex-grow h-px bg-[#e8e8e8]" />
              </div>
              <a className="text-sm font-bold text-[#5f5e5e] hover:text-[#1a1c1c] transition-colors flex items-center gap-2"
                 href="#">
                Criar Conta
                <span className="material-symbols-outlined text-sm">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Rodapé do card */}
          <div className="mt-8 text-center space-y-4">
            <div className="h-1 w-12 bg-[#7cd8d4] mx-auto" />
            <p className="text-[0.6875rem] font-medium uppercase tracking-widest text-[#6e7978]">
              Precision Engineered by BR Touch
            </p>
            <Link href="/" className="block text-xs text-[#6e7978] hover:text-[#006a67] transition-colors mt-2">
              ← Voltar ao site
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full mt-auto bg-zinc-100 border-t border-zinc-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-10 w-full">
          <div className="flex flex-col justify-center">
            <p className="text-xs tracking-widest uppercase text-zinc-500">
              © 2024 BR Touch. Precision Engineered.
            </p>
          </div>
          <div className="flex flex-wrap md:justify-end gap-6 items-center">
            {['Sobre Nós', 'Políticas de Privacidade', 'Termos de Uso', 'FAQ'].map(l => (
              <a key={l} className="text-xs tracking-widest uppercase text-zinc-500 hover:text-[#006a67] transition-colors opacity-80 hover:opacity-100" href="#">
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
