import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MintSBTCard from './components/MintSBTCard';
import PetitionList from './components/PetitionList';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <Hero />

      <main className="relative">
        {/* ambient glow accents */}
        <div className="pointer-events-none absolute inset-0 -z-[1]">
          <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute right-10 bottom-10 h-40 w-40 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <section className="max-w-6xl mx-auto px-6 -mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <MintSBTCard />
            </div>
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-lg font-semibold">Create a Petition</h3>
                <p className="text-white/70 text-sm mt-1">After minting your soulbound membership, you can publish petitions paid with CAMP or 0.002 ETH. All actions are gasless.</p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <input className="w-full md:flex-1 rounded-lg bg-black/40 border border-white/10 px-4 py-2.5 text-sm placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" placeholder="Petition title" />
                  <button className="rounded-lg px-4 py-2.5 text-sm text-white font-medium border border-emerald-400/30 bg-emerald-500/20 hover:bg-emerald-500/30 transition">Publish</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PetitionList />
      </main>

      <footer className="border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-white/60 flex items-center justify-between">
          <p>Built for Web3 civic engagement. Dark, glassy and fast.</p>
          <div className="flex gap-3">
            <span className="rounded-full px-3 py-1 border border-white/10 bg-white/5">Gasless</span>
            <span className="rounded-full px-3 py-1 border border-white/10 bg-white/5">Lisk Sepolia</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
