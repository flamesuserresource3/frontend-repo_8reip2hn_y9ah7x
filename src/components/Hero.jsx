import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      {/* subtle gradient overlay to enhance readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl">
          Decentralized Petitions, Powered by CAMP
        </h1>
        <p className="mt-4 text-base sm:text-lg text-white/80">
          Launch and sign petitions on-chain with gasless transactions. Mint your soulbound membership, earn CAMP, and make your voice count.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <button className="relative overflow-hidden group rounded-full px-5 py-2.5 text-sm sm:text-base text-white font-medium border border-emerald-400/30 bg-emerald-500/20 hover:bg-emerald-500/30 transition">
            <span className="relative z-10">Create Petition</span>
            <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition" />
          </button>
          <button className="rounded-full px-5 py-2.5 text-sm sm:text-base text-white/90 font-medium border border-white/10 bg-white/10 hover:bg-white/15 transition">Browse Petitions</button>
        </div>
      </div>
    </section>
  );
}
