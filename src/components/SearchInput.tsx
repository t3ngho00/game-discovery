import { InputGroup } from './ui/input-group'
import { LuSearch } from 'react-icons/lu'
import { Input } from '@chakra-ui/react'
import { useRef } from 'react'

interface Props {
    onSearch: (searchText: string) => void
}
const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null)
  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value)
    }}>
      <InputGroup flex="1" width="100%" startElement={<LuSearch />}>
        <Input ref={ref} placeholder="Search games" borderRadius={20} />
      </InputGroup>
    </form>
  )
}

export default SearchInput