"use client";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Spinner,
  Stack,
  Switch,
  Table,
  Textarea,
  Tooltip,
} from "@chakra-ui/react";
import Link from "next/link";
import { ChangeEvent, useEffect, useState } from "react";
import { BiSave } from "react-icons/bi";
import { TbPlus } from "react-icons/tb";
import {
  usePrimaryPageVideosStore,
  useSocialMediaPostsStore,
  useTestimonialsStore,
} from "app/states";
import { HeadingText } from "components";
import SocialMediaPost from "types/data/socialMediaPost";
import Testimonial from "types/data/testimonial";
import Video from "types/data/video";
import DeleteButton from "./DeleteButton";

const PaginaInicial = () => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [hasVideoChanged, setHasVideoChanged] = useState(false);
  const [hasTestimonialChanged, setHasTestimonialChanged] = useState(false);

  const { getTestimonials, updateTestimonials, testimonial_loading } =
    useTestimonialsStore((state) => ({
      getTestimonials: state.getTestimonials,
      updateTestimonials: state.updateTestimonials,
      testimonial_loading: state.testimonial_loading,
    }));

  const {
    getPrimaryPageVideos,
    updatePrimaryPageVideos,
    primaryPageVideosLoading,
  } = usePrimaryPageVideosStore((state) => ({
    getPrimaryPageVideos: state.getPrimaryPageVideos,
    updatePrimaryPageVideos: state.updatePrimaryPageVideos,
    primaryPageVideosLoading: state.primaryPageVideosLoading,
  }));

  useEffect(() => {
    getTestimonials().then((data) => setTestimonials(data));
  }, [getTestimonials]);

  useEffect(() => {
    getPrimaryPageVideos().then((data) => setVideos(data));
  }, [getPrimaryPageVideos]);

  const handleVideoChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    type: keyof Video
  ) => {
    try {
      if (index < 0 || index >= videos.length || !videos[index]) return;
      setVideos((prev) =>
        prev.map((video, i) =>
          i === index ? { ...video, [type]: e.target.value } : video
        )
      );
      setHasVideoChanged(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVideoDelete = (index: number) => {
    setHasVideoChanged(true);
    const newVideos = [...videos];
    newVideos.splice(index, 1);
    setVideos(newVideos);
  };

  const handleVideoAdd = () => {
    setHasVideoChanged(true);
    const newVideo: Video = {
      title: "Sem título",
      videoUrl: "",
    };
    setVideos([...videos, newVideo]);
  };

  const handleVideoSave = () => {
    videos.forEach((item) => {
      if (!item.title) {
        alert("Título do vídeo não pode ser vazio!");
        return;
      }
      if (!item.videoUrl) {
        alert("Embed do vídeo não pode ser vazio!");
        return;
      }
    });
    setHasVideoChanged(false);

    updatePrimaryPageVideos(videos).then(() => {
      alert("Vídeos salvos com sucesso!");
    });
  };

  const handleTestimonialChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    type: keyof Testimonial
  ) => {
    try {
      if (index < 0 || index >= testimonials.length || !testimonials[index])
        return;
      setTestimonials((prev) =>
        prev.map((testimonial, i) =>
          i === index ? { ...testimonial, [type]: e.target.value } : testimonial
        )
      );
      setHasTestimonialChanged(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTestimonialDelete = (index: number) => {
    setHasTestimonialChanged(true);
    const newTestimonials = [...testimonials];
    newTestimonials.splice(index, 1);
    setTestimonials(newTestimonials);
  };

  const handleTestimonialAdd = () => {
    setHasTestimonialChanged(true);
    const newTestimonial: Testimonial = {
      name: "Sem nome",
      sublegend: "",
      sublegendHref: "#",
      color: "pink",
      avatar: "",
      testimonial: "",
    };
    setTestimonials([...testimonials, newTestimonial]);
  };

  const handleTestimonialSave = () => {
    testimonials.forEach((item) => {
      if (!item.name) {
        alert("Nome do testemunho não pode ser vazio!");
        return;
      }
      if (!item.sublegend) {
        alert("Subtítulo do testemunho não pode ser vazio!");
        return;
      }
      if (!item.testimonial) {
        alert("Testemunho não pode ser vazio!");
        return;
      }
    });
    setHasTestimonialChanged(false);

    updateTestimonials(testimonials).then(() => {
      alert("Testemunhos salvos com sucesso!");
    });
  };

  const [socialMediaPosts, setSocialMediaPosts] = useState<SocialMediaPost[]>(
    []
  );
  const [hasSocialMediaPostsChanged, setHasSocialMediaPostsChanged] =
    useState(false);
  const {
    getSocialMediaPosts,
    updateSocialMediaPosts,
    socialMediaPostsLoading,
  } = useSocialMediaPostsStore((state) => ({
    getSocialMediaPosts: state.getSocialMediaPosts,
    updateSocialMediaPosts: state.updateSocialMediaPosts,
    socialMediaPostsLoading: state.socialMediaPostsLoading,
  }));

  useEffect(() => {
    getSocialMediaPosts().then((data) => setSocialMediaPosts(data));
  }, [getSocialMediaPosts]);

  const handleSocialMediaPostsChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index: number,
    type: keyof SocialMediaPost
  ) => {
    try {
      if (
        index < 0 ||
        index >= socialMediaPosts.length ||
        !socialMediaPosts[index]
      )
        return;
      setSocialMediaPosts((prev) =>
        prev.map((news, i) =>
          i === index ? { ...news, [type]: e.target.value } : news
        )
      );
      setHasSocialMediaPostsChanged(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSocialMediaPostsDelete = (index: number) => {
    setHasSocialMediaPostsChanged(true);
    const newSocialMediaPosts = [...socialMediaPosts];
    newSocialMediaPosts.splice(index, 1);
    setSocialMediaPosts(newSocialMediaPosts);
  };

  const handleSocialMediaPostsAdd = () => {
    setHasSocialMediaPostsChanged(true);
    const newSocialMediaPost: SocialMediaPost = {
      name: "",
      text: "Sem texto",
      imageUrl: "",
      href: "",
      socialMedia: "Instagram",
      date: new Date().toLocaleDateString("pt-BR"),
      showInTimeline: false,
      subname: "",
    };
    setSocialMediaPosts([...socialMediaPosts, newSocialMediaPost]);
  };

  const handleSocialMediaPostsSave = () => {
    socialMediaPosts.forEach((item) => {
      if (!item.name) {
        alert("Título do post não pode ser vazio!");
        return;
      }
      if (!item.text) {
        alert("Descrição do post não pode ser vazio!");
        return;
      }
      if (!item.imageUrl) {
        alert("Imagem do post não pode ser vazio!");
        return;
      }
      if (!item.socialMedia) {
        alert("Tipo de rede social não pode ser vazio!");
        return;
      }
      if (!item.subname) {
        alert("Subtítulo do post não pode ser vazio!");
        return;
      }
    });
    updateSocialMediaPosts(socialMediaPosts).then(() => {
      alert("Posts de redes sociais salvos com sucesso!");
    });
    setHasSocialMediaPostsChanged(false);
  };

  return (
    <Box px={4} display="flex" flexDirection="column">
      <HeadingText align="left" text="Vídeos" />
      {primaryPageVideosLoading ? (
        <Spinner mx="auto" />
      ) : (
        <Table variant="simple">
          <thead>
            <tr>
              <th>Título</th>
              <th>
                <Tooltip
                  label="Para adicionar um vídeo, copie o EMBED do vídeo do YouTube e cole aqui"
                  aria-label="A tooltip"
                  placement="top"
                >
                  <Link
                    href="https://ajuda.glassdoor.com.br/s/article/Como-encontrar-o-codigo-de-incorporacao-no-Youtube?language=pt_BR"
                    passHref
                    target="_blank"
                    className="cursor-pointer hover:text-blue-500 hover:underline"
                  >
                    Embed do Vídeo
                  </Link>
                </Tooltip>
              </th>
              <th className="w-16">Deletar</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((item, index) => (
              <tr key={index}>
                <td>
                  <Input
                    defaultValue={item.title}
                    onChange={(e) => handleVideoChange(e, index, "title")}
                    placeholder="Título"
                    variant="filled"
                  />
                </td>
                <td>
                  <Input
                    defaultValue={item.videoUrl}
                    onChange={(e) => handleVideoChange(e, index, "videoUrl")}
                    placeholder="Embed do Vídeo"
                    variant="filled"
                  />
                </td>
                <td className="flex w-full justify-center">
                  <DeleteButton onDelete={() => handleVideoDelete(index)} />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
      <Stack direction="row" spacing={4} justifyContent="between">
        <Button
          variant={"outline"}
          leftIcon={<TbPlus />}
          onClick={handleVideoAdd}
          isDisabled={primaryPageVideosLoading}
        >
          Adicionar Vídeo
        </Button>
        <Button
          colorScheme="blue"
          rightIcon={<BiSave />}
          onClick={handleVideoSave}
          isDisabled={!hasVideoChanged}
        >
          Salvar Vídeos
        </Button>
      </Stack>

      <HeadingText align="left" text="Testemunhos" />
      {testimonial_loading ? (
        <Spinner mx="auto" />
      ) : (
        <Accordion
          border={"1px solid"}
          borderColor={"red.400"}
          borderRadius={"md"}
          allowToggle
        >
          {testimonials.map((item, index) => (
            <AccordionItem key={index}>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    {item.name}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel
                pb={4}
                display="flex"
                flexDirection="column"
                gap={2}
              >
                <FormControl>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    defaultValue={item.name}
                    onChange={(e) => handleTestimonialChange(e, index, "name")}
                    placeholder="Nome"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Subtítulo</FormLabel>
                  <Input
                    defaultValue={item.sublegend}
                    onChange={(e) =>
                      handleTestimonialChange(e, index, "sublegend")
                    }
                    placeholder="Subtítulo"
                    variant="filled"
                    mb={2}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Link do Subtítulo</FormLabel>
                  <Input
                    defaultValue={item.sublegendHref}
                    onChange={(e) =>
                      handleTestimonialChange(e, index, "sublegendHref")
                    }
                    placeholder="Link do Subtítulo"
                    variant="filled"
                    mb={2}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Cor</FormLabel>
                  <Input
                    defaultValue={item.color}
                    onChange={(e) => handleTestimonialChange(e, index, "color")}
                    placeholder="Cor"
                    variant="filled"
                    mb={2}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Avatar</FormLabel>
                  <Input
                    defaultValue={item.avatar || ""}
                    onChange={(e) =>
                      handleTestimonialChange(e, index, "avatar")
                    }
                    placeholder="Avatar"
                    variant="filled"
                    mb={2}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Testemunho</FormLabel>
                  <Textarea
                    defaultValue={item.testimonial}
                    onChange={(e) =>
                      handleTestimonialChange(e, index, "testimonial")
                    }
                    placeholder="Testemunho"
                    rows={4}
                    h="auto"
                    variant="filled"
                  />
                </FormControl>
                <FormControl
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <DeleteButton
                    onDelete={() => handleTestimonialDelete(index)}
                  />
                </FormControl>
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      )}
      <Stack direction="row" spacing={4}>
        <Button
          variant={"outline"}
          leftIcon={<TbPlus />}
          onClick={handleTestimonialAdd}
          isDisabled={testimonial_loading}
        >
          Adicionar Testemunho
        </Button>
        <Button
          colorScheme="blue"
          rightIcon={<BiSave />}
          onClick={handleTestimonialSave}
          isDisabled={!hasTestimonialChanged}
          isLoading={testimonial_loading}
        >
          Salvar Testemunhos
        </Button>
      </Stack>

      <HeadingText align="left" text="Posts de Redes Sociais" />
      {socialMediaPostsLoading ? (
        <Spinner mx="auto" />
      ) : (
        <Box>
          <Accordion
            border={"1px solid"}
            borderColor={"red.400"}
            borderRadius={"md"}
            allowToggle
          >
            {socialMediaPosts.map((item, index) => (
              <AccordionItem key={index}>
                <h2>
                  <AccordionButton>
                    <Box
                      flex="1"
                      textAlign="left"
                      textOverflow={"ellipsis"}
                      overflow={"hidden"}
                      whiteSpace={"nowrap"}
                    >
                      <strong>{item.socialMedia}</strong> | {item.text}
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  pb={4}
                  display="flex"
                  flexDirection="column"
                  gap={2}
                >
                  <FormControl>
                    <FormLabel>Nome da conta</FormLabel>
                    <Input
                      defaultValue={item.name}
                      onChange={(e) =>
                        handleSocialMediaPostsChange(e, index, "name")
                      }
                      placeholder="Nome"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Subtítulo</FormLabel>
                    <Input
                      defaultValue={item.subname}
                      onChange={(e) =>
                        handleSocialMediaPostsChange(e, index, "subname")
                      }
                      placeholder="Subtítulo"
                      variant="filled"
                      mb={2}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Imagem</FormLabel>
                    <Input
                      defaultValue={item.imageUrl}
                      onChange={(e) =>
                        handleSocialMediaPostsChange(e, index, "imageUrl")
                      }
                      placeholder="Imagem"
                      variant="filled"
                      mb={2}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Link</FormLabel>
                    <Input
                      defaultValue={item.href}
                      onChange={(e) =>
                        handleSocialMediaPostsChange(e, index, "href")
                      }
                      placeholder="Link"
                      variant="filled"
                      mb={2}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Rede Social</FormLabel>
                    <Input
                      defaultValue={item.socialMedia}
                      onChange={(e) =>
                        handleSocialMediaPostsChange(e, index, "socialMedia")
                      }
                      placeholder="Rede Social"
                      variant="filled"
                      mb={2}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Data</FormLabel>
                    <Input
                      defaultValue={item.date}
                      onChange={(e) =>
                        handleSocialMediaPostsChange(e, index, "date")
                      }
                      placeholder="Data"
                      variant="filled"
                      mb={2}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Texto</FormLabel>
                    <Textarea
                      defaultValue={item.text}
                      onChange={(e) =>
                        handleSocialMediaPostsChange(e, index, "text")
                      }
                      placeholder="Texto"
                      rows={4}
                      h="auto"
                      variant="filled"
                    />
                  </FormControl>
                  <FormControl
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <FormLabel>Mostrar na Timeline</FormLabel>
                    <Switch
                      isChecked={item.showInTimeline}
                      onChange={(e) =>
                        handleSocialMediaPostsChange(e, index, "showInTimeline")
                      }
                    />
                  </FormControl>
                  <DeleteButton
                    onDelete={() => handleSocialMediaPostsDelete(index)}
                  />
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </Box>
      )}
      <Stack direction="row" spacing={4}>
        <Button
          variant={"outline"}
          leftIcon={<TbPlus />}
          onClick={handleSocialMediaPostsAdd}
          isDisabled={socialMediaPostsLoading}
        >
          Adicionar Post
        </Button>
        <Button
          colorScheme="blue"
          rightIcon={<BiSave />}
          onClick={handleSocialMediaPostsSave}
          isDisabled={!hasSocialMediaPostsChanged}
          isLoading={socialMediaPostsLoading}
        >
          Salvar Posts
        </Button>
      </Stack>
    </Box>
  );
};

export default PaginaInicial;
