import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../GameStore";


const GameHeading = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  const genre = useGenre(gameQuery.genreId)
  const platform = usePlatform(gameQuery.platformId);
  const heading = `${platform?.name || ""} ${
    genre?.name || ""
  } Games`;
  return (
    <Heading as={"h1"} fontSize={"5xl"} marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
