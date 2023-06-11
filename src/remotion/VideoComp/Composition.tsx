import { AbsoluteFill } from "remotion";
import { VideoCompProps } from "../../types/VideoComp";
import { Logo } from "./Logo";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";

export const VideoComposition = ({
  title,
  subtitle,
  backgroundColor,
}: VideoCompProps) => {
  return (
    <AbsoluteFill
      className="bg-gray-100 items-center justify-center"
      style={{ backgroundColor }}
    >
      <Logo />
      <Title title={title} />
      <Subtitle subtitle={subtitle} />
    </AbsoluteFill>
  );
};
