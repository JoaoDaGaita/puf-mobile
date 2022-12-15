import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Theme } from "~/components/Theme";
import { App } from "./pages";

const Stack = createNativeStackNavigator();

export const Main = () => {
  return (
    <Theme>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="/login"
            component={App}
            options={{
              headerTitleAlign: "center",
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Theme>
  );
};
