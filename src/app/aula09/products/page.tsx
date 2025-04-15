// todo arquivo dentro de app o next interpreta como página.
import { Metadata } from "next";

import Link from "next/link";

export const metadata: Metadata = {
  // ignora o "default" e o "template" e poe titulo que estiver no absolute. mas só funciona na página que o absolute estiver definido.
  //absolute: "teste de texto",

  title: "Produtos",
};

export default function Products() {
  const id = 1;

  return (
    <div>
      <h1>products aula 04</h1>
      <Link href={`/aula09/products/${id}`}>produto 01</Link>
      <Link href={"/aula09/products/2"}>produto 02</Link>

      {/* replace faz voltar para a home quando clica na seta de voltar do navegador */}
      <Link href={"/aula09/products/3"} replace>
        produto 03
      </Link>

      <Link href={"/"}>voltar para home</Link>
    </div>
  );
}
