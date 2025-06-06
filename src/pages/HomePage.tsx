import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'
import { Grid, GridItem, Box, HStack } from '@chakra-ui/react'

const HomePage = () => {
  return (
    <Grid
    templateAreas={{
      base: `"main"`,
      lg: `"aside main"`,
    }}
    templateColumns={{
      base: "1fr",
      lg: "250px 1fr",
    }}
  >
    <GridItem area={"aside"} hideBelow={"lg"} paddingX={5}>
      <GenreList />
    </GridItem>
    <GridItem area={"main"}>
      <Box paddingLeft={2}>
        <GameHeading></GameHeading>
        <HStack marginBottom={5}>
          <PlatformSelector />

          <SortSelector />
        </HStack>
      </Box>
      <GameGrid />
    </GridItem>
  </Grid>
  )
}

export default HomePage