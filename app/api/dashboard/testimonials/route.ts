import { Testimonial } from "@prisma/client"
import { prisma } from "prisma/config"

export async function GET(_request: Request) {
  try {
    // Busca todos os testemunhos do banco de dados
    const testimonials = await prisma.testimonial.findMany()

    return new Response(JSON.stringify(testimonials), {
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
    const newTestimonials = (await request.json()) as Testimonial[]

    // Verifica se os testemunhos são válidos
    if (!newTestimonials || newTestimonials.length === 0) {
      return new Response(JSON.stringify({ error: "Nenhum testemunho informado" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      })
    }

    // Deleta todos os testemunhos existentes
    await prisma.testimonial.deleteMany({})

    // Cria os novos testemunhos
    await prisma.testimonial.createMany({
      data: newTestimonials,
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
