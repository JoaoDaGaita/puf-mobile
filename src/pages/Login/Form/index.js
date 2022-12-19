import * as React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Field, Box, Button, Text } from "~/components/";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Informe o seu e-mmail")
    .email("E-mail inválido"),
  password: yup.string().required("Digite uma senha"),
});

export const Form = ({ onSubmit, onSignupPress }) => {
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
    <>
      <Field
        type="text"
        label="E-mail"
        placeholder="Digite o seu e-mail"
        value={values.username}
        error={touched.username && errors.username}
        onChangeText={handleChange("username")}
        onBlur={handleBlur("username")}
        disabled={isSubmitting}
        mb={3}
      />
      <Field
        type="password"
        label="Senha"
        placeholder="Digite a sua senha"
        value={values.password}
        error={touched.password && errors.password}
        onChangeText={handleChange("password")}
        onBlur={handleBlur("password")}
        disabled={isSubmitting}
        mb={3}
      />
      <Box center>
        <Button
          label="Entrar"
          loading={isSubmitting}
          disabled={!isValid}
          onPress={handleSubmit}
          m={1}
        />
        <Box m={1} fontSize={1}>
          <Text>
            Não possui cadastro?{" "}
            <Text
              to="/signup"
              color="gray"
              fontWeight="bold"
              onPress={onSignupPress}
            >
              Cadastre-se!
            </Text>
          </Text>
        </Box>
      </Box>
    </>
  );
};
