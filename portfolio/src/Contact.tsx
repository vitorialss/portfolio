import TextField from "./TextField";
import Image from "./assets/image-from-rawpixel-id-7524994-jpeg.jpg";
import { ChangeEvent, useState } from "react";

import ReactDOM from "react-dom";
import ContactBox from "./contact.module";

export default function Contact() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [assunto, setAssunto] = useState("");
  const [mensagem, setMensagem] = useState("");

  return (
    <ContactBox>
      <div>
        <img
          src={Image}
          alt="foto de uma mão segurando um telefone rosa antigo"
        />
      </div>
      <div>
        <h2>Contato</h2>
        <p>Quer entrar em contato comigo?</p>
        <p>
          Preencha o formulário e entrarei em contato o mais rápido possível.
        </p>
        <p>{nome}</p>
        <form>
          <TextField
            label="Nome"
            type="text"
            value={nome}
            setStatus={setNome}
          />

          <TextField
            label="E-mail"
            type="email"
            value={email}
            setStatus={setNome}
          />

          <TextField
            label="Assunto"
            type="text"
            value={assunto}
            setStatus={setNome}
          />
          <TextField
            label="Mensagem"
            type="text"
            value={mensagem}
            setStatus={setNome}
            
          />

          <button type="submit">Enviar mensagem </button>
        </form>
      </div>
    </ContactBox>
  );
}
