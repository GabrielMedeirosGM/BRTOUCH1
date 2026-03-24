'use client';

import { useState } from 'react';
import Link from 'next/link';

const INITIAL_CART = [
  { id: 1, name: 'Monitor Industrial Touch 21"', ref: 'BRT-210-MK4', qty: 1, unitPrice: 2450.0 },
  { id: 2, name: 'Impressora Térmica PRO-80', ref: 'BRT-P80-T', qty: 2, unitPrice: 590.0 },
];

export default function CarrinhoPage() {
  const [cart, setCart] = useState(INITIAL_CART);

  const updateQty = (id: number, delta: number) => {
    setCart(cart.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i));
  };

  const removeItem = (id: number) => setCart(cart.filter(i => i.id !== id));

  const subtotal = cart.reduce((acc, i) => acc + i.qty * i.unitPrice, 0);
  const frete = 45;
  const desconto = cart.reduce((acc, i) => acc + i.qty, 0) >= 3 ? 120 : 0;
  const total = subtotal + frete - desconto;

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-xl shadow-sm flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="w-10 h-10 rounded-full bg-[#006a67] flex items-center justify-center">
            <span className="text-white font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>B</span>
          </Link>
          <div className="hidden md:flex gap-6 text-sm uppercase font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {['Impressoras', 'Monitores', 'Totens', 'Suporte'].map(l => (
              <a key={l} className="text-zinc-600 hover:text-zinc-900 transition-colors" href="#">{l}</a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/carrinho" className="relative text-[#006a67] border-b-2 border-[#7cd8d4] pb-1">
            <span className="material-symbols-outlined">shopping_cart</span>
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#006a67] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>
          <Link href="/admin/login" className="text-zinc-600 hover:text-zinc-900 transition-colors">
            <span className="material-symbols-outlined">person</span>
          </Link>
        </div>
      </nav>

      {/* Conteúdo */}
      <main className="flex-grow pt-32 pb-20 px-4 md:px-12 max-w-7xl mx-auto w-full">
        <header className="mb-12">
          <h1 className="text-5xl font-bold tracking-tight text-[#1a1c1c]"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Carrinho
          </h1>
          <p className="text-xs uppercase tracking-widest text-[#6e7978] mt-2">
            Revisão de Pedido &amp; Checkout Seguro
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Itens */}
          <div className="lg:col-span-8 space-y-8">
            {cart.length === 0 && (
              <div className="text-center py-20 text-[#6e7978]">
                <span className="material-symbols-outlined text-6xl">shopping_cart</span>
                <p className="mt-4 font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Carrinho vazio</p>
                <Link href="/" className="text-[#006a67] text-sm mt-2 block hover:underline">← Voltar para a loja</Link>
              </div>
            )}
            {cart.map(item => (
              <div key={item.id} className="flex flex-col md:flex-row gap-6 p-6 bg-[#f3f3f3] hover:bg-white transition-colors">
                <div className="w-full md:w-32 h-32 bg-[#e2e2e2] flex items-center justify-center overflow-hidden rounded">
                  <span className="material-symbols-outlined text-4xl text-[#006a67]">
                    {item.name.toLowerCase().includes('monitor') ? 'monitor' : 'print'}
                  </span>
                </div>
                <div className="flex-grow flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.name}</h3>
                      <p className="text-sm text-[#6e7978] font-medium mt-1">Ref: {item.ref}</p>
                    </div>
                    <button
                      className="text-[#6e7978] hover:text-[#ba1a1a] transition-colors"
                      onClick={() => removeItem(item.id)}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex items-center bg-[#e8e8e8] rounded-sm">
                      <button className="p-2 hover:bg-[#e2e2e2] transition-colors flex items-center" onClick={() => updateQty(item.id, -1)}>
                        <span className="material-symbols-outlined text-sm">remove</span>
                      </button>
                      <span className="px-4 font-bold text-sm">{String(item.qty).padStart(2, '0')}</span>
                      <button className="p-2 hover:bg-[#e2e2e2] transition-colors flex items-center" onClick={() => updateQty(item.id, 1)}>
                        <span className="material-symbols-outlined text-sm">add</span>
                      </button>
                    </div>
                    <p className="font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      R$ {(item.qty * item.unitPrice).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <div className="pt-8">
              <Link href="/" className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#006a67] hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Voltar para Loja
              </Link>
            </div>
          </div>

          {/* Resumo */}
          <div className="lg:col-span-4">
            <div className="bg-white p-8 space-y-6 shadow-sm">
              <h2 className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Resumo</h2>
              <div className="space-y-4 pt-4 border-t border-[#e8e8e8]">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6e7978]">Subtotal</span>
                  <span className="font-medium">R$ {subtotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6e7978]">Frete</span>
                  <span className="font-medium">R$ {frete.toFixed(2)}</span>
                </div>
                {desconto > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6e7978]">Desconto por Lote</span>
                    <span className="text-[#006a67] font-bold">- R$ {desconto.toFixed(2)}</span>
                  </div>
                )}
              </div>
              <div className="pt-6 border-t-4 border-[#7cd8d4]">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg uppercase tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Total</span>
                  <span className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    R$ {total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </span>
                </div>
                <p className="text-[10px] text-[#6e7978] mt-1 uppercase">Parcelamento disponível em até 12x</p>
              </div>
              <div className="space-y-3 pt-4">
                <Link 
                  href="/checkout"
                  className="w-full bg-[#006a67] text-white py-4 font-bold uppercase tracking-widest text-sm hover:brightness-95 active:scale-[0.98] transition-all flex items-center justify-center"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}
                >
                  Ir para Checkout Seguro
                </Link>
                <div className="flex items-center justify-center gap-2 p-3 bg-[#f3f3f3]">
                  <span className="material-symbols-outlined text-[#006a67] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>verified_user</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#3e4948]">Ambiente Seguro &amp; Criptografado</span>
                </div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-[#7cd8d4]/10 border-l-4 border-[#7cd8d4]">
              <p className="text-3xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>24h</p>
              <p className="text-[10px] font-bold uppercase tracking-tighter text-[#005e5c]">Processamento Prioritário</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-zinc-100 border-t border-zinc-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-10 max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-zinc-500">© 2024 BR Touch. Precision Engineered.</p>
          <div className="flex flex-wrap md:justify-end gap-6">
            {['Sobre Nós', 'FAQ', 'Privacidade', 'Termos de Uso'].map(l => (
              <a key={l} className="text-xs tracking-widest uppercase text-zinc-500 hover:text-[#006a67] transition-colors" href="#">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
