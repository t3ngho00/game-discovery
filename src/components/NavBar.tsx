import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/steam-seeklogo.webp'
import { ColorModeButton } from './ui/color-mode'
import SearchInput from './SearchInput'

interface Props {
  onSearch: (searchText: string) => void
}

const NavBar = ({onSearch}: Props) => {
  return (
    <HStack justifyContent={"space-between"}>
        <Image src={logo} boxSize='60px' bgColor={"white"}/>
        <SearchInput onSearch={onSearch}></SearchInput>
        <ColorModeButton marginRight={"10px"}></ColorModeButton>
    </HStack>
  )
}

export default NavBar