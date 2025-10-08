import { useState } from "react";
import { Card } from "./components/Card";
import { Hello } from "./components/Hello";

const App = () => {
  const [count, setCount] = useState(0)

  const inc = () => setCount(c => c + 1)

  return (
    <main className="min-h-dvh place-items-center bg-slate-50">
      <h1 className="text-3xl font-bold text-slate-800">
        Hello Tailwind + React!
      </h1>

      <div className="container mx-auto p-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card title="Card A">
          <p>Filho de A</p>
        </Card>
        <Card title="Card B">
          <p>Filho de B</p>
        </Card>
        <Card title="Card C">
          <p>Filho de C</p>
        </Card>

      </div>

      <a className="inline-block px-4 py-2 rounded-lg border houver:bg-slate-300 transition-all focus:ring-2 focus:ring-blue-500">
        link com foco
      </a>

      <Hello name="Michelle" />
      <Hello name="Maria" />
      <Hello name="João" />

      <button onClick={inc} className="inline-block px-4 py-2 rounded-lg border houver:bg-slate-300 transition-all focus:ring-2 focus:ring-blue-500">
        Contador {count}
      </button>

    </main>
  );
}

export default App
