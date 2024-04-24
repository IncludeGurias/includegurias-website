import { AdaLoveCard, IncludeOnCPT, NewChatbot, NewWebsite } from "public"
import { NewsItem } from "types/News"
import generateTimestampByDate from "utils/generateTimestampByDate"

export const NewsArray: NewsItem[] = [
  {
    title: "Include Gurias - Computer on the beach 2024",
    description:
      "Include Gurias estará presente no evento Computer on the beach 2024. Teremos um stand com diversas atividades para o público. Venha nos visitar!",
    image: IncludeOnCPT,
    date: generateTimestampByDate("2024-04-10"),
    href: "https://computeronthebeach.com.br/",
  },
  {
    title: "Include Gurias - Mulheres da STEM",
    description:
      "Você é mulher e está no ensino médio? Quer saber mais sobre as mulheres que fazem parte da área de exatas? Então esse programa é para você!",
    image: AdaLoveCard,
    date: generateTimestampByDate("2024-04-09"),
    href: "/materials/mulheres-da-stem",
  },

  {
    title: "Lançamento do novo site",
    description: "Estamos felizes em anunciar o lançamento do nosso novo site. Venha conferir!",
    image: NewWebsite,
    date: generateTimestampByDate("2024-04-08"),
  },
  {
    title: "Lançamento Chatbot",
    description: "Estamos felizes em anunciar o lançamento do nosso chatbot. Venha conversar com a gente!",
    image: NewChatbot,
    date: generateTimestampByDate("2024-04-07"),
  },
]
