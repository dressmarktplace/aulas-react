import { useState } from "react";
import { Card } from "./components/Card";
import { Hello } from "./components/Hello";

const App = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const inc = () => setCount(c => c + 1)

  const handleSubmit = event => {
    event.preventDefault()

    console.log({ name, email, password })
    setName("")
    setEmail("")
    setPassword("")

  }
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

      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col space-y mb-2">
          <label htmlFor="name" className="font-medium">
            Digite seu nome
          </label>

          <input
            id="name"
            name="name"
            placeholder="Nome completo"
            className="py-2 px-4 border rounded-2xl w-full"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </fieldset>

        <fieldset className="flex flex-col space-y mb-2">
          <label htmlFor="email" className="font-medium">
            Digite seu E-mail
          </label>

          <input
            id="email"
            name="email"
            placeholder="E-mail"
            className="py-2 px-4 border rounded-2xl w-full"
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </fieldset>

         <fieldset className="flex flex-col space-y mb-2">
          <label htmlFor="password" className="font-medium">
            Digite a senha
          </label>

          <input
          type="password"
            id="password"
            name="password"
            placeholder="senha"
            className="py-2 px-4 border rounded-2xl w-full"
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </fieldset>


        <button
          type="submit"
          className="inline-block px-4 py-2 rounded-lg border houver:bg-slate-300 transition-all focus:ring-2 focus:ring-blue-500">
          Enviar
        </button>
      </form>
    </main>
  );
}

export default App
