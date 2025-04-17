export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <p className="bg-blue-400">Especificações</p>
      {children}
    </div>
  );
}
