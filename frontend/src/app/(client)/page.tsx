import Link from 'next/link';

export const metadata = {
  title: 'BR Touch | Inovação em Autoatendimento',
  description: 'Soluções de hardware premium para autoatendimento: impressoras, monitores e totens de alta precisão.',
};

export default function ClientHomePage() {
  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen">
      {/* ===== NAVBAR ===== */}
      <nav className="fixed top-0 w-full z-50 bg-white/85 backdrop-blur-xl shadow-sm">
        <div className="flex justify-between items-center px-8 py-4 max-w-full mx-auto">
          <div className="flex items-center gap-8">
            <div className="w-12 h-12 rounded-full bg-[#006a67] flex items-center justify-center">
              <span className="text-white font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>B</span>
            </div>
            <div className="hidden md:flex gap-6">
              <Link className="font-bold text-sm uppercase tracking-tight text-[#006a67] border-b-2 border-[#7cd8d4] pb-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }} href="/produtos">Impressoras</Link>
              <Link className="font-bold text-sm uppercase tracking-tight text-zinc-600 hover:text-zinc-900 transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }} href="/produtos">Monitores</Link>
              <Link className="font-bold text-sm uppercase tracking-tight text-zinc-600 hover:text-zinc-900 transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }} href="/produtos">Totens</Link>
              <Link className="font-bold text-sm uppercase tracking-tight text-zinc-600 hover:text-zinc-900 transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }} href="/produtos">Suporte</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/carrinho" className="text-zinc-600 hover:text-zinc-900 transition-colors">
              <span className="material-symbols-outlined">shopping_cart</span>
            </Link>
            <Link href="/admin/login" className="text-zinc-600 hover:text-zinc-900 transition-colors">
              <span className="material-symbols-outlined">person</span>
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* ===== HERO ===== */}
        <section className="relative bg-[#f9f9f9] py-20 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <span className="text-sm uppercase tracking-widest text-[#006a67] font-bold mb-4 block">
                Precisão &amp; Eficiência
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tighter text-[#1a1c1c] mb-8"
                  style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                Inovação em <br />
                <span className="text-[#7cd8d4]">Autoatendimento</span>
              </h1>
              <p className="text-[#3e4948] text-lg max-w-lg mb-10 leading-relaxed">
                Projetamos tecnologia de ponta para otimizar a experiência do usuário. Soluções robustas de hardware com design minimalista para o setor B2B.
              </p>
              <div className="flex gap-4">
                <Link 
                  href="/produtos"
                  className="bg-[#006a67] text-white px-8 py-4 font-bold text-sm uppercase tracking-widest rounded-lg hover:brightness-95 transition-all flex items-center justify-center"
                >
                  Ver Catálogo
                </Link>
                <button className="border border-[#bdc9c7] text-[#1a1c1c] px-8 py-4 font-bold text-sm uppercase tracking-widest rounded-lg hover:bg-[#f3f3f3] transition-all">
                  Falar com Consultor
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="absolute inset-0 bg-[#7cd8d4]/10 -rotate-3 rounded-xl" />
              <div className="relative z-10 w-full h-80 bg-[#eeeeee] rounded-xl shadow-2xl flex items-center justify-center">
                <div className="text-center text-[#3e4948]">
                  <span className="material-symbols-outlined text-6xl text-[#7cd8d4]">computer</span>
                  <p className="mt-2 font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Totem BR Touch</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== MÉTRICAS ===== */}
        <section className="bg-[#f3f3f3] py-12 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '150+', label: 'Cidades Atendidas' },
              { value: '99.9%', label: 'Uptime de Hardware' },
              { value: '24/7', label: 'Suporte Técnico' },
              { value: '10k+', label: 'Terminais Ativos' },
            ].map((m) => (
              <div key={m.label} className="flex flex-col">
                <span className="text-4xl font-bold text-[#1a1c1c]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.value}</span>
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#3e4948] mt-1">{m.label}</span>
                <div className="h-1 w-12 bg-[#7cd8d4] mt-2" />
              </div>
            ))}
          </div>
        </section>

        {/* ===== PROMOÇÕES BENTO GRID ===== */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-[#7cd8d4] p-12 flex flex-col justify-between min-h-[400px]">
              <div>
                <span className="text-sm font-bold uppercase tracking-tighter text-[#005e5c]">Oferta Limitada</span>
                <h2 className="text-4xl font-bold text-[#005e5c] mt-4 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Promoção da Semana
                </h2>
                <p className="text-[#005e5c]/80 text-lg max-w-md">
                  Upgrade de memória e SSD incluso em toda a linha de Totens Slim. Aproveite enquanto durar o estoque!
                </p>
              </div>
              <button className="bg-[#005e5c] text-white w-fit px-8 py-3 font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all">
                Aproveitar Agora
              </button>
            </div>
            <div className="bg-[#5f5e5e] p-12 flex flex-col justify-between">
              <div>
                <span className="text-sm font-bold uppercase tracking-tighter text-[#f3f3f3]">Destaque Mensal</span>
                <h2 className="text-4xl font-bold text-white mt-4 mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Promoção do Mês
                </h2>
                <p className="text-[#f3f3f3]/70 text-base">
                  Monitores Touch 24&quot; com 20% de desconto para compras em lote. Ideal para redes de varejo.
                </p>
              </div>
              <button className="border border-white text-white w-fit px-8 py-3 font-bold text-xs uppercase tracking-widest hover:bg-white hover:text-[#5f5e5e] transition-colors">
                Ver Detalhes
              </button>
            </div>
          </div>
        </section>

        {/* ===== PRODUTOS ===== */}
        <section className="bg-[#f3f3f3] py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#006a67] font-bold">Nossas Soluções</span>
                <h2 className="text-4xl font-bold mt-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                  Equipamentos de Alta Precisão
                </h2>
              </div>
              <Link className="text-[#006a67] font-bold text-sm uppercase border-b-2 border-[#7cd8d4] pb-1" href="/produtos">
                Ver Tudo
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  category: 'Display',
                  name: 'Monitor Touch Pro 27"',
                  desc: 'Painel IPS 4K com sensibilidade capacitiva de 10 pontos para uso intensivo.',
                  price: 'R$ 2.490',
                  icon: 'monitor',
                  href: '/produto/monitor-touch-pro-27',
                },
                {
                  category: 'Hardware',
                  name: 'Impressora Térmica XT',
                  desc: 'Velocidade de 300mm/s com guilhotina reforçada de tungstênio. Ideal para PDV.',
                  price: 'R$ 890',
                  icon: 'print',
                  href: '/produto/impressora-termica-xt',
                },
                {
                  category: 'Terminal',
                  name: 'Totem Classic v4',
                  desc: 'Estrutura em aço carbono com pintura eletrostática e LED frontal integrado.',
                  price: 'R$ 5.120',
                  icon: 'smart_display',
                  href: '/produto/totem-classic-v4',
                },
              ].map((p) => (
                <div key={p.name} className="group bg-white hover:bg-white transition-all p-4 shadow-sm hover:shadow-md">
                  <div className="aspect-square bg-[#e8e8e8] mb-6 flex items-center justify-center p-8 overflow-hidden">
                    <span className="material-symbols-outlined text-6xl text-[#006a67] group-hover:scale-110 transition-transform duration-500"
                          style={{ fontSize: '4rem' }}>
                      {p.icon}
                    </span>
                  </div>
                  <div className="px-4 pb-4">
                    <span className="text-[10px] uppercase font-bold text-zinc-400">{p.category}</span>
                    <h3 className="text-xl font-bold text-[#1a1c1c] mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                      {p.name}
                    </h3>
                    <p className="text-[#3e4948] text-sm mt-3 leading-relaxed">{p.desc}</p>
                    <div className="mt-6 flex justify-between items-center">
                      <span className="text-xl font-bold text-[#1a1c1c]">{p.price}</span>
                      <Link
                        href={p.href}
                        className="material-symbols-outlined bg-zinc-900 text-white p-2 rounded-full hover:bg-[#006a67] transition-colors"
                      >
                        add_shopping_cart
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== SEÇÃO TÉCNICA ===== */}
        <section className="py-24 px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="bg-[#e8e8e8] w-full h-80 rounded-xl flex items-center justify-center">
              <span className="material-symbols-outlined text-[#7cd8d4]" style={{ fontSize: '6rem' }}>
                precision_manufacturing
              </span>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Engenharia de <br />Fidelidade Extrema
            </h2>
            <div className="space-y-8">
              {[
                { icon: 'precision_manufacturing', title: 'Corte a Laser CNC', desc: 'Acabamento impecável em cada milímetro da estrutura metálica.' },
                { icon: 'verified_user', title: 'Certificação Industrial', desc: 'Componentes testados para operação contínua em ambientes hostis.' },
                { icon: 'bolt', title: 'Baixo Consumo', desc: 'Eletrônica otimizada para eficiência energética sustentável.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <span className="material-symbols-outlined text-[#7cd8d4] text-3xl" style={{ fontSize: '1.8rem' }}>
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{item.title}</h4>
                    <p className="text-[#3e4948]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="bg-zinc-100 border-t border-zinc-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-16 w-full max-w-7xl mx-auto">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-[#1a1c1c]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              BR TOUCH
            </h3>
            <p className="text-zinc-500 max-w-sm text-sm">
              Líder em soluções de hardware para autoatendimento e interatividade digital. Precision Engineered.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-xs tracking-widest uppercase font-bold text-zinc-900">Empresa</span>
              {['Sobre Nós', 'FAQ', 'Newsletter'].map(l => (
                <a key={l} className="text-xs tracking-widest uppercase text-zinc-500 hover:text-[#006a67] transition-colors" href="#">{l}</a>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-xs tracking-widest uppercase font-bold text-zinc-900">Legal</span>
              {['Privacidade', 'Termos de Uso'].map(l => (
                <a key={l} className="text-xs tracking-widest uppercase text-zinc-500 hover:text-[#006a67] transition-colors" href="#">{l}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="px-12 py-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-zinc-500">© 2024 BR Touch. Precision Engineered.</p>
          <Link href="/admin/login" className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors mt-4 md:mt-0">
            Acesso Gestão →
          </Link>
        </div>
      </footer>
    </div>
  );
}
