import { InputGroup } from './ui/input-group'
import { LuSearch } from 'react-icons/lu'
import { Input } from '@chakra-ui/react'
import { useRef } from 'react'
import useGameQueryStore from '../GameStore'

const SearchInput = () => {
    const ref = useRef<HTMLInputElement>(null)
    const setSearchText = useGameQueryStore(s => s.setSearchText);
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchText(ref.current.value)
    }}>
      <InputGroup flex="1" width="100%" startElement={<LuSearch />}>
        <Input ref={ref} placeholder="Search games" borderRadius={20} />
      </InputGroup>
    </form>
  )
}

export default SearchInput