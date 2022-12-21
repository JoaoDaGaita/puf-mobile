import * as React from "react";

import { StatusBar } from "react-native";
import { useAuth } from "~/components/modules/Auth";
import { Box, SafeArea, Logo, Text } from "~/components/";
import { Form } from "./Form";
import { login } from "../../services/sdk";

const Screen = ({
  bg = "raisinBlack",
  barStyle = "light-content",
  children,
  ...props
}) => (
  <SafeArea bg={bg} flex={1}>
    <StatusBar barStyle={barStyle} />
    <Box {...props} bg={bg} flex={1}>
      {children}
    </Box>
  </SafeArea>
);

export const Login = () => {
  const [, { login: setAuth }] = useAuth();

  const onSubmit = async (values) => {
    try {
      const data = await login(values);
      setAuth(data);
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <Screen p={3} justifyContent="center">
      <Logo flex={1} />
      <Box flex={1}>
        <Text fontSize={6} textAlign="center">
          Login
        </Text>
        <Form onSubmit={onSubmit} />
      </Box>

      <Box flex={1} />
    </Screen>
  );
};
