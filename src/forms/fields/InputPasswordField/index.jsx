import { Eye, EyeOff } from "@tamagui/lucide-icons";
import { useId, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Button, Input, XStack, YStack } from "tamagui";

// shared
import { FormErrorMessage } from "@/forms/components/FormErrorMessage";
import { FormLabel } from "@/forms/components/FormLabel";

export const InputPasswordField = ({ name, inputProps, label }) => {
  // -- input id --
  const uuid = useId();
  const inputId = `${name}-${uuid}`;

  // -- states --
  const [showPassword, setShowPassword] = useState(false);

  // -- form --
  const { control, handleSubmit, handleSubmitCallback } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <YStack>
          {label && (
            <FormLabel htmlFor={inputId} error={error}>
              {label}
            </FormLabel>
          )}

          <XStack alignItems="center" gap="$2">
            <Input
              id={inputId}
              ref={ref}
              value={value}
              onChangeText={onChange}
              onSubmitEditing={() =>
                handleSubmit((values) => handleSubmitCallback?.(values))()
              }
              {...inputProps}
              secureTextEntry={!showPassword}
              flex={1}
            />
            <Button
              onPress={() => setShowPassword((prev) => !prev)}
              icon={showPassword ? <EyeOff /> : <Eye />}
            />
          </XStack>

          {error && <FormErrorMessage message={error.message ?? ""} />}
        </YStack>
      )}
    />
  );
};

export default InputPasswordField;
