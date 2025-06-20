// app/api/includeInfo/route.ts

import { IncludeInfo } from "@prisma/client";
import { prisma } from "prisma/config";

export async function GET(_request: Request) {
  try {
    // Busca todas as informações do Include do banco de dados
    const includeInfo = await prisma.includeInfo.findMany({});

    return new Response(JSON.stringify(includeInfo), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Erro no servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function PUT(request: Request) {
  try {
    const newIncludeInfo = (await request.json()) as IncludeInfo[];

    // Verifica se as informações do Include são válidas
    if (!newIncludeInfo || newIncludeInfo.length === 0) {
      return new Response(
        JSON.stringify({ error: "Nenhuma informação do Include informada" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Deleta todas as informações do Include existentes
    await prisma.includeInfo.deleteMany({});

    // Cria as novas informações do Include
    await prisma.includeInfo.createMany({
      data: newIncludeInfo,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Erro no servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
