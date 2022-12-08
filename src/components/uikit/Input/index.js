import * as React from "react";
import { TextInput } from "react-native";
import styled, { css, useTheme } from "styled-components/native";

import { th } from "~/components/Theme/styled";

export const StyledInput = styled(TextInput)`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 200px;
  padding: ${th.space(2)}px ${th.space(3)}px;
  color: ${th.color("white")};

  ${({ disabled }) => disabled && "opacity: 0.5;"}
  ${({ hasError }) =>
    hasError &&
    css`
      border-color: ${th.color("red")};
    `}
`;

export const Input = ({ placeholderTextColor = "gray", ...props }) => {
  const theme = useTheme();
  const color = th.color(placeholderTextColor)({ theme });
  return <StyledInput {...props} placeholderTextColor={color} />;
};
