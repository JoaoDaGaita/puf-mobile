import * as React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import "@testing-library/jest-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Theme } from "~/components/Theme";
import { AuthProvider } from "~/components/modules";

import { App } from "./";
import axios from "axios";

jest.mock("axios");

beforeEach(async () => {
  await AsyncStorage.clear();
});

test("should show login form", async () => {
  const screen = render(
    <Theme>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Theme>
  );

  await waitFor(() => {
    const emailInput = screen.getByText("E-mail");
    const passwordInput = screen.getByText("Senha");
    const submitBtn = screen.getByText("Entrar");
    const signupLink = screen.getByText("Cadastre-se!");

    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(submitBtn).toBeTruthy();
    expect(signupLink).toBeTruthy();
  });
});

test("should login user and redirect when API returns success", async () => {
  const credentials = {
    email: "123@123.com",
    password: "123123",
  };

  const responseData = {
    user: {
      id: 1,
      name: "qwe",
      email: credentials.email,
    },
    token: "123",
  };

  axios.get.mockImplementation(() =>
    Promise.resolve({
      data: {
        user: {
          id: 1,
          name: "qwe",
          email: credentials.email,
        },
        token: "123",
      },
    })
  );

  const screen = render(
    <Theme>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Theme>
  );

  await waitFor(() => {
    const emailInput = screen.getByText("E-mail");
    const passwordInput = screen.getByText("Senha");
    const submitBtn = screen.getByText("Entrar");

    fireEvent.changeText(emailInput, credentials.email);
    fireEvent.changeText(passwordInput, credentials.password);
    fireEvent.press(submitBtn);
    expect(submitBtn).toBeDisabled();
  });

  await waitFor(() => {
    expect(axios.get).toHaveBeenCalledWith("http://localhost:9901/login", {
      auth: { password: credentials.password, username: credentials.email },
    });
  });
  const userName = screen.getByText("Olá");
  expect(userName).toBeTruthy();
});

test("should not redirect user when API returns error", async () => {
  const credentials = {
    email: "123@123.com",
    password: "123123",
  };

  axios.get.mockImplementation(() =>
    Promise.reject({
      data: {},
    })
  );

  const screen = render(
    <Theme>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Theme>
  );

  const emailInput = screen.getByText("E-mail");
  const passwordInput = screen.getByText("Senha");
  const submitBtn = screen.getByText("Entrar");

  fireEvent.changeText(emailInput, credentials.email);
  fireEvent.changeText(passwordInput, credentials.password);
  fireEvent.press(submitBtn);

  expect(submitBtn).toBeDisabled();

  await waitFor(() => {
    expect(axios.get).toHaveBeenCalledWith("http://localhost:9901/login", {
      auth: { password: credentials.password, username: credentials.email },
    });
  });

  expect(submitBtn).toBeEnabled();
});
