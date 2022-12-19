import * as React from "react";

import { StatusBar } from "react-native";
import { useAuth } from "~/components/modules/Auth";
import { Box, SafeArea, Logo, Text } from "~/components/";
import { Form } from "./Form";

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

  const onSubmit = (values) => {
    console.log(values);
    setAuth({
      token: 123,
      user: values,
    });
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
