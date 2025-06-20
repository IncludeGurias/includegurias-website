// app/api/auth/login.js
import { prisma } from "../../../prisma/config";

export async function POST(request: Request) {
  try {
    const { email, password } = (await request.json()) as {
      email: string;
      password: string;
    };
    const user = await prisma.user.findUnique({ where: { email } });

    if (user && user.password === password) {
      return new Response(JSON.stringify({ success: true }), {
        // Retorna true
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ success: false }), {
        // Retorna false
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Erro no servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
