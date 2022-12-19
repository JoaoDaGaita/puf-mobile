import * as React from "react";

import { Theme } from "~/components/Theme";
import { AuthProvider } from "./components/modules";
import { App } from "./pages";

export const Main = () => {
  return (
    <Theme>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Theme>
  );
};
