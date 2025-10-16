import { Form, Input, YStack, Button } from "tamagui";

import { joiResolver } from "@hookform/resolvers/joi";
import { useForm, useFormContext, FormProvider } from "react-hook-form";
import * as joi from "joi";

// form schema
const formSchema = joi.object({
  username: joi.string().required().min(2).label("Username"),
  password: joi.string().required().min(6).label("Password"),
});

// form view
const LoginForm = () => {
  const { handleSubmitCallback, handleSubmit } = useFormContext();

  return (
    <Form>
      <YStack gap="$5">
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button
          size="$3"
          themeInverse
          onPress={() =>
            handleSubmit((values) => handleSubmitCallback?.(values))()
          }
        >
          Login
        </Button>
      </YStack>
    </Form>
  );
};

export const FormScreen = () => {
  // -- form --
  const form = useForm({
    resolver: joiResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  const handleSubmitCallback = form.handleSubmit(({ username }) => {
    console.log(`Your username is ${username}`);
  });

  return (
    <YStack gap="$3" p="$4">
      <FormProvider {...form} handleSubmitCallback={handleSubmitCallback}>
        <LoginForm />
      </FormProvider>
    </YStack>
  );
};

export default FormScreen;
