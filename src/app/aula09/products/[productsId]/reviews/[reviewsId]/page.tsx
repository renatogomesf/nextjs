import { notFound } from "next/navigation";

export default function Review({
  params,
}: {
  params: { productsId: number; reviewsId: number };
}) {
  if (Number(params.reviewsId) > 100) {
    notFound();
  }

  return (
    <div>
      <p>Produto {params.productsId}</p>
      <p>Reviews {params.reviewsId}</p>
    </div>
  );
}
