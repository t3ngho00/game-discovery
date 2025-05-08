import { Game } from "../hooks/useGames";
import { Card, Heading, HStack, Image } from "@chakra-ui/react";
import PlatFormIconList from "./PlatFormIconList";
import CriticScore from "./CriticScore";
import { Link } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card.Root>
      <Image
        src={
          game.background_image
            ? game.background_image
            : "https://placehold.co/540x303"
        }
      ></Image>
      <Card.Body>
        <Heading><Link to={`/games/${game.slug}`}>{game.name}</Link></Heading>
        <HStack justifyContent={"space-between"}>
          <PlatFormIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
