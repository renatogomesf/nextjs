export default function Info({ params }: { params: { productsId: string } }) {
  return (
    <div>
      <h1>informações do produto {params.productsId}</h1>
    </div>
  );
}
