import Link from 'next/link';

export const metadata = {
  title: 'BR Touch | Gerenciamento de Pedidos',
};

const PEDIDOS = [
  { id: '#8923', client: 'Lojas Americanas S.A.', date: '20/03/2026', items: 12, status: 'Processando', total: 'R$ 12.400' },
  { id: '#8922', client: 'Hospital Santa Maria', date: '19/03/2026', items: 3, status: 'Enviado', total: 'R$ 5.900' },
  { id: '#8921', client: 'Prefeitura de Curitiba', date: '19/03/2026', items: 45, status: 'Aguardando', total: 'R$ 28.120' },
  { id: '#8920', client: 'Aeroporto Internacional', date: '18/03/2026', items: 8, status: 'Concluído', total: 'R$ 8.450' },
  { id: '#8919', client: 'Supermercado Condor', date: '18/03/2026', items: 15, status: 'Cancelado', total: 'R$ 7.200' },
  { id: '#8918', client: 'Banco Itaú Unibanco', date: '17/03/2026', items: 4, status: 'Concluído', total: 'R$ 22.100' },
];

const statusStyles: Record<string, string> = {
  'Processando': 'bg-[#e2e2e2] text-[#3e4948]',
  'Enviado': 'bg-[#006a67] text-white',
  'Aguardando': 'bg-[#ffdad6] text-[#93000a]',
  'Concluído': 'bg-[#7cd8d4] text-[#005e5c]',
  'Cancelado': 'bg-[#5f5e5e] text-white',
};

export default function AdminPedidosPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Gerenciar Pedidos
          </h1>
          <p className="text-[#3e4948]">Controle total sobre vendas e logística de hardware.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar pedido ou cliente..."
              className="bg-white border border-[#bdc9c7]/30 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:ring-2 focus:ring-[#7cd8d4] focus:outline-none w-64"
            />
            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[#3e4948]">search</span>
          </div>
          <button className="bg-[#5f5e5e] text-white px-6 py-2.5 rounded-lg font-medium text-sm flex items-center gap-2">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </div>

      {/* Tabela de Pedidos Full Width */}
      <section className="bg-white rounded-xl shadow-sm border border-[#eeeeee] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#f3f3f3]/50">
                {['ID Pedido', 'Cliente', 'Data', 'Itens', 'Status', 'Total', 'Ações'].map(h => (
                  <th key={h} className="px-8 py-5 text-[10px] uppercase tracking-widest text-[#3e4948] font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#eeeeee]">
              {PEDIDOS.map(p => (
                <tr key={p.id} className="hover:bg-[#f3f3f3]/30 transition-colors">
                  <td className="px-8 py-5 text-sm font-bold text-[#3e4948]">{p.id}</td>
                  <td className="px-8 py-5">
                    <p className="text-sm font-medium text-[#1a1c1c]">{p.client}</p>
                    <p className="text-[10px] text-[#6e7978] uppercase mt-0.5">B2B Prime</p>
                  </td>
                  <td className="px-8 py-5 text-sm text-[#3e4948]">{p.date}</td>
                  <td className="px-8 py-5 text-sm font-medium">{p.items} un.</td>
                  <td className="px-8 py-5">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tight ${statusStyles[p.status]}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-8 py-5 text-sm font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{p.total}</td>
                  <td className="px-8 py-5">
                    <div className="flex gap-2">
                      <button className="p-2 text-[#3e4948] hover:bg-[#f3f3f3] rounded-lg transition-all" title="Ver Detalhes">
                        <span className="material-symbols-outlined text-lg">visibility</span>
                      </button>
                      <button className="p-2 text-[#3e4948] hover:bg-[#f3f3f3] rounded-lg transition-all" title="Gerar Nota Fiscal">
                        <span className="material-symbols-outlined text-lg">receipt_long</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-8 py-6 bg-[#f3f3f3]/20 border-t border-[#eeeeee] flex justify-between items-center">
          <span className="text-xs text-[#6e7978] font-medium tracking-tight">Mostrando 6 de 142 pedidos registrados</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-[#bdc9c7]/30 rounded-lg opacity-40" disabled>Anterior</button>
            <button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest border border-[#bdc9c7]/30 rounded-lg hover:bg-white transition-all shadow-sm">Próximo</button>
          </div>
        </div>
      </section>

      {/* Footer Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
        <div className="bg-[#7cd8d4] p-8 rounded-xl flex items-center justify-between shadow-sm">
          <div>
            <h3 className="text-[#005e5c] text-sm font-bold uppercase tracking-widest mb-1">Total Aguardando</h3>
            <p className="text-4xl font-bold text-[#005e5c]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>R$ 42.150</p>
          </div>
          <span className="material-symbols-outlined text-6xl opacity-30 text-[#005e5c]">hourglass_empty</span>
        </div>
        <div className="bg-[#006a67] p-8 rounded-xl flex items-center justify-between shadow-lg">
          <div>
            <h3 className="text-white text-sm font-bold uppercase tracking-widest mb-1">Média Mensal / Pedido</h3>
            <p className="text-4xl font-bold text-white" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>R$ 4.890</p>
          </div>
          <span className="material-symbols-outlined text-6xl opacity-30 text-white">data_thresholding</span>
        </div>
      </div>
    </div>
  );
}
