import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ErrorPage from "./ErrorPage";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isError, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (!game || isError) return <ErrorPage />;
  return (
    <>
   
        <Heading>{game.name}</Heading>
        <Text>{game.description_raw}</Text>
    </>
  );
};

export default GameDetailPage;
