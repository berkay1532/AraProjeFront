export async function POST(request: Request) {
  const data = await request.json();

  const token = data.password;

  const res = {
    message: "Başarılı",
    token,
  };

  return Response.json(res);
}
