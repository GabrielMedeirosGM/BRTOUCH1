'use client';

import { useState } from 'react';

const INITIAL_ITEMS = [
  { id: 1, name: 'Impressora Térmica XT-400', category: 'Hardware / Impressoras', estado: 'Novo', preco: 'R$ 1.450,00', qty: 42 },
  { id: 2, name: 'Monitor Touch LED 15"', category: 'Display / Monitores', estado: 'Usado', preco: 'R$ 890,00', qty: 18 },
  { id: 3, name: 'Totem Slim Full HD', category: 'Autoatendimento / Totens', estado: 'Quebrado', preco: 'R$ 4.200,00', qty: 3 },
  { id: 4, name: 'Leitor de QR Code 2D', category: 'Scanners / Periféricos', estado: 'Novo', preco: 'R$ 320,00', qty: 114 },
  { id: 5, name: 'CPU Industrial Mini-ITX', category: 'Processamento / CPUs', estado: 'Novo', preco: 'R$ 2.100,00', qty: 27 },
];

interface StockItem {
  id: number;
  name: string;
  category: string;
  estado: string;
  preco: string;
  qty: number;
}

const estadoStyle: Record<string, string> = {
  Novo: 'bg-[#7cd8d4]/20 text-[#005e5c]',
  Usado: 'bg-[#e2dfde] text-[#636262]',
  Quebrado: 'bg-[#ffdad6] text-[#93000a]',
};

