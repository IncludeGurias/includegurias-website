import { SocialMedia } from "@prisma/client"
import { prisma } from "../../../../prisma/config"

export async function GET(_request: Request) {
  try {
    // Busca todas as redes sociais do banco de dados
    const socialMedia = await prisma.socialMedia.findMany({})

    return new Response(JSON.stringify(socialMedia), {
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
    const newSocialMedia = (await request.json()) as SocialMedia[]

    // Verifica se as redes sociais são válidas
    if (!newSocialMedia || newSocialMedia.length === 0) {
      return new Response(JSON.stringify({ error: "Nenhuma rede social informada" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Deleta todas as redes sociais existentes
    await prisma.socialMedia.deleteMany({})

    // Cria as novas redes sociais
    await prisma.socialMedia.createMany({
      data: newSocialMedia,
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
