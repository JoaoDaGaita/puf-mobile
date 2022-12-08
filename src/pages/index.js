import * as React from "react";

import { StatusBar } from "react-native";
import { Box, SafeArea, Field, Button, Text } from "~/components/";

const Screen = ({
  bg = "raisinBlack",
  barStyle = "light-content",
  children,
}) => (
  <SafeArea bg={bg} flex={1}>
    <StatusBar barStyle={barStyle} />
    <Box bg={bg} flex={1}>
      {children}
    </Box>
  </SafeArea>
);

export const App = () => (
  <Screen>
    <Field
      type="text"
      name="username"
      label="E-mail"
      placeholder="Digite o seu e-mail"
      m={3}
    />
    <Box flexbox="column" center>
      <Button m={1} label="Entrar"></Button>
    </Box>
  </Screen>
);
