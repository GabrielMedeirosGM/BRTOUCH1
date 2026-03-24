import Link from 'next/link';

interface Props {
  params: Promise<{ id: string }>;
}

const PRODUCTS: Record<string, {
  category: string;
  name: string;
  ref: string;
  price: number;
  desc: string;
  icon: string;
  specs: Array<{ label: string; value: string }>;
}> = {
  'totem-classic-v4': {
    category: 'Terminal Autoatendimento',
    name: 'Totem Classic v4',
    ref: 'BRT-TCL-V4',
    price: 5120,
    desc: 'O Totem Classic v4 é a solução definitiva para ambientes de autoatendimento de alto tráfego. Estrutura em aço carbono com pintura eletrostática, LED frontal integrado e display capacitivo de alta responsividade. Certificado para operação 24/7 em ambientes externos e internos.',
    icon: 'smart_display',
    specs: [
      { label: 'Display', value: '21.5" Full HD IPS Touch' },
      { label: 'Processador', value: 'Intel Core i5 (10ª Geração)' },
      { label: 'Memória RAM', value: '8 GB DDR4' },
      { label: 'Armazenamento', value: 'SSD 256 GB NVMe' },
      { label: 'Sistema Operacional', value: 'Windows 10 IoT Enterprise' },
      { label: 'Conectividade', value: 'Wi-Fi 6, Ethernet Gigabit, USB-A x4' },
      { label: 'Certificação', value: 'IP54 – Proteção contra poeira e respingos' },
      { label: 'Garantia', value: '24 meses (peças e mão de obra)' },
    ],
  },
  'monitor-touch-pro-27': {
    category: 'Display Profissional',
    name: 'Monitor Touch Pro 27"',
    ref: 'BRT-MTP-27',
    price: 2490,
    desc: 'Painel IPS 4K com sensibilidade capacitiva de 10 pontos. Ideal para PDV, quiosques e estações de trabalho de alta demanda. Brilho de 350 nits com revestimento anti-reflexo.',
    icon: 'monitor',
    specs: [
      { label: 'Tamanho', value: '27 polegadas' },
      { label: 'Resolução', value: '3840 x 2160 (4K UHD)' },
      { label: 'Tecnologia', value: 'IPS Capacitivo 10 pontos' },
      { label: 'Taxa de Resposta', value: '4ms' },
      { label: 'Brilho', value: '350 nits' },
      { label: 'Entradas', value: 'HDMI 2.0, DisplayPort, USB-B' },
      { label: 'Garantia', value: '24 meses' },
    ],
  },
  'impressora-termica-xt': {
    category: 'Hardware / Impressoras',
    name: 'Impressora Térmica XT',
    ref: 'BRT-ITX-001',
    price: 890,
    desc: 'Velocidade de 300mm/s com guilhotina reforçada de tungstênio. Projetada para ambientes de alto volume em PDVs e totens de autoatendimento.',
    icon: 'print',
    specs: [
      { label: 'Velocidade', value: '300mm/s' },
      { label: 'Largura do Papel', value: '80mm' },
      { label: 'Resolução', value: '203 dpi' },
      { label: 'Guilhotina', value: 'Automática em Tungstênio' },
      { label: 'Interface', value: 'USB, Serial, Ethernet' },
      { label: 'Garantia', value: '12 meses' },
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(PRODUCTS).map((id) => ({
    id: id,
  }));
}

export default async function ProdutoPage({ params }: Props) {
  const { id } = await params;
  const product = PRODUCTS[id] ?? PRODUCTS['totem-classic-v4'];

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
          <Link href="/carrinho" className="text-zinc-600 hover:text-zinc-900 transition-colors">
            <span className="material-symbols-outlined">shopping_cart</span>
          </Link>
          <Link href="/admin/login" className="text-zinc-600 hover:text-zinc-900 transition-colors">
            <span className="material-symbols-outlined">person</span>
          </Link>
        </div>
      </nav>

      <main className="pt-24 pb-20 px-8 max-w-7xl mx-auto w-full">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#6e7978] mb-12">
          <Link href="/" className="hover:text-[#006a67] transition-colors">Home</Link>
          <span>/</span>
          <span className="text-[#1a1c1c]">{product.name}</span>
        </div>

        {/* Hero do Produto */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Imagem */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#7cd8d4]/5 -rotate-2 rounded-xl" />
            <div className="relative z-10 bg-[#eeeeee] rounded-xl aspect-square flex items-center justify-center shadow-xl">
              <span className="material-symbols-outlined text-[#006a67]" style={{ fontSize: '8rem' }}>
                {product.icon}
              </span>
            </div>
            {/* Badge */}
            <div className="absolute top-6 left-6 z-20 bg-[#7cd8d4] text-[#005e5c] px-3 py-1 text-xs font-bold uppercase tracking-widest">
              Novo
            </div>
          </div>

          {/* Detalhes */}
          <div className="flex flex-col justify-center">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006a67] mb-3">{product.category}</span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              {product.name}
            </h1>
            <p className="text-[10px] text-[#6e7978] uppercase tracking-widest mb-6">Ref: {product.ref}</p>
            <p className="text-[#3e4948] leading-relaxed mb-8">{product.desc}</p>

            {/* Preço */}
            <div className="mb-8">
              <span className="text-4xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                R$ {product.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
              </span>
              <p className="text-xs text-[#6e7978] mt-1">ou 12x de R$ {(product.price / 12).toLocaleString('pt-BR', { minimumFractionDigits: 2 })} sem juros</p>
            </div>

            {/* Ações */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/carrinho"
                className="flex-1 bg-[#006a67] text-white py-4 font-bold text-sm uppercase tracking-widest text-center hover:brightness-95 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                <span className="material-symbols-outlined text-sm">add_shopping_cart</span>
                Adicionar ao Carrinho
              </Link>
              <button className="flex-1 border border-[#bdc9c7] text-[#1a1c1c] py-4 font-bold text-sm uppercase tracking-widest hover:bg-[#f3f3f3] transition-all">
                Falar com Consultor
              </button>
            </div>

            {/* Trust badges */}
            <div className="flex gap-6 mt-8 pt-8 border-t border-[#e8e8e8]">
              {[
                { icon: 'verified', text: 'Garantia 24 meses' },
                { icon: 'local_shipping', text: 'Entrega em 48h' },
                { icon: 'support_agent', text: 'Suporte 24/7' },
              ].map(b => (
                <div key={b.text} className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#7cd8d4]">{b.icon}</span>
                  <span className="text-xs text-[#3e4948] font-medium">{b.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Especificações Técnicas */}
        <section className="border-t border-[#e8e8e8] pt-16">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Especificações Técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specs.map((spec, i) => (
              <div key={spec.label} className={`flex justify-between items-center px-6 py-4 ${i % 2 === 0 ? 'bg-[#f3f3f3]' : 'bg-white'}`}>
                <span className="text-xs uppercase tracking-wider font-bold text-[#3e4948]">{spec.label}</span>
                <span className="text-sm text-[#1a1c1c] font-medium">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Produtos relacionados */}
        <section className="mt-24">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-1 h-8 bg-[#7cd8d4]" />
            <h2 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Você também pode gostar</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {Object.entries(PRODUCTS)
              .filter(([k]) => k !== id)
              .slice(0, 3)
              .map(([k, p]) => (
                <Link key={k} href={`/produto/${k}`} className="group bg-white p-6 hover:shadow-md transition-all">
                  <div className="aspect-square bg-[#e8e8e8] mb-4 flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#006a67] group-hover:scale-110 transition-transform duration-300" style={{ fontSize: '3rem' }}>
                      {p.icon}
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold text-zinc-400">{p.category}</span>
                  <h3 className="font-bold mt-1" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{p.name}</h3>
                  <p className="font-bold text-sm mt-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    R$ {p.price.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                </Link>
              ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-100 border-t border-zinc-200 mt-auto">
        <div className="px-12 py-10 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-zinc-500">© 2024 BR Touch. Precision Engineered.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            {['Sobre Nós', 'FAQ', 'Privacidade'].map(l => (
              <a key={l} className="text-xs tracking-widest uppercase text-zinc-500 hover:text-[#006a67] transition-colors" href="#">{l}</a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
