import { Grid, GridItem, Show, Hide } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // 1024 px
      }}
    >
      <GridItem gridArea={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem gridArea={"aside"}> Aside</GridItem>
      </Show>

      <GridItem gridArea={"main"}> Main</GridItem>
    </Grid>
  );
}

export default App;
