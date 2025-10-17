import { joiResolver } from "@hookform/resolvers/joi";
import * as joi from "joi";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { Button, Form, YStack } from "tamagui";

// forms
import InputField from "@/forms/fields/InputField";

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
        <YStack>
          {/* username */}
          <InputField
            name="username"
            label="Username"
            inputProps={{ placeholder: "Username" }}
          />

          {/* password */}
          <InputField
            name="password"
            label="Password"
            inputProps={{ placeholder: "Password" }}
          />
        </YStack>

        {/* submit button */}
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
