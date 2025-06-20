import { PrimaryPageSocialMediaPosts } from "@prisma/client"
import { prisma } from "prisma/config"

export async function GET(_request: Request) {
  try {
    // Busca todas as postagens de redes sociais do banco de dados
    const socialMediaPosts = await prisma.primaryPageSocialMediaPosts.findMany()

    return new Response(JSON.stringify(socialMediaPosts), {
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
    const newSocialMediaPosts = (await request.json()) as PrimaryPageSocialMediaPosts[]

    // Verifica se as postagens de redes sociais são válidas
    if (!newSocialMediaPosts || newSocialMediaPosts.length === 0) {
      return new Response(JSON.stringify({ error: "Nenhuma postagem de rede social informada" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Deleta todas as postagens de redes sociais existentes
    await prisma.primaryPageSocialMediaPosts.deleteMany({})

    // Cria as novas postagens de redes sociais
    await prisma.primaryPageSocialMediaPosts.createMany({
      data: newSocialMediaPosts,
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
