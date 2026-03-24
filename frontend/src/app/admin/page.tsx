import Link from 'next/link';

export const metadata = {
  title: 'BR Touch | Dashboard Administrativo',
};

export default function AdminDashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-bold tracking-tight mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            Painel Geral
          </h1>
          <p className="text-[#3e4948]">Visão consolidada da operação e performance da BR Touch.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-white px-4 py-2 border border-[#bdc9c7]/30 rounded-lg flex items-center gap-3">
            <span className="material-symbols-outlined text-[#006a67]">calendar_today</span>
            <span className="text-sm font-bold text-[#1a1c1c]">Março, 2026</span>
          </div>
        </div>
      </div>

      {/* Métricas Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: 'Receita Mensal', value: 'R$ 145.200', trend: '+12%', icon: 'payments', color: 'border-[#7cd8d4]' },
          { label: 'Pedidos Pendentes', value: '28', trend: '5 urgentes', icon: 'pending_actions', color: 'border-[#006a67]' },
          { label: 'Taxa de Conversão', value: '3.4%', trend: '+0.8%', icon: 'trending_up', color: 'border-[#85531d]' },
          { label: 'NPS Cliente', value: '92', trend: 'Líder Setor', icon: 'sentiment_very_satisfied', color: 'border-[#5f5e5e]' },
        ].map((m) => (
          <div key={m.label} className={`bg-white p-6 rounded-xl shadow-sm border-l-4 ${m.color}`}>
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-[#3e4948]">{m.icon}</span>
              <span className="text-[10px] font-bold text-[#006a67] bg-[#7cd8d4]/10 px-2 py-0.5 rounded-full">{m.trend}</span>
            </div>
            <p className="text-[10px] uppercase tracking-widest text-[#3e4948] mb-1">{m.label}</p>
            <h3 className="text-2xl font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{m.value}</h3>
          </div>
        ))}
      </div>

      {/* Bento Grid: Pedidos e Alertas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Pedidos Recentes */}
        <section className="lg:col-span-8 bg-white p-8 rounded-xl shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-xl font-bold flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="w-1.5 h-6 bg-[#7cd8d4] inline-block" />
              Últimos Pedidos
            </h2>
            <Link href="/admin/pedidos" className="text-xs font-bold text-[#006a67] uppercase tracking-widest border-b border-[#7cd8d4] pb-0.5">
              Ver Todos
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#eeeeee]">
                  {['ID', 'Cliente', 'Status', 'Valor'].map(h => (
                    <th key={h} className="pb-4 text-[10px] uppercase tracking-widest text-[#3e4948] font-bold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#eeeeee]">
                {[
                  { id: '#8923', client: 'Lojas Americanas S.A.', status: 'Processando', value: 'R$ 12.400' },
                  { id: '#8922', client: 'Hospital Santa Maria', status: 'Enviado', value: 'R$ 5.900' },
                  { id: '#8921', client: 'Prefeitura de Curitiba', status: 'Aguardando', value: 'R$ 28.120' },
                  { id: '#8920', client: 'Aeroporto Internacional', status: 'Concluído', value: 'R$ 8.450' },
                ].map(p => (
                  <tr key={p.id} className="hover:bg-[#f3f3f3]/30 transition-colors">
                    <td className="py-4 text-xs font-bold text-[#3e4948]">{p.id}</td>
                    <td className="py-4 text-sm font-medium">{p.client}</td>
                    <td className="py-4 text-[10px] font-bold uppercase tracking-tight">
                      <span className={`px-2 py-0.5 rounded-full ${
                        p.status === 'Concluído' ? 'bg-[#7cd8d4]/20 text-[#005e5c]' : 'bg-[#e2dfde] text-[#636262]'
                      }`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm font-bold" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>{p.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Alertas de Estoque Baixo */}
        <section className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-xl text-[#3e4948] shadow-sm border border-[#eeeeee]">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              <span className="material-symbols-outlined text-[#ba1a1a]">notification_important</span>
              Itens com baixo estoque
            </h2>
            <div className="space-y-4">
              {[
                { name: 'Impressora XT', qty: '02 un.', color: 'bg-[#ffdad6] text-[#93000a]' },
                { name: 'Monitor LED 15', qty: '05 un.', color: 'bg-[#ffecb3] text-[#85531d]' },
                { name: 'Totem Slim HD', qty: '01 un.', color: 'bg-[#ffdad6] text-[#93000a]' },
              ].map(item => (
                <div key={item.name} className="flex justify-between items-center bg-[#f9f9f9] p-4 rounded-lg border border-[#eeeeee]">
                  <span className="text-sm font-medium text-[#1a1c1c]">{item.name}</span>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${item.color}`}>{item.qty}</span>
                </div>
              ))}
            </div>
            <Link href="/admin/estoque" className="block mt-8 text-center bg-[#006a67] text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all shadow-md">
              Repor Agora
            </Link>
          </div>

          <div className="bg-[#7cd8d4] p-8 rounded-xl text-[#005e5c] shadow-sm">
            <h2 className="text-xl font-bold mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>Suporte Técnico</h2>
            <p className="text-xs mb-6 opacity-80 uppercase tracking-widest font-bold">5 casos em aberto</p>
            <button className="w-full bg-[#005e5c] text-white py-3 rounded-lg font-bold text-xs uppercase tracking-widest hover:brightness-110 transition-all">
              Ver Tickets
            </button>
          </div>
        </section>
      </div>

      {/* Gráfico Placeholder */}
      <section className="bg-white p-8 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-xl font-bold flex items-center gap-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            <span className="w-1.5 h-6 bg-[#006a67] inline-block" />
            Performance de Vendas (7 dias)
          </h2>
          <div className="flex gap-2">
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#6e7978]">
              <span className="w-2 h-2 rounded-full bg-[#7cd8d4]" /> Totens
            </span>
            <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-[#6e7978]">
              <span className="w-2 h-2 rounded-full bg-[#006a67]" /> Monitores
            </span>
          </div>
        </div>
        <div className="h-64 flex items-end gap-2 md:gap-4 overflow-hidden pt-4">
          {[40, 60, 45, 90, 65, 80, 50, 70, 85, 45, 60, 75, 55, 65].map((h, i) => (
            <div key={i} className="flex-grow flex flex-col items-center gap-2 group">
              <div
                className={`w-full max-w-[40px] rounded-t-sm transition-all duration-500 ${i % 2 === 0 ? 'bg-[#7cd8d4]' : 'bg-[#006a67] opacity-80'}`}
                style={{ height: `${h}%` }}
              >
                <div className="opacity-0 group-hover:opacity-100 absolute -top-8 bg-zinc-900 text-white text-[10px] p-1 rounded transition-opacity pointer-events-none">
                  R$ {h * 100}
                </div>
              </div>
              <span className="text-[10px] font-bold text-[#6e7978]">{i + 1}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
