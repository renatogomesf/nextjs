// este "page dentro da raiz/pasta app, sempre sera o home da aplicação"
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-teal-700">opaaaaa</h1>

      <Link href={"/aula09/products"}>Ir para produtos</Link>
    </div>
  );
}
