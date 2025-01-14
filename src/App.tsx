import { Button, GridItem, Show } from '@chakra-ui/react'
import { Grid } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import GameGrid from './components/GameGrid'

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
       <GridItem area={"nav"}>
        <NavBar></NavBar>
       </GridItem>
       <GridItem area={"aside"} bg="orange" hideBelow={"lg"}>Aside</GridItem>
       <GridItem area={"main"} bg="violet"><GameGrid/></GridItem>
    </Grid>
   
  )
}

export default App
