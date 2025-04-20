// é possivel criar um back and dentro do next, sem ter que ter um projeto separado para isso, pois ele sobe um servidor junto da aplicação.

import { NextRequest } from "next/server";

import { headers, cookies } from "next/headers";

// const data = {
//   user: {
//     nome: "teste",
//     idade: 30,
//   },
//   user01: {
//     nome: "teste",
//     idade: 30,
//   },
//   user02: {
//     nome: "teste",
//     idade: 30,
//   },
//   user03: {
//     nome: "teste",
//     idade: 30,
//   },
//   user04: {
//     nome: "teste",
//     idade: 30,
//   },
// };

export async function GET(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  const headerList = headers();
  console.log((await headerList).get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log(theme);

  (await cookies()).set("token", "123abc");
  const cookiess = (await cookies()).get("token");
  console.log(cookiess);

  return new Response("<h1>Profile route</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    },
  });
}
