import React from 'react';

function PetitionCard({ title, boosted, signatures, creator }) {
  return (
    <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:border-emerald-400/30 transition">
      {boosted && (
        <span className="absolute top-3 right-3 text-[10px] tracking-wide rounded-full px-2 py-1 bg-emerald-500/20 text-emerald-200 border border-emerald-400/30">BOOSTED</span>
      )}
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-xs text-white/60 mt-1">by {creator}</p>
      <div className="mt-4 flex items-center justify-between text-sm text-white/80">
        <span>{signatures} signatures</span>
        <button className="rounded-full px-3 py-1.5 border border-white/10 bg-white/10 text-white hover:bg-white/15 text-xs">View</button>
      </div>
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-emerald-400/10 to-cyan-400/10" />
    </div>
  );
}

export default function PetitionList() {
  // static sample list to visualize layout
  const petitions = [
    { id: 1, title: 'Support Open Web Standards', boosted: true, signatures: 1240, creator: '0xA1...5f' },
    { id: 2, title: 'Protect User Privacy in AI Systems', boosted: false, signatures: 980, creator: '0x9C...12' },
    { id: 3, title: 'Green Energy for Public Infrastructure', boosted: false, signatures: 642, creator: '0xB2...9d' },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Trending Petitions</h2>
          <p className="text-white/60 text-sm mt-1">Boosted petitions appear first, followed by the latest.</p>
        </div>
        <button className="rounded-lg px-4 py-2 text-sm text-white font-medium border border-white/10 bg-white/10 hover:bg-white/15 transition">Create</button>
      </div>

      <div className="mt-6 grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {petitions.map(p => (
          <PetitionCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  );
}
