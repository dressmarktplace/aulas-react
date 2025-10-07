import { Hello } from "./components/Hello";

const App = () => {
  return (
    <main className="min-h-dvh place-items-center bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-800">
        Hello Tailwind + React!
      </h1>

      <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border p-4 bg-white shadow-sm">
          Card A
        </div>
        <div className="rounded-2xl border p-4 bg-white shadow-sm">
          Card B
        </div>
        <div className="rounded-2xl border p-4 bg-white shadow-sm">
          Card C
        </div>
      </div>

      <a className="inline-block px-4 py-2 rounded-lg border houver:bg-slate-300 transition-all focus:ring-2 focus:ring-blue-500">
        link com foco
        </a>

        <Hello name="Michelle" />
        <Hello name="Maria" />
        <Hello name="João" />
    </main>
  );
}

export default App
