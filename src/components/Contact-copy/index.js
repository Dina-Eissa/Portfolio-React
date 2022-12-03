/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Textarea,
} from "@chakra-ui/react";
import CSSReset from "@chakra-ui/css-reset";
import { Form, Field, useField } from "react-final-form";
import validate from "../../utils/helpers";
import { validateEmail } from "../../utils/helpers";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const Contact = () => (
  <>
    <CSSReset />
    <Box w={500} p={4} m="20px auto">
      <Form
        onSubmit={onSubmit}
        validateEmail={validateEmail}
        validate={validate}
        render={({
          handleSubmit,
          form,
          errors,
          submitting,
          pristine,
          values,
          email,
        }) => (
          <Box
            as="form"
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="1px 1px 3px rgba(0,0,0,0.3)"
            onSubmit={handleSubmit}
          >
            {/* 
            This example uses a mixture of custom field components using useField() 
            and components adapted to take the { input, meta } structure <Field/>
            provides
            */}
            <InputControl name="name" label="Name" />
            <InputControl name="email" type="email" label="email" />

            <TextareaControl name="message" label="message" />
            <ButtonGroup spacing={4}>
              <Button
                isLoading={submitting}
                loadingText="Submitting"
                variantColor="teal"
                type="submit"
              >
                Submit
              </Button>
            </ButtonGroup>
          </Box>
        )}
      />
    </Box>
  </>
);

const AdaptedTextarea = ({ input, meta, ...rest }) => (
  <Textarea {...input} {...rest} isInvalid={meta.error && meta.touched} />
);

const Control = ({ name, ...rest }) => {
  const {
    meta: { error, touched },
  } = useField(name, { subscription: { touched: true, error: true } });
  return <FormControl {...rest} isInvalid={error && touched} />;
};

const Error = ({ name }) => {
  const {
    meta: { error },
  } = useField(name, { subscription: { error: true } });
  return <FormErrorMessage>{error}</FormErrorMessage>;
};

const InputControl = ({ name, label }) => {
  const { input, meta } = useField(name);
  return (
    <Control name={name} my={4}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <Input
        {...input}
        isInvalid={meta.error && meta.touched}
        id={name}
        placeholder={label}
      />
      <Error name={name} />
    </Control>
  );
};

const TextareaControl = ({ name, label }) => (
  <Control name={name} my={4}>
    <FormLabel htmlFor={name}>{label}</FormLabel>
    <Field
      name={name}
      component={AdaptedTextarea}
      placeholder={label}
      id={name}
    />
    <Error name={name} />
  </Control>
);

export default Contact;
