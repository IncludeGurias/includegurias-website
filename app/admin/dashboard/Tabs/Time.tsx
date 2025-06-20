"use client";
import {
  Box,
  Button,
  Input,
  Spinner,
  Stack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { BiSave } from "react-icons/bi";
import { TbPlus } from "react-icons/tb";
import {
  useOldMembersStore,
  useScholarshipMembersStore,
  useTeamMembersStore,
} from "app/states";
import { HeadingText } from "components";
import { OldMember, ScholarshipMember, TeamMember } from "types/data/team";
import DeleteButton from "./DeleteButton";

const Time = () => {
  const [time, setTime] = useState<TeamMember[]>([]);
  const [teamHasChanged, setTeamHasChanged] = useState(false);

  const { getTeamMembers, updateTeamMembers, teamMembersLoading } =
    useTeamMembersStore((state) => ({
      getTeamMembers: state.getTeamMembers,
      updateTeamMembers: state.updateTeamMembers,
      teamMembersLoading: state.teamMembersLoading,
    }));

  useEffect(() => {
    getTeamMembers().then((data) => setTime(data));
  }, [getTeamMembers]);

  const handleTeamChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    index: number,
    field: keyof TeamMember
  ) => {
    try {
      if (index < 0 || index >= time.length || !time[index]) return;
      setTime((prev) =>
        prev.map((member, i) =>
          i === index ? { ...member, [field]: e.target.value } : member
        )
      );
      setTeamHasChanged(true);
    } catch (error) {
      alert("Erro ao alterar membro da equipe");
      console.error(error);
    }
  };

  const handleTeamAdd = () => {
    const newTeamMember: TeamMember = {
      name: "Novo Membro",
      job: "",
      imageUrl: "",
      href: "",
    };
    setTime([...time, newTeamMember]);
  };

  const handleTeamDelete = (index: number) => {
    setTeamHasChanged(true);
    const updatedTeam = [...time];
    updatedTeam.splice(index, 1);
    setTime(updatedTeam);
  };

  const handleTeamSave = () => {
    updateTeamMembers(time).then(() => {
      alert("Membros da equipe salvos com sucesso!");
    });
    setTeamHasChanged(false);
  };

  const [bolsistas, setBolsistas] = useState<ScholarshipMember[]>([]);
  const [bolsistasHasChanged, setBolsistasHasChanged] = useState(false);
  const {
    getScholarshipMembers,
    updateScholarshipMembers,
    scholarshipMembersLoading,
  } = useScholarshipMembersStore((state) => ({
    getScholarshipMembers: state.getScholarshipMembers,
    updateScholarshipMembers: state.updateScholarshipMembers,
    scholarshipMembersLoading: state.scholarshipMembersLoading,
  }));

  useEffect(() => {
    getScholarshipMembers().then((data) => setBolsistas(data));
  }, [getScholarshipMembers]);

  const handleBolsistaChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    index: number,
    field: keyof ScholarshipMember
  ) => {
    try {
      if (index < 0 || index >= bolsistas.length || !bolsistas[index]) return;
      setBolsistas((prev) =>
        prev.map((bolsista, i) =>
          i === index ? { ...bolsista, [field]: e.target.value } : bolsista
        )
      );
      setBolsistasHasChanged(true);
    } catch (error) {
      alert("Erro ao alterar bolsista");
      console.error(error);
    }
  };

  const handleBolsistaAdd = () => {
    const newBolsista: ScholarshipMember = {
      name: "Novo Bolsista",
      imageUrl: "",
    };
    setBolsistas([...bolsistas, newBolsista]);
  };

  const handleBolsistaDelete = (index: number) => {
    setBolsistasHasChanged(true);
    const updatedBolsistas = [...bolsistas];
    updatedBolsistas.splice(index, 1);
    setBolsistas(updatedBolsistas);
  };

  const handleBolsistaSave = () => {
    updateScholarshipMembers(bolsistas).then(() => {
      alert("Bolsistas salvos com sucesso!");
    });
    setBolsistasHasChanged(false);
  };

  const [allMembers, setAllMembers] = useState<OldMember[]>([]);
  const [oldMembersHasChanged, setOldMembersHasChanged] = useState(false);
  const { getOldMembers, updateOldMembers, oldMembersLoading } =
    useOldMembersStore((state) => ({
      getOldMembers: state.getOldMembers,
      updateOldMembers: state.updateOldMembers,
      oldMembersLoading: state.oldMembersLoading,
    }));

  useEffect(() => {
    getOldMembers().then((data) => setAllMembers(data));
  }, [getOldMembers]);

  const handleOldMemberChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
    index: number,
    field: keyof OldMember
  ) => {
    try {
      if (index < 0 || index >= allMembers.length || !allMembers[index]) return;
      setAllMembers((prev) =>
        prev.map((member, i) =>
          i === index ? { ...member, [field]: e.target.value } : member
        )
      );
      setOldMembersHasChanged(true);
    } catch (error) {
      alert("Erro ao alterar membro");
      console.error(error);
    }
  };

  const handleOldMemberAdd = () => {
    setOldMembersHasChanged(true);
    const newMember: OldMember = {
      name: "Novo Membro",
      imageUrl: "",
      job: "",
    };
    setAllMembers([...allMembers, newMember]);
  };

  const handleOldMemberDelete = (index: number) => {
    setOldMembersHasChanged(true);
    const updatedMembers = [...allMembers];
    updatedMembers.splice(index, 1);
    setAllMembers(updatedMembers);
  };

  const handleOldMemberSave = () => {
    updateOldMembers(allMembers).then(() => {
      alert("Membros salvos com sucesso!");
    });
    setOldMembersHasChanged(false);
  };

  return (
    <Box px={4} display="flex" flexDirection="column" gap={4}>
      <HeadingText align="left" text="Time" />
      {teamMembersLoading ? (
        <Spinner />
      ) : (
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Cargo</Th>
              <Th>Imagem</Th>
              <Th>Link</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {time.map((member, index) => (
              <Tr key={index}>
                <Td>
                  <Input
                    placeholder="Nome"
                    mb={2}
                    defaultValue={member.name}
                    onChange={(e) => handleTeamChange(e, index, "name")}
                  />
                </Td>
                <Td>
                  <Input
                    placeholder="Cargo"
                    mb={2}
                    defaultValue={member.job || ""}
                    onChange={(e) => handleTeamChange(e, index, "job")}
                  />
                </Td>
                <Td>
                  <Input
                    placeholder="Imagem"
                    mb={2}
                    defaultValue={member.imageUrl || ""}
                    onChange={(e) => handleTeamChange(e, index, "imageUrl")}
                  />
                </Td>
                <Td>
                  <Input
                    placeholder="Link"
                    mb={2}
                    defaultValue={member.href || ""}
                    onChange={(e) => handleTeamChange(e, index, "href")}
                  />
                </Td>
                <Td>
                  <DeleteButton onDelete={() => handleTeamDelete(index)} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      <Stack direction="row" spacing={4}>
        <Button
          variant={"outline"}
          leftIcon={<TbPlus />}
          onClick={handleTeamAdd}
          isDisabled={teamMembersLoading}
        >
          Adicionar Membro
        </Button>
        <Button
          colorScheme="blue"
          rightIcon={<BiSave />}
          onClick={handleTeamSave}
          isDisabled={!teamHasChanged || teamMembersLoading}
          isLoading={teamMembersLoading}
        >
          Salvar Membros
        </Button>
      </Stack>

      <HeadingText align="left" text="Bolsistas" />
      {scholarshipMembersLoading ? (
        <Spinner />
      ) : (
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Imagem</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {bolsistas.map((bolsista, index) => (
              <Tr key={index}>
                <Td>
                  <Input
                    placeholder="Nome"
                    mb={2}
                    defaultValue={bolsista.name}
                    onChange={(e) => handleBolsistaChange(e, index, "name")}
                  />
                </Td>

                <Td>
                  <Input
                    placeholder="Imagem"
                    mb={2}
                    defaultValue={bolsista.imageUrl}
                    onChange={(e) => handleBolsistaChange(e, index, "imageUrl")}
                  />
                </Td>
                <Td>
                  <DeleteButton onDelete={() => handleBolsistaDelete(index)} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      <Stack direction="row" spacing={4}>
        <Button
          variant={"outline"}
          leftIcon={<TbPlus />}
          onClick={handleBolsistaAdd}
          isDisabled={scholarshipMembersLoading}
        >
          Adicionar Bolsista
        </Button>
        <Button
          colorScheme="blue"
          rightIcon={<BiSave />}
          onClick={handleBolsistaSave}
          isDisabled={!bolsistasHasChanged || scholarshipMembersLoading}
          isLoading={scholarshipMembersLoading}
        >
          Salvar Bolsistas
        </Button>
      </Stack>

      <HeadingText align="left" text="Todos os Membros" />
      {oldMembersLoading ? (
        <Spinner />
      ) : (
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Cargo</Th>
              <Th>Imagem</Th>
              <Th>Ações</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allMembers.map((member, index) => (
              <Tr key={index}>
                <Td>
                  <Input
                    placeholder="Nome"
                    mb={2}
                    defaultValue={member.name}
                    onChange={(e) => handleOldMemberChange(e, index, "name")}
                  />
                </Td>
                <Td>
                  <Input
                    placeholder="Cargo"
                    mb={2}
                    defaultValue={member.job || ""}
                    onChange={(e) => handleOldMemberChange(e, index, "job")}
                  />
                </Td>
                <Td>
                  <Input
                    placeholder="Imagem"
                    mb={2}
                    defaultValue={member.imageUrl || ""}
                    onChange={(e) =>
                      handleOldMemberChange(e, index, "imageUrl")
                    }
                  />
                </Td>
                <Td>
                  <DeleteButton onDelete={() => handleOldMemberDelete(index)} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
      <Stack direction="row" spacing={4}>
        <Button
          variant={"outline"}
          leftIcon={<TbPlus />}
          onClick={handleOldMemberAdd}
          isDisabled={oldMembersLoading}
        >
          Adicionar Membro
        </Button>
        <Button
          colorScheme="blue"
          rightIcon={<BiSave />}
          onClick={handleOldMemberSave}
          isDisabled={oldMembersLoading || !oldMembersHasChanged}
          isLoading={oldMembersLoading}
        >
          Salvar Membros
        </Button>
      </Stack>
    </Box>
  );
};

export default Time;
