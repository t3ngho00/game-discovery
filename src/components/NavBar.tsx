import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/steam-seeklogo.webp'
import { ColorModeButton } from './ui/color-mode'
const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"}>
        <Image src={logo} boxSize='60px' bgColor={"white"}/>
        <ColorModeButton marginRight={"10px"}></ColorModeButton>
    </HStack>
  )
}

export default NavBar