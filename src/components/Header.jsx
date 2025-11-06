import React from 'react';
import { Rocket, ShieldCheck } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur-xl bg-black/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 border border-white/10 grid place-items-center">
            <Rocket className="h-5 w-5 text-emerald-300" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">CAMP Petitions</p>
            <p className="text-xs text-white/60">Decentralized, gasless signatures</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2 rounded-full px-3 py-1.5 border border-white/10 bg-white/5 text-xs text-white/70">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
            <span>Lisk Sepolia</span>
          </div>
          {/* Simulated wallet connect button for UI only */}
          <button className="relative overflow-hidden group rounded-full px-4 py-2 text-sm text-white font-medium border border-white/10 bg-white/10 hover:bg-white/15 transition">
            <span className="relative z-10">Connect Wallet</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition" />
          </button>
        </div>
      </div>
    </header>
  );
}
