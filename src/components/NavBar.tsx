import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding={10}>
      <Image boxSize={20} src={logo}></Image>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
