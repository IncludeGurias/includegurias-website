// app/api/auth/login.js
import { prisma } from "../../../prisma/config";

export async function POST(request: Request) {
  try {
    // Verifica se estamos em ambiente de build
    if (process.env.NODE_ENV === "production" && !process.env.DATABASE_URL) {
      return new Response(
        JSON.stringify({ error: "Database not configured" }),
        {
          status: 503,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const { email, password } = (await request.json()) as {
      email: string;
      password: string;
    };

    if (!email || !password) {
      return new Response(
        JSON.stringify({ error: "Email and password required" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

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
    console.error("Auth API error:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
