import { PrimaryPageVideos } from "@prisma/client"
import { prisma } from "prisma/config"

export async function GET(_request: Request) {
  try {
    // Busca todos os vídeos da página principal do banco de dados
    const primaryPageVideos = await prisma.PrimaryPageVideos.findMany()

    return new Response(JSON.stringify(primaryPageVideos), {
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
    const newPrimaryPageVideos = (await request.json()) as PrimaryPageVideos[]

    // Verifica se os vídeos são válidos
    if (!newPrimaryPageVideos || newPrimaryPageVideos.length === 0) {
      return new Response(JSON.stringify({ error: "Nenhum vídeo informado" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Deleta todos os vídeos existentes
    await prisma.PrimaryPageVideos.deleteMany({})

    // Cria os novos vídeos
    await prisma.PrimaryPageVideos.createMany({
      data: newPrimaryPageVideos,
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
