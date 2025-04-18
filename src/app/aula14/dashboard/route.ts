// é possivel criar um back and dentro do next, sem ter que ter um projeto separado para isso, pois ele sobe um servidor junto da aplicação.

export async function GET() {
  return new Response("dashboard");
}
