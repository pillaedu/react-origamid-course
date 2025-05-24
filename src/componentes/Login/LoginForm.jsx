import React from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input";
import Button from "../Form/Button";
import useForm from "../../hooks/useForm";
import { UserContext } from "../../useContext";

function LoginForm() {
  const userName = useForm();
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);

  React.useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      getUser(token);
    }
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();

    if (!userName.validate() || !password.validate()) return;

    userLogin(userName.value, password.value);
  }

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();

    if (response.ok) {
      window.localStorage.setItem("user", JSON.stringify(json));
      window.location.href = "/conta";
    } else {
      userName.setError(json.message);
      password.setError(json.message);
    }
  }

  return (
    <section>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input label="Usuário" name={"username"} type="text" {...userName} />
        <Input label="Senha" name={"password"} type="password" {...password} />
        <Button>Entrar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
}

export default LoginForm;
