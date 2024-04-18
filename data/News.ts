import { AdaLoveCard, includeOnCPT, newChatbot, newWebsite } from "public"
import { NewsItem } from "types/News"

const NewsArray: NewsItem[] = [
  {
    title: "Include Gurias - Computer on the beach 2024",
    description:
      "Include Gurias estará presente no evento Computer on the beach 2024. Teremos um stand com diversas atividades para o público. Venha nos visitar!",
    image: includeOnCPT,
    date: new Date("2022-04-10").getTime() + 1000 * 60 * 60 * 24,
    href: "https://computeronthebeach.com.br/",
  },
  {
    title: "Include Gurias - Mulheres da STEM",
    description:
      "Você é mulher e está no ensino médio? Quer saber mais sobre as mulheres que fazem parte da área de exatas? Então esse programa é para você!",
    image: AdaLoveCard,
    date: new Date("2022-04-09").getTime() + 1000 * 60 * 60 * 24,
    href: "/materials/mulheres-da-stem",
  },

  {
    title: "Lançamento do novo site",
    description: "Estamos felizes em anunciar o lançamento do nosso novo site. Venha conferir!",
    image: newWebsite,
    date: new Date("2024-04-08").getTime() + 1000 * 60 * 60 * 24,
  },
  {
    title: "Lançamento Chatbot",
    description: "Estamos felizes em anunciar o lançamento do nosso chatbot. Venha conversar com a gente!",
    image: newChatbot,
    date: new Date("2024-04-07").getTime() + 1000 * 60 * 60 * 24,
  },
]

export default NewsArray
