import { Partners } from "@prisma/client";
import { prisma } from "prisma/config";

export async function GET(_request: Request) {
  try {
    // Busca todos os parceiros do banco de dados
    const partners = await prisma.Partners.findMany();

    return new Response(JSON.stringify(partners), {
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
    const newPartners = (await request.json()) as Partners[];

    // Verifica se os parceiros são válidos
    if (!newPartners || newPartners.length === 0) {
      return new Response(
        JSON.stringify({ error: "Nenhum parceiro informado" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Deleta todos os parceiros existentes
    await prisma.Partners.deleteMany({});

    // Cria os novos parceiros
    await prisma.Partners.createMany({
      data: newPartners,
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
