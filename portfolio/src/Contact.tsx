import TextField from "./TextField";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function validateForm() {
    if (name.length == 0) {
      alert("Formato Inválido, Nome não pode ser um campo vazio");
      return;
    }

    if (email.length == 0) {
      alert("Formato Inválido, email não pode ser um campo vazio");
      return;
    }
    if (mensagem.length == 0) {
        alert('Invalid Form, Email Address can not be empty')
        return
      }
  }

  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h2>Contato</h2>
        <p>Quer entrar em contato comigo?</p>
        <p>
          Preencha o formulário e entrarei em contato o mais rápido possível.
        </p>
        <form>
          <TextField label="Nome" type="text" />
          <TextField label="E-mail" type="email" />
          <TextField label="Assunto" type="text" />
          <TextField label="Mensagem" type="text" />
          <button
            type="submit"
            onClick={() => {
              validateForm();
            }}
          >
            Enviar mensagem
          </button>
        </form>
      </div>
    </div>
  );
};
