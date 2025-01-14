import { Button, GridItem, Show } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
       <GridItem area={"nav"} bg={"coral"}>nav</GridItem>
       <GridItem area={"aside"} bg="orange" hideBelow={"lg"}>Aside</GridItem>
       
       <GridItem area={"main"} bg="violet">Main</GridItem>
    </Grid>
   
  )
}

export default App
