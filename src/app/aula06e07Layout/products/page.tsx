// todo arquivo dentro de app o next interpreta como página.
import { Metadata } from "next";

export const metadata: Metadata = {
  // ignora o "default" e o "template" e poe titulo que estiver no absolute. mas só funciona na página que o absolute estiver definido.
  //absolute: "teste de texto",

  title: "Produtos",
};

export default function Products() {
  return (
    <div>
      <h1>products aula 04</h1>
      <p>produto 01</p>
      <p>produto 02</p>
      <p>produto 03</p>
    </div>
  );
}
