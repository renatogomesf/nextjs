import { notFound } from "next/navigation";

export default function Info({ params }: { params: { productsId: string } }) {
  if (Number(params.productsId) > 100) {
    notFound();
  }

  return (
    <div>
      <h1>informações do produto {params.productsId}</h1>
    </div>
  );
}
