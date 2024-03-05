export async function GET(req, res, next) {
  let users = [
    {
      id: 1,
      name: "Iwan",
      email: "iwan@mail.com",
    },
    {
      id: 2,
      name: "Tasya",
      email: "tasya@mail.com",
    },
  ];

  let data = JSON.stringify(users);
  return new Response(data, { status: 200 });
}
