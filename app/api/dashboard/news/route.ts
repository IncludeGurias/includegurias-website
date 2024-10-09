import { News } from "@prisma/client"
import { prisma } from "prisma/config"

export async function GET(_request: Request) {
  try {
    // Busca todas as notícias do banco de dados
    const news = await prisma.News.findMany({})

    return new Response(JSON.stringify(news), {
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
    const newNews = (await request.json()) as News[]

    // Verifica se as notícias são válidas
    if (!newNews || newNews.length === 0) {
      return new Response(JSON.stringify({ error: "Nenhuma notícia informada" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Deleta todas as notícias existentes
    await prisma.News.deleteMany({})

    // Cria as novas notícias
    await prisma.News.createMany({
      data: newNews,
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
