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
        <GridItem gridArea={"aside"} bg={"gold"}>
          {" "}
          Aside
        </GridItem>
      </Show>

      <GridItem gridArea={"main"} bg={"green"}>
        {" "}
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
