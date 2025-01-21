import { Game } from "../hooks/useGame";
import { Card, Heading, Image } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card.Root borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <Card.Body>
        <Heading>{game.name}</Heading>
        <PlatFormIconList platforms={game.parent_platforms.map(p => p.platform)} />
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
