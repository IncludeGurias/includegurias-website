import { Material } from "@prisma/client"
import { prisma } from "prisma/config"

export async function GET(_request: Request) {
  try {
    // Busca todos os materiais do banco de dados
    const materials = await prisma.material.findMany({})

    return new Response(JSON.stringify(materials), {
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
    const newMaterials = (await request.json()) as Material[]

    //check se os materiais são válidos
    if (!newMaterials || newMaterials.length === 0) {
      return new Response(JSON.stringify({ error: "Nenhum material informado" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Deleta todos os materiais existentes
    await prisma.material.deleteMany({})

    // Cria os novos materiais
    await prisma.material.createMany({
      data: newMaterials,
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
