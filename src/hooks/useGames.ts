import { useInfiniteQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatforms";
import useGameQueryStore from "../GameStore";

export interface Game {
  name: string;
  id: number;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  slug: string;
  description_raw: string;
}
const apiClient = new APIClient<Game>("/games");
const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
}
  
export default useGames;
