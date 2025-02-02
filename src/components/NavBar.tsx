import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/reshot-icon-gaming-console-H4K2SAUZGE.svg";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} marginY={3}>
      <Image src={logo} boxSize="60px" bgColor={"white"} borderRadius="50%" />
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeButton marginRight={"10px"}></ColorModeButton>
    </HStack>
  );
};

export default NavBar;
