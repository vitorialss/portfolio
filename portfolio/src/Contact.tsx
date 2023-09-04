import TextField from "./TextField";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function Contact() {
  const {
    reset,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: any) => {
    setIsSubmitted(true);
    reset();
  };

  if (isSubmitted) {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#10B981"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h4>Email enviado</h4>
        <button onClick={(e) => setIsSubmitted(false)}>Back to Form</button>
      </>
    );
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label="Nome"
            type="text"
            
            {...register("name", {
              required: "O campo precisa estar preenchido.",
            })}
          />
          <ErrorMessage errors={errors} name="name" />
          <TextField
            label="E-mail"
            type="email"
            
            {...register("email", {
              required: "O campo precisa estar preenchido.",
            })}
          />
          <ErrorMessage errors={errors} name="email" />
          <TextField label="Assunto" type="text"  />
          <TextField
            label="Mensagem"
            type="text"
           
            {...register("message", {
              required: "O campo precisa estar preenchido.",
            })}
          />
          <ErrorMessage errors={errors} name="message" />
          <input type="submit">Enviar mensagem</input>
        </form>
      </div>
    </div>
  );
};


