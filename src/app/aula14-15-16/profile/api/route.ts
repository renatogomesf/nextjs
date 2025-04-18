// é possivel criar um back and dentro do next, sem ter que ter um projeto separado para isso, pois ele sobe um servidor junto da aplicação.

const data = {
  user: {
    nome: "teste",
    idade: 30,
  },
  user01: {
    nome: "teste",
    idade: 30,
  },
  user02: {
    nome: "teste",
    idade: 30,
  },
  user03: {
    nome: "teste",
    idade: 30,
  },
  user04: {
    nome: "teste",
    idade: 30,
  },
};

export async function GET() {
  return new Response(JSON.stringify(data));
}
