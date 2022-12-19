import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Login } from "./Login";
import { Dashboard } from "./Dashboard";

const Stack = createNativeStackNavigator();

const AuthStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerShown: false,
    }}
  >
    <Stack.Screen name="/login" component={Login} />
  </Stack.Navigator>
);
const LoggedInStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: "center",
      headerShown: false,
    }}
  >
    <Stack.Screen name="/dash" component={Dashboard} />
  </Stack.Navigator>
);

export const App = () => {
  const [auth] = [{ user: false }];
  return (
    <NavigationContainer>
      {auth?.user ? <LoggedInStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
