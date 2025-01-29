import { Button } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import {
    MenuContent,
    MenuItem,
    MenuRoot,
    MenuTrigger,
  } from "../components/ui/menu";
const SortSelector = () => {
  return (
    <MenuRoot>
      <MenuTrigger asChild>
        <Button variant="outline" size="sm">
          Order by: Relevance
          <BsChevronDown />
        </Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="relevance">Relevance</MenuItem>
        <MenuItem value="dayAdded">Day added</MenuItem>
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="releaseDate">Release date</MenuItem>
        <MenuItem value="popularity">Popularity</MenuItem>
        <MenuItem value="averageRating">Average rating</MenuItem>
      </MenuContent>
    </MenuRoot>
  );
};

export default SortSelector;
