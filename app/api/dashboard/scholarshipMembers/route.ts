import { ScholarshipMember } from "@prisma/client"
import { prisma } from "prisma/config"

export async function GET(_request: Request) {
  try {
    // Busca todos os membros de bolsa de estudo do banco de dados
    const scholarshipMembers = await prisma.scholarshipMember.findMany()

    return new Response(JSON.stringify(scholarshipMembers), {
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
    const newScholarshipMembers = (await request.json()) as ScholarshipMember[]

    // Verifica se os membros de bolsa de estudo são válidos
    if (!newScholarshipMembers || newScholarshipMembers.length === 0) {
      return new Response(JSON.stringify({ error: "Nenhum membro de bolsa de estudo informado" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Deleta todos os membros de bolsa de estudo existentes
    await prisma.scholarshipMember.deleteMany({})

    // Cria os novos membros de bolsa de estudo
    await prisma.scholarshipMember.createMany({
      data: newScholarshipMembers,
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
