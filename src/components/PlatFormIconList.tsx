import { HStack } from "@chakra-ui/react";
import { Platform } from "@/entities/Platform";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => {
        const Icon = iconMap[platform.slug];
        return Icon ? <Icon key={platform.id} /> : null;
      })}
    </HStack>
  );
};

export default PlatformIconList;
