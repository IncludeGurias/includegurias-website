import { OldMember } from "@prisma/client";
import { prisma } from "prisma/config";

export async function GET(_request: Request) {
  try {
    // Busca todos os membros antigos do banco de dados
    const oldMembers = await prisma.oldMember.findMany({});

    return new Response(JSON.stringify(oldMembers), {
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
    const newOldMembers = (await request.json()) as OldMember[];

    // Verifica se os membros antigos são válidos
    if (!newOldMembers || newOldMembers.length === 0) {
      return new Response(
        JSON.stringify({ error: "Nenhum membro antigo informado" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Deleta todos os membros antigos existentes
    await prisma.oldMember.deleteMany({});

    // Cria os novos membros antigos
    await prisma.oldMember.createMany({
      data: newOldMembers,
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
