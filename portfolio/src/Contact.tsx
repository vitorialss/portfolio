import TextField from "./TextField";
import Image from "./assets/image-from-rawpixel-id-7524994-jpeg.jpg";
import { useState } from "react";
import ContactBox from "./Contact.module";
import MainButton from "./MainButton";

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
        <form action="https://formsubmit.co/vick.leilanea@gmail.com" method="POST">
          <TextField
            label="Nome"
            name="nome"
            type="text"
            value={nome}
            setStatus={setNome}
          />

          <TextField
            label="E-mail"
            name="email"
            type="email"
            value={email}
            setStatus={setEmail}
          />

          <TextField
            label="Assunto"
            name="assunto"
            type="text"
            value={assunto}
            setStatus={setAssunto}
          />
          <TextField
            label="Mensagem"
            name="text"
            type="text"
            value={mensagem}
            setStatus={setMensagem}
            
          />

          <MainButton name="Enviar Mensagem" type="submit" />
        </form>
      </div>
    </ContactBox>
  );
}
