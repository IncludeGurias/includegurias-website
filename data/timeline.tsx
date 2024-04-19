import { IncludeOnCPT } from "public"
import { TimelineItemProps } from "types/timeline"
import generateTimestampByDate from "utils/generateTimestampByDate"

const TIMELINE_DATA: TimelineItemProps[] = [
  {
    id: 1,
    title: "Include Gurias - Computer on the beach 2024",
    description:
      "Include Gurias estará presente no evento Computer on the beach 2024. Teremos um stand com diversas atividades para o público. Venha nos visitar!",
    image: IncludeOnCPT,
    date: generateTimestampByDate("2024-04-10"),
    href: "https://computeronthebeach.com.br/",
  },
  {
    id: 2,
    date: generateTimestampByDate("2024-04-8"),
    image: IncludeOnCPT,
    title: "Lançamento do novo site",
    description:
      "Estamos felizes em anunciar o lançamento do nosso novo site em parceria com a Bots Channel. Venha conferir!",
  },
  {
    id: 3,
    date: generateTimestampByDate("2024-04-7"),
    image: IncludeOnCPT,
    title: "Lançamento Chatbot",
    description:
      "Estamos felizes em anunciar o lançamento do nosso chatbot em parceria com a Bots Channel. Venha conversar com a gente!",
    href: "/event3",
  },
]

export default TIMELINE_DATA.sort((a, b) => b.date - a.date)
