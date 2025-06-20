import { TeamMember } from "@prisma/client";
import { prisma } from "prisma/config";

export async function GET(_request: Request) {
  try {
    // Busca todos os membros da equipe do banco de dados
    const teamMembers = await prisma.teamMember.findMany();

    return new Response(JSON.stringify(teamMembers), {
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
    const newTeamMembers = (await request.json()) as TeamMember[];

    // Verifica se os membros da equipe são válidos
    if (!newTeamMembers || newTeamMembers.length === 0) {
      return new Response(
        JSON.stringify({ error: "Nenhum membro da equipe informado" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Deleta todos os membros da equipe existentes
    await prisma.teamMember.deleteMany({});

    // Cria os novos membros da equipe
    await prisma.teamMember.createMany({
      data: newTeamMembers,
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
