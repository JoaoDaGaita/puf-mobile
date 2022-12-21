import * as React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";

import { Theme } from "~/components/Theme";
import { Login } from "./";
import "@testing-library/jest-native";

test("should validate and show error in email field on blur", async () => {
  const emailValue = "abc";

  const screen = render(
    <Theme>
      <Login />
    </Theme>
  );

  const emailInput = screen.getByText("E-mail");
  const passwordInput = screen.getByText("Senha");
  const submitBtn = screen.getByText("Entrar");

  fireEvent.changeText(emailInput, emailValue);
  fireEvent.changeText(passwordInput, "123");
  fireEvent.press(submitBtn);

  await waitFor(() =>
    expect(screen.findByText("E-mail inválido")).toBeTruthy()
  );
});

test("should validate and show error in password field on blud", async () => {
  const screen = render(
    <Theme>
      <Login />
    </Theme>
  );

  const passwordInput = screen.getByText("Senha");
  const submitBtn = screen.getByText("Entrar");

  fireEvent.changeText(passwordInput, "");
  fireEvent.press(submitBtn);
  //await waitFor(() => fireEvent.press(emailInput));

  await waitFor(() =>
    expect(screen.findByText("Digite uma senha")).toBeTruthy()
  );
});

test("should validate and show error in all form fields on submit", async () => {
  const screen = render(
    <Theme>
      <Login />
    </Theme>
  );

  const submitButton = screen.getByText("Entrar");

  await waitFor(() => fireEvent.press(submitButton));

  const emailError = screen.findByText("Informe o seu e-mail");
  const passwordError = screen.findByText("Digite uma senha");

  expect(emailError).toBeTruthy();
  expect(passwordError).toBeTruthy();
  expect(submitButton).toBeDisabled();
});

test("should re-enable form button and hide errors when form is valid", async () => {
  const emailValue = "joao@zam.com";
  const passwordValue = "123123";

  const screen = render(
    <Theme>
      <Login />
    </Theme>
  );
  const submitButton = screen.getByText("Entrar");
  const emailInput = screen.getByText("E-mail");
  const passwordInput = screen.getByText("Senha");

  await waitFor(() => fireEvent.press(submitButton));
  expect(submitButton).toBeDisabled();

  fireEvent.changeText(emailInput, emailValue);
  fireEvent.changeText(passwordInput, passwordValue);

  await waitFor(() => fireEvent.press(submitButton));

  expect(submitButton).toBeEnabled();
});
