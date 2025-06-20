import { Reveal } from "components";

interface YoutubeEmbedProps {
  embedId: string;
  loading?: "eager" | "lazy";
  allowFullScreen?: boolean;
  title?: string;
  className?: string;
  style?: string;
  width?: number | string;
  height?: number | string;
}

const YoutubeEmbed = ({
  embedId,
  loading,
  allowFullScreen,
  title,
  className,
  style,
  width,
  height,
}: YoutubeEmbedProps) => (
  <Reveal>
    <iframe
      width={width ? width : "600"}
      height={height ? height : "400"}
      loading={loading ? loading : "lazy"}
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
      title={title ? title : "Embedded youtube"}
      {...(allowFullScreen && { allowFullScreen: true })}
      {...(className && { className: className })}
      {...(style && { className: style })}
    />
  </Reveal>
);

export default YoutubeEmbed;
