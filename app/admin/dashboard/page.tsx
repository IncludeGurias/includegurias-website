"use client"
import { Flex, IconButton, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Tooltip } from "@chakra-ui/react"
import { redirect } from "next/navigation"
import { BiLogOut } from "react-icons/bi"
import EventosAtividades from "./Tabs/EventosAtividades"
import Materiais from "./Tabs/Materiais"
import PaginaInicial from "./Tabs/PaginaInicial"
import Partners from "./Tabs/Partners"
import RedesSociais from "./Tabs/RedesSociais"
import Time from "./Tabs/Time"
import useAuthStore from "../authStore"
import Noticias from "./Tabs/Noticias"

const TAB_LIST = [
  { name: "Materiais", icon: "FaBook", component: Materiais },
  { name: "Eventos e Atividades", icon: "FaCalendar", component: EventosAtividades },
  { name: "Time", icon: "FaUsers", component: Time },
  { name: "Parceiros", icon: "FaHandshake", component: Partners },
  { name: "Redes Sociais", icon: "FaShare", component: RedesSociais },
  { name: "Página Inicial", icon: "FaHome", component: PaginaInicial },
  { name: "Notícias", icon: "FaNewspaper", component: Noticias },
]

export default function Dashboard() {
  const { logout, isLoggedIn } = useAuthStore()

  if (!isLoggedIn) {
    redirect("/admin")
  }

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      minHeight="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <>
        <Stack
          backgroundColor="whiteAlpha.900"
          justifyContent="space-between"
          w="100%"
          display="flex"
          flexDir="row"
          px="1rem"
          py="0.5rem"
          alignItems="center"
        >
          <h1 className="text-xl font-bold">Olá, Admin</h1>
          <Tooltip label="Sair" aria-label="Sair">
            <IconButton onClick={logout} aria-label="Logout" icon={<BiLogOut />} />
          </Tooltip>
        </Stack>
        <Tabs isFitted w={"100%"} variant="enclosed-colored" colorScheme="gray" minH="100vh">
          <TabList mb="1em">
            {TAB_LIST.map((tab, index) => (
              <Tab key={index}>{tab.name}</Tab>
            ))}
          </TabList>
          <TabPanels>
            {TAB_LIST.map((tab, index) => (
              <TabPanel key={index}>
                <tab.component />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
      </>
    </Flex>
  )
}
