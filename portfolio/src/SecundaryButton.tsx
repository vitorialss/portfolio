import styled from "styled-components";

const Button = styled.button`
  background-color: #f0cbd0;
  color: #065e52;
  padding: 10px 20px;
  border: solid #065e52;
  font-size: 1rem;
  border-radius: 50px;
  cursor: pointer;
`;

const SecundaryButton = ({
  name,
  type,
}: {
  name: string;
  type: "button" | "submit" | "reset" | undefined;
}) => {
  return <Button type={type}>{name}</Button>;
};

export default SecundaryButton;
