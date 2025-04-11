export default function Review({
  params,
}: {
  params: { productsId: string; reviewsId: string };
}) {
  return (
    <div>
      <p>Produto {params.productsId}</p>
      <p>Reviews {params.reviewsId}</p>
    </div>
  );
}
