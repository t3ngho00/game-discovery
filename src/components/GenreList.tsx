import { Button, HStack, Image, Link, List, Spinner, Text } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({onSelectGenre, selectedGenre}: Props) => {
  const { data, isLoading, error } = useGenres();
  if (error) return null  
  if (isLoading) return <Spinner></Spinner>
  return (
    <List.Root listStyleType={"none"}>
      {data.map((genre) => (
        <List.Item key={genre.id} paddingY={2}>
          <HStack>
            <Image
              src={genre.image_background}
              boxSize={"32px"}
              borderRadius={"2px"}
            />
            <Link fontWeight={genre.id == selectedGenre?.id ? 'bold' : 'normal' } onClick={() => onSelectGenre(genre)} fontSize={'lg'}>{genre.name}</Link>
          </HStack> 
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