export default function AdminEstoquePage() {
  const [items, setItems] = useState<StockItem[]>(INITIAL_ITEMS);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [form, setForm] = useState({ name: '', category: 'Impressoras', estado: 'Novo', precoCompra: '', precoVenda: '', qty: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name) return;
    const newItem: StockItem = {
      id: Date.now(),
      name: form.name,
      category: `Hardware / ${form.category}`,
      estado: form.estado,
      preco: `R$ ${parseFloat(form.precoVenda || '0').toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`,
      qty: parseInt(form.qty || '0'),
    };
    setItems([newItem, ...items]);
    setForm({ name: '', category: 'Impressoras', estado: 'Novo', precoCompra: '', precoVenda: '', qty: '' });
    setIsSidebarOpen(false);
  };

  const totalItens = items.reduce((acc, i) => acc + i.qty, 0);

  return (
    <div className="max-w-full mx-auto space-y-8 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 px-4">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Gestão de Estoque
          </h1>
          <p className="text-[#3e4948]">Visualize e gerencie o inventário técnico da BR Touch.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-[#5f5e5e] text-white px-6 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2 hover:opacity-95 transition-all">
            <span className="material-symbols-outlined text-sm">file_download</span>
            Exportar CSV
          </button>
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`px-4 py-2.5 rounded-lg font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-all border ${
              isSidebarOpen ? 'bg-[#7cd8d4] text-[#005e5c] border-[#7cd8d4]' : 'text-[#006a67] border-[#7cd8d4]/30 hover:bg-[#7cd8d4]/10'
            }`}
          >
            <span className="material-symbols-outlined text-sm">{isSidebarOpen ? 'close' : 'add'}</span>
            {isSidebarOpen ? 'Fechar' : 'Adicionar'}
          </button>
        </div>
      </div>

      <div className="flex gap-6 px-4 pb-10 items-start overflow-hidden">
        {/* LADO ESQUERDO: KPIs e Tabela */}
        <div className="flex-1 space-y-6 min-w-0 transition-all duration-500">
          {/* KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#7cd8d4] shadow-sm">
              <p className="text-[10px] uppercase tracking-widest text-[#3e4948] mb-2">Total em Estoque</p>
              <h3 className="text-3xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {totalItens.toLocaleString('pt-BR')} <span className="text-xs font-normal text-[#3e4948]">itens</span>
              </h3>
            </div>
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#006a67] shadow-sm">
              <p className="text-[10px] uppercase tracking-widest text-[#3e4948] mb-2">Valor de Mercado</p>
              <h3 className="text-3xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>R$ 142.080</h3>
            </div>
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#5f5e5e] shadow-sm">
              <p className="text-[10px] uppercase tracking-widest text-[#3e4948] mb-2">Itens para Reparo</p>
              <h3 className="text-3xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                {items.filter(i => i.estado === 'Quebrado').reduce((a: number, i: StockItem) => a + i.qty, 0)}{' '}
                <span className="text-xs font-normal text-[#3e4948]">unid.</span>
              </h3>
            </div>
          </div>

          {/* Tabela */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-[#eeeeee]">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#f3f3f3]/50">
                    {['Produto', 'Estado', 'Preço Venda', 'Qtd.', 'Ações'].map(h => (
                      <th key={h} className="px-6 py-4 text-[10px] uppercase tracking-wider text-[#3e4948] font-bold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#eeeeee]">
                  {items.map((item: StockItem) => (
                    <tr key={item.id} className="hover:bg-[#f3f3f3]/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-medium text-sm text-[#1a1c1c]">{item.name}</span>
                          <span className="text-[10px] text-[#3e4948] uppercase">{item.category}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${estadoStyle[item.estado] ?? ''}`}>
                          {item.estado}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {item.preco}
                      </td>
                      <td className="px-6 py-4 text-sm" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                        {item.qty}
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-[#3e4948] hover:text-[#006a67] transition-colors">
                          <span className="material-symbols-outlined text-lg">edit</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 bg-[#f3f3f3]/30 flex items-center justify-between border-t border-[#eeeeee]">
              <span className="text-xs text-[#3e4948]">Exibindo {items.length} de {items.length} itens</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-xs border border-[#bdc9c7]/30 rounded-sm opacity-30 cursor-default" disabled>Anterior</button>
                <button className="px-3 py-1 text-xs border border-[#bdc9c7]/30 rounded-sm hover:bg-[#eeeeee] transition-colors">Próximo</button>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Form de Cadastro (Inline) */}
        <aside 
          className={`transition-all duration-500 ease-in-out bg-white rounded-2xl shadow-sm border border-[#eeeeee] overflow-hidden sticky top-4 ${
            isSidebarOpen ? 'w-full lg:w-[450px] opacity-100' : 'w-0 opacity-0 pointer-events-none'
          }`}
        >
          <div className="w-[450px] h-full flex flex-col">
            <div className="p-8 border-b border-[#eeeeee] flex justify-between items-center bg-[#fcfcfc]">
              <h2 className="text-2xl font-bold flex items-center gap-3" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
                <span className="w-1.5 h-6 bg-[#7cd8d4] inline-block" />
                Novo Produto
              </h2>
            </div>

            <form className="p-8 space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#3e4948] mb-1.5 font-bold">Nome do Equipamento</label>
                  <input
                    className="w-full bg-[#f3f3f3] border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#7cd8d4] focus:outline-none transition-all"
                    placeholder="Ex: Monitor Touch 21.5"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#3e4948] mb-1.5 font-bold">Categoria</label>
                  <select
                    className="w-full bg-[#f3f3f3] border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#7cd8d4] focus:outline-none appearance-none"
                    value={form.category}
                    onChange={e => setForm({ ...form, category: e.target.value })}
                  >
                    {['Impressoras', 'Monitores', 'Totens', 'Periféricos', 'CPUs'].map(c => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="block text-[10px] uppercase tracking-wider text-[#3e4948] font-bold">Estado do Hardware</label>
                  <div className="grid grid-cols-3 gap-3">
                    {['Novo', 'Usado', 'Quebrado'].map(e => (
                      <button
                        key={e}
                        type="button"
                        onClick={() => setForm({ ...form, estado: e })}
                        className={`py-2 text-[10px] font-bold uppercase rounded-xl transition-all border ${
                          form.estado === e ? 'bg-[#7cd8d4]/20 border-[#7cd8d4] text-[#005e5c]' : 'bg-white border-[#eeeeee] text-[#3e4948]'
                        }`}
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {([['precoCompra', 'Custo (R$)'], ['precoVenda', 'Venda (R$)']] as [string, string][]).map(([field, label]) => (
                    <div key={field}>
                      <label className="block text-[10px] uppercase tracking-wider text-[#3e4948] mb-1.5 font-bold">{label}</label>
                      <input
                        className="w-full bg-[#f3f3f3] border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#7cd8d4] focus:outline-none placeholder:text-zinc-400"
                        type="number"
                        step="0.01"
                        placeholder="0,00"
                        value={(form as Record<string, string>)[field]}
                        onChange={e => setForm({ ...form, [field]: e.target.value })}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-wider text-[#3e4948] mb-1.5 font-bold">Quantidade Inicial</label>
                  <input
                    className="w-full bg-[#f3f3f3] border-none rounded-xl px-4 py-3.5 text-sm focus:ring-2 focus:ring-[#7cd8d4] focus:outline-none placeholder:text-zinc-400"
                    type="number"
                    placeholder="0"
                    value={form.qty}
                    onChange={e => setForm({ ...form, qty: e.target.value })}
                  />
                </div>
              </div>

              <div className="pt-6">
                <button
                  className="w-full bg-[#006a67] text-white py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:brightness-110 transition-all active:scale-95 shadow-xl shadow-[#006a67]/10"
                  type="submit"
                >
                  Salvar no Inventário
                </button>
              </div>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
}
