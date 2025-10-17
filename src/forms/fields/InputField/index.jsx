import { useId } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Input, YStack } from "tamagui";

// shared
import { FormErrorMessage } from "@/forms/components/FormErrorMessage";
import { FormLabel } from "@/forms/components/FormLabel";

export const InputField = ({ name, inputProps, label }) => {
  // -- input id --
  const uuid = useId();
  const inputId = `${name}-${uuid}`;

  // -- form --
  const { control, handleSubmit, handleSubmitCallback } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <YStack>
          {/* label */}
          {label && (
            <FormLabel htmlFor={inputId} error={error}>
              {label}
            </FormLabel>
          )}

          {/* input */}
          <Input
            id={inputId}
            ref={ref}
            value={value}
            onChangeText={onChange}
            onSubmitEditing={() =>
              handleSubmit((values) => handleSubmitCallback?.(values))()
            }
            {...inputProps}
          />

          {/* error */}
          {error && <FormErrorMessage message={error.message ?? ""} />}
        </YStack>
      )}
    />
  );
};

export default InputField;
