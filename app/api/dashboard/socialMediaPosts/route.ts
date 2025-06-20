import { PrimaryPageSocialMediaPosts } from "@prisma/client";
import { prisma } from "prisma/config";

export async function GET(_request: Request) {
  try {
    // Busca todos os posts de mídia social do banco de dados
    const socialMediaPosts =
      await prisma.PrimaryPageSocialMediaPosts.findMany();
    return new Response(JSON.stringify(socialMediaPosts), {
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
    const newSocialMediaPosts =
      (await request.json()) as PrimaryPageSocialMediaPosts[];

    // Verifica se os posts de mídia social são válidos
    if (!newSocialMediaPosts || newSocialMediaPosts.length === 0) {
      return new Response(
        JSON.stringify({ error: "Nenhum post de mídia social informado" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Deleta todos os posts de mídia social existentes
    await prisma.PrimaryPageSocialMediaPosts.deleteMany({});

    // Cria os novos posts de mídia social
    await prisma.PrimaryPageSocialMediaPosts.createMany({
      data: newSocialMediaPosts,
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
