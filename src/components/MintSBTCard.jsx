import React from 'react';
import { BadgeCheck } from 'lucide-react';

export default function MintSBTCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
      <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="absolute -left-10 -bottom-10 h-36 w-36 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative z-10 flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl bg-emerald-500/20 border border-emerald-400/30 grid place-items-center">
          <BadgeCheck className="h-6 w-6 text-emerald-300" />
        </div>
        <div className="flex-1">
          <h3 className="text-white font-semibold text-lg">Mint Soulbound Membership</h3>
          <p className="text-white/70 text-sm mt-1">Prove membership to create and sign petitions. Minting is gasless and grants you 1 CAMP token.</p>
          <div className="mt-4 flex gap-3">
            <button className="rounded-lg px-4 py-2 text-sm text-white font-medium border border-emerald-400/30 bg-emerald-500/20 hover:bg-emerald-500/30 transition">Mint SBT</button>
            <button className="rounded-lg px-4 py-2 text-sm text-white/90 font-medium border border-white/10 bg-white/10 hover:bg-white/15 transition">Learn more</button>
          </div>
        </div>
      </div>
    </div>
  );
}
