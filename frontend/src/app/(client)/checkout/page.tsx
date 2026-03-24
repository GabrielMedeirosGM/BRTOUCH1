'use client';

import Link from 'next/link';

export default function CheckoutPage() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen flex flex-col pb-20">
      {/* Header Minimalista */}
      <header className="px-8 md:px-20 py-8 flex justify-between items-center border-b border-[#eeeeee] bg-white">
        <Link href="/" className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#006a67] flex items-center justify-center">
            <span className="text-white font-bold">B</span>
          </div>
          <span className="text-xl font-bold tracking-tighter" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            BR TOUCH <span className="text-[#6e7978] font-normal font-sans ml-2">CHECKOUT</span>
          </span>
        </Link>
        <div className="flex items-center gap-2 text-[#6e7978]">
          <span className="material-symbols-outlined text-sm">lock</span>
          <span className="text-[10px] font-bold uppercase tracking-widest">Ambiente 100% Seguro</span>
        </div>
      </header>

      <main className="max-w-6xl mx-auto w-full px-6 pt-16 flex flex-col lg:row gap-16 lg:flex-row">
        {/* Formulários */}
        <div className="flex-1 space-y-12">
          {/* Sessão: Identificação */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-8 rounded-full bg-[#006a67] text-white flex items-center justify-center font-bold text-xs ring-4 ring-[#7cd8d4]/30">1</span>
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Identificação B2B</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-[10px] uppercase font-bold text-[#3e4948] tracking-widest">Razão Social</label>
                <input className="w-full bg-white border border-[#bdc9c7]/30 p-3 text-sm focus:ring-1 focus:ring-[#006a67] transition-all outline-none" placeholder="Nome da Empresa LTDA" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-[#3e4948] tracking-widest">CNPJ</label>
                <input className="w-full bg-white border border-[#bdc9c7]/30 p-3 text-sm outline-none" placeholder="00.000.000/0001-00" />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-[#3e4948] tracking-widest">E-mail Corporativo</label>
                <input className="w-full bg-white border border-[#bdc9c7]/30 p-3 text-sm outline-none" placeholder="compras@empresa.com.br" />
              </div>
            </div>
          </section>

          {/* Sessão: Entrega */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-8 rounded-full bg-[#006a67] text-white flex items-center justify-center font-bold text-xs ring-4 ring-[#7cd8d4]/30">2</span>
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Local de Instalação</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              <div className="md:col-span-4 space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-[#3e4948] tracking-widest">CEP</label>
                <input className="w-full bg-white border border-[#bdc9c7]/30 p-3 text-sm outline-none" placeholder="00000-000" />
              </div>
              <div className="md:col-span-8 space-y-1.5">
                <label className="text-[10px] uppercase font-bold text-[#3e4948] tracking-widest">Endereço</label>
                <input className="w-full bg-white border border-[#bdc9c7]/30 p-3 text-sm outline-none" placeholder="Av. das Industrias, 1000" />
              </div>
              <div className="md:col-span-12 p-6 bg-[#f3f3f3] border-l-4 border-[#7cd8d4]">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm font-bold text-[#005e5c]">Transportadora Especializada (Hardware)</p>
                    <p className="text-xs text-[#6e7978]">Entrega técnica com montagem inclusa</p>
                  </div>
                  <span className="font-bold">R$ 45,00</span>
                </div>
              </div>
            </div>
          </section>

          {/* Sessão: Pagamento */}
          <section>
            <div className="flex items-center gap-4 mb-8">
              <span className="w-8 h-8 rounded-full bg-[#006a67] text-white flex items-center justify-center font-bold text-xs ring-4 ring-[#7cd8d4]/30">3</span>
              <h2 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Forma de Pagamento</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: 'Boleto Faturado (28 ddl)', icon: 'description' },
                { label: 'Cartão BNDES', icon: 'credit_card' },
                { label: 'PIX (5% off)', icon: 'account_balance' },
              ].map((m, i) => (
                <div key={m.label} className={`p-6 border flex flex-col items-center gap-4 cursor-pointer transition-all ${i === 0 ? 'border-[#006a67] bg-[#7cd8d4]/5 ring-1 ring-[#006a67]' : 'border-[#bdc9c7]/30 bg-white hover:border-[#7cd8d4]'}`}>
                  <span className="material-symbols-outlined text-[#006a67] text-3xl">{m.icon}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-center">{m.label}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Resumo do Pedido Side */}
        <aside className="w-full lg:w-[400px]">
          <div className="sticky top-24 bg-white p-10 shadow-sm border border-[#eeeeee] space-y-8">
            <h3 className="text-xl font-bold border-b border-[#eeeeee] pb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Seu Pedido</h3>
            <div className="space-y-6">
              {[
                { name: 'Totem Classic v4', detail: 'Sinalização Digital', qty: 1, price: 'R$ 5.120' },
                { name: 'Impressora XT', detail: 'Térmica 80mm', qty: 2, price: 'R$ 1.780' },
              ].map(i => (
                <div key={i.name} className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-bold">{i.name}</p>
                    <p className="text-[10px] text-zinc-400 font-bold uppercase">{i.qty} un • {i.detail}</p>
                  </div>
                  <span className="text-sm font-medium">{i.price}</span>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-8 border-t border-[#eeeeee]">
              <div className="flex justify-between text-xs text-[#6e7978] font-bold uppercase tracking-widest">
                <span>Subtotal</span>
                <span>R$ 6.900,00</span>
              </div>
              <div className="flex justify-between text-xs text-[#6e7978] font-bold uppercase tracking-widest">
                <span>Frete Técnico</span>
                <span>R$ 45,00</span>
              </div>
              <div className="flex justify-between pt-6 border-t-4 border-[#7cd8d4]">
                <span className="text-lg font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>TOTAL</span>
                <span className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>R$ 6.945,00</span>
              </div>
            </div>

            <button className="w-full bg-[#006a67] text-white py-5 font-bold uppercase tracking-[0.2em] text-xs hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-[#006a67]/20">
              Confirmar e Pagar
            </button>

            <div className="flex items-center justify-center gap-3 pt-4">
              <span className="material-symbols-outlined text-[#7cd8d4] text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>gpp_good</span>
              <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest leading-none">Compra Protegida BR Touch</p>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}
