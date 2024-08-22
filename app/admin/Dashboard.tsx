"use client"
import { Box, IconButton, Stack, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import { BiLogOut } from "react-icons/bi"
import useAuthStore from "./authStore"
import Contato from "./Tabs/Contato"
import EventosAtividades from "./Tabs/EventosAtividades"
import Materiais from "./Tabs/Materiais"
import PaginaInicial from "./Tabs/PaginaInicial"
import Partners from "./Tabs/Partners"
import RedesSociais from "./Tabs/RedesSociais"
import Time from "./Tabs/Time"

const TAB_LIST = [
  { name: "Materiais", icon: "FaBook", component: Materiais },
  { name: "Eventos e Atividades", icon: "FaCalendar", component: EventosAtividades },
  { name: "Time", icon: "FaUsers", component: Time },
  { name: "Contato", icon: "FaPhone", component: Contato },
  { name: "Parceiros", icon: "FaHandshake", component: Partners },
  { name: "Redes Sociais", icon: "FaShare", component: RedesSociais },
  { name: "Página Inicial", icon: "FaHome", component: PaginaInicial },
]

const Dashboard = () => {
  const { user } = useAuthStore()

  return (
    <Box w="100%" minH="100vh" display="flex" flexDir="column" alignItems="center" justifyContent="center">
      <Stack
        backgroundColor="whiteAlpha.900"
        justifyContent="space-between"
        w="100%"
        display="flex"
        flexDir="row"
        px="1rem"
        py="0.5rem"
      >
        {user && <h1>{user.email}</h1>}
        <IconButton onClick={() => useAuthStore.getState().setUser(null)} aria-label="Logout" icon={<BiLogOut />} />
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
    </Box>
  )
}

export default Dashboard
