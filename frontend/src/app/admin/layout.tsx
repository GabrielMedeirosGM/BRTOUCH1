'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

const navItems = [
  { href: '/admin', icon: 'dashboard', label: 'Dashboard' },
  { href: '/admin/estoque', icon: 'inventory_2', label: 'Estoque' },
  { href: '/admin/relatorios', icon: 'analytics', label: 'Relatórios' },
  { href: '/admin/pedidos', icon: 'local_shipping', label: 'Pedidos' },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-[#f9f9f9] text-[#1a1c1c]">
      {/* ===== SIDEBAR ===== */}
      <aside className="w-64 fixed left-0 h-full bg-[#f9f9f9] border-r border-[#bdc9c7]/30 flex flex-col p-6 hidden md:flex z-40">
        {/* Logo */}
        <Link href="/" className="mb-10 px-2 flex items-center gap-3 hover:opacity-80 transition-opacity">
          <img src="/logo.png" alt="BR Touch Logo" className="w-10 h-10 rounded-full shadow-md object-cover" />
          <span className="font-bold text-xl tracking-tight text-[#1a1c1c]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>BR Touch</span>
        </Link>

        <nav className="flex-1 space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-[#7cd8d4] text-[#005e5c] font-bold shadow-sm'
                    : 'text-[#5f5e5e] hover:bg-[#f3f3f3]'
                }`}
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
                >
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Status */}
        <div className="mt-auto pt-8 border-t border-[#bdc9c7]/30">
          <div className="bg-[#f3f3f3] p-4 rounded-lg mb-4">
            <p className="text-[10px] uppercase tracking-widest text-[#3e4948] mb-1">Status do Sistema</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#006a67] animate-pulse" />
              <span className="text-xs font-medium">Sincronizado</span>
            </div>
          </div>
          <Link
            href="/"
            className="text-sm text-[#5f5e5e] hover:text-[#1a1c1c] transition-colors block text-center"
          >
            ← Voltar ao Site
          </Link>
        </div>
      </aside>

      {/* ===== HEADER TOP ===== */}
      <div className="flex-1 md:ml-64 flex flex-col">
        <header className="fixed top-0 right-0 left-0 md:left-64 z-30 bg-white/85 backdrop-blur-xl shadow-sm px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <div className="font-bold text-lg" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              Gestão
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-[#3e4948] hover:bg-[#f3f3f3] rounded-lg transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <Link href="/admin/login" className="p-2 text-[#3e4948] hover:bg-[#f3f3f3] rounded-lg transition-all">
              <span className="material-symbols-outlined">person</span>
            </Link>
          </div>
        </header>

        {/* ===== CONTENT ===== */}
        <main className="flex-1 overflow-auto pt-20 p-8 bg-[#f9f9f9]">
          {children}
        </main>
      </div>
    </div>
  );
}
