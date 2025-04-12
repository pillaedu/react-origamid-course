import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input";
import Button from "../Form/Button";

function LoginForm() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {}

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" name={"username"} type="text" />
        <Input label="Senha" name={"password"} type="password" />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
