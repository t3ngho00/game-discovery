import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid minChildWidth="sm" gap="20px" padding={"10px"}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
