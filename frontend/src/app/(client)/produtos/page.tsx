import Link from 'next/link';

export const metadata = {
  title: 'BR Touch | Catálogo de Hardware B2B',
};

const CATEGORIES = [
  { name: 'Impressoras', count: 12 },
  { name: 'Monitores', count: 8 },
  { name: 'Totens', count: 15 },
  { name: 'CPUs Industriais', count: 6 },
  { name: 'Periféricos', count: 22 },
];

const PRODUCTS = [
  { id: 'totem-classic-v4', category: 'Totens', name: 'Totem Classic v4', price: 'R$ 5.120', icon: 'smart_display' },
  { id: 'monitor-touch-pro-27', category: 'Monitores', name: 'Monitor Touch Pro 27"', price: 'R$ 2.490', icon: 'monitor' },
  { id: 'impressora-termica-xt', category: 'Impressoras', name: 'Impressora Térmica XT', price: 'R$ 890', icon: 'print' },
  { id: 'cpu-industrial-x1', category: 'CPUs Industriais', name: 'CPU Industrial X1', price: 'R$ 3.200', icon: 'memory' },
  { id: 'monitor-touch-15', category: 'Monitores', name: 'Monitor Touch 15"', price: 'R$ 1.150', icon: 'desktop_windows' },
  { id: 'impressora-etik-2', category: 'Impressoras', name: 'Impressora de Etiquetas Étik 2', price: 'R$ 1.580', icon: 'label' },
];

export default function CatalogoPage() {
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
              <Link key={l} className="text-zinc-600 hover:text-zinc-900 transition-colors" href="/produtos">{l}</Link>
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

      <main className="pt-24 pb-20 px-8 max-w-7xl mx-auto w-full flex flex-col md:flex-row gap-12">
        {/* Sidebar de Filtros */}
        <aside className="w-full md:w-64 space-y-10">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#3e4948] mb-6">Categorias</h3>
            <ul className="space-y-4">
              {CATEGORIES.map(c => (
                <li key={c.name} className="flex justify-between items-center group cursor-pointer">
                  <span className="text-sm font-medium text-zinc-600 group-hover:text-[#006a67] transition-all">{c.name}</span>
                  <span className="text-[10px] font-bold text-zinc-400 bg-zinc-100 px-2 py-0.5 rounded-full">{c.count}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#3e4948] mb-6">Faixa de Preço</h3>
            <div className="space-y-4">
              <input type="range" className="w-full h-1 bg-[#eeeeee] accent-[#006a67] appearance-none cursor-pointer" />
              <div className="flex justify-between text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                <span>R$ 100</span>
                <span>R$ 10.000+</span>
              </div>
            </div>
          </div>

          <div className="bg-[#7cd8d4] p-6 rounded-lg text-[#005e5c]">
            <h4 className="font-bold text-lg mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Suporte Consultivo</h4>
            <p className="text-xs mb-4 opacity-80">Dúvidas sobre o hardware ideal para seu projeto?</p>
            <button className="w-full bg-[#005e5c] text-white py-2 text-[10px] font-bold uppercase tracking-widest hover:brightness-110 transition-all">Falar com Especialista</button>
          </div>
        </aside>

        {/* Grid de Produtos */}
        <div className="flex-1 space-y-12">
          {/* Top Bar Catalogo */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Catálogo Técnico</h1>
              <p className="text-xs uppercase tracking-widest text-zinc-400 mt-1">Exibindo {PRODUCTS.length} resultados</p>
            </div>
            <div className="flex gap-4">
              <select className="bg-white border-0 border-b-2 border-[#eeeeee] text-[10px] font-bold uppercase tracking-widest py-2 focus:ring-0 focus:border-[#006a67] cursor-pointer">
                <option>Mais Populares</option>
                <option>Preço (Menor-Maior)</option>
                <option>Preço (Maior-Menor)</option>
              </select>
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map(p => (
              <Link key={p.id} href={`/produto/${p.id}`} className="group bg-white p-4 shadow-sm hover:shadow-md transition-all">
                <div className="aspect-square bg-[#e8e8e8] mb-6 flex items-center justify-center p-8 overflow-hidden">
                  <span className="material-symbols-outlined text-5xl text-[#006a67] group-hover:scale-110 transition-transform duration-500">
                    {p.icon}
                  </span>
                </div>
                <div className="px-2 pb-2">
                  <span className="text-[10px] uppercase font-bold text-zinc-400">{p.category}</span>
                  <h3 className="text-lg font-bold text-[#1a1c1c] mt-1 group-hover:text-[#006a67] transition-colors" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                    {p.name}
                  </h3>
                  <div className="mt-6 flex justify-between items-center">
                    <span className="font-bold text-zinc-900" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{p.price}</span>
                    <span className="material-symbols-outlined text-zinc-400 group-hover:text-[#006a67] transition-colors">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Paginação */}
          <div className="pt-12 flex justify-center border-t border-[#eeeeee]">
            <div className="flex gap-2">
              <button className="w-10 h-10 flex items-center justify-center bg-[#006a67] text-white font-bold rounded-lg shadow-sm">1</button>
              <button className="w-10 h-10 flex items-center justify-center bg-white border border-[#eeeeee] hover:bg-zinc-100 transition-colors font-bold rounded-lg">2</button>
              <button className="w-10 h-10 flex items-center justify-center bg-white border border-[#eeeeee] hover:bg-zinc-100 transition-colors font-bold rounded-lg">3</button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-zinc-100 border-t border-zinc-200 mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12 py-10 max-w-7xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-zinc-500">© 2024 BR Touch. Precision Engineered.</p>
        </div>
      </footer>
    </div>
  );
}
