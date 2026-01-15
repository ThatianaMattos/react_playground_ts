import { useState } from "react";
import Home from "../home/Home";

function Login() {
  const [isLogged, setIsLogged] = useState(false);
  const [nome, setNome] = useState("");

  function entrar() {
    if (nome.trim() === "") return;
    setIsLogged(true);
  }

  function sair() {
    setIsLogged(false);
    setNome("");
  }

  return (
    <>
      {isLogged ? (
        <div>
          <Home titulo="Componente Home" texto={`Bem-vindo de volta, ${nome}!`} />
          <button onClick={sair}>Sair</button>
        </div>
      ) : (
        <div>
          <h2>Componente Login</h2>

          <input
            type="text"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />

          <button onClick={entrar} disabled={nome.trim() === ""}>
            Entrar
          </button>
        </div>
      )}
    </>
  );
}

export default Login;
