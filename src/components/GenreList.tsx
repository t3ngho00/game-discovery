import { Heading, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../GameStore";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  if (error) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List.Root listStyleType={"none"}>
        {data?.results.map((genre) => (
          <List.Item key={genre.id} paddingY={2}>
            <HStack>
              <Image
                src={genre.image_background}
                boxSize={"32px"}
                borderRadius={"2px"}
                objectFit={"cover"}
              />
              <Link
                fontWeight={genre.id == selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize={"lg"}
              >
                {genre.name}
              </Link>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
