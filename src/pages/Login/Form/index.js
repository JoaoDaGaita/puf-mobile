import * as React from "react";
import * as yup from "yup";
import { useFormik } from "formik";

import { View, Text } from "react-native";

const validationSchema = yup.object().shape({
  userName: yup
    .string()
    .required("Informe o seu e-mmail")
    .email("E-mail inválido"),
  password: yup.string().required("Digite uma senha"),
});

export const Form = ({ onSubmit }) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    isValid,
  } = useFormik({
    onSubmit,
    validationSchema,
    initialValues: {
      username: "",
      password: "",
    },
  });

  return (
    <View>
      <Text>adasdasd</Text>
    </View>
  );
};
