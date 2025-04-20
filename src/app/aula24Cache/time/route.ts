export const dynamic = "force-dynamic"; // força parada de cache

export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}
