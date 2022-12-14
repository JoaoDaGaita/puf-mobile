import * as React from "react";
import styled from "styled-components/native";

import { th } from "~/components/Theme";

import { Box } from "~/components/uikit/Box";
import { Label } from "~/components/uikit/Label";
import { Input } from "~/components/uikit/Input";

const ErrorMessage = styled(Box)`
  color: ${th.color("red")};
  padding: ${th.space(1)}px ${th.space(3)}px;
  font-size: ${th.size(2)}px;
`;

export const Field = ({
  textContentType,
  label,
  error,
  placeholder,
  placeholderTextColor,
  value,
  disabled,
  onChangeText,
  onBlur,
  ...props
}) => (
  <Box {...props}>
    <Label>{label}</Label>
    <Input
      textContextType={textContentType}
      placeholderTextColor={placeholderTextColor}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      onChangeText={onChangeText}
      onBlur={onBlur}
      hasError={!!error}
    />
    {error && <ErrorMessage>{error}</ErrorMessage>}
  </Box>
);
