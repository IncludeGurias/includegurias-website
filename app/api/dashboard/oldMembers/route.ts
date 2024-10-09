import { OldMember } from "@prisma/client"
import { prisma } from "prisma/config"

export async function GET(_request: Request) {
  try {
    // Busca todos os antigos membros do banco de dados
    const oldMembers = await prisma.OldMember.findMany({})

    return new Response(JSON.stringify(oldMembers), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: "Erro no servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}

export async function PUT(request: Request) {
  try {
    const newOldMembers = (await request.json()) as OldMember[]

    // Verifica se os antigos membros são válidos
    if (!newOldMembers || newOldMembers.length === 0) {
      return new Response(JSON.stringify({ error: "Nenhum antigo membro informado" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Deleta todos os antigos membros existentes
    await prisma.OldMember.deleteMany({})

    // Cria os novos antigos membros
    await prisma.OldMember.createMany({
      data: newOldMembers,
    })

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ error: "Erro no servidor" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
}
