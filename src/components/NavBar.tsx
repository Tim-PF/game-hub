import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image boxSize={20} src={logo}></Image>
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;
