import { create } from "zustand";

interface GameQuery {
  platformId?: number;
  genreId?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setPlatformId: (platformId: number) => void;
  setGenreId: (genreId: number) => void;
  setOrder: (sortOrder: string) => void;
  setSearchText: (searchText: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  setPlatformId: (platformId: number) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  setGenreId: (genreId: number) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
  setOrder: (sortOrder: string) =>
    set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
  setSearchText: (searchText: string) =>
    set(() => ({ gameQuery: { searchText } })),
}));

export default useGameQueryStore;
