export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-2xl space-y-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-950/60 border border-emerald-800 rounded-full">
          Proyecto en Desarrollo
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          IEHO
        </h1>
        <p className="text-lg text-slate-400">
          Ingeniería Eléctrica Hidráulica de Occidente
        </p>
      </div>
    </main>
  );
}