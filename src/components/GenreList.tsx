import { HStack, Image, List, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
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
            <Text fontSize={'lg'}>{genre.name}</Text>
          </HStack>
        </List.Item>
      ))}
    </List.Root>
  );
};

export default GenreList;
