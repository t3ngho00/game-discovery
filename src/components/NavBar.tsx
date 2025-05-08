import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/reshot-icon-gaming-console-H4K2SAUZGE.svg";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} margin={{ base: 5, md: 3 }}>
      <Image src={logo} boxSize="60px" bgColor={"white"} borderRadius="50%" />
      <SearchInput></SearchInput>
      <ColorModeButton marginRight={"10px"}></ColorModeButton>
    </HStack>
  );
};

export default NavBar;
