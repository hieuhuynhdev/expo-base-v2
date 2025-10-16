import { useFormContext, Controller } from "react-hook-form";
import { Input } from "tamagui";

// shared
import { FormErrorMessage } from "@/forms/components/FormErrorMessage";
import { FormLabel } from "@/forms/components/FormLabel";

export const InputField = ({ className, name, inputProps, label }) => {
  const { control, handleSubmit, handleSubmitCallback } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
        <div className={className}>
          {/* label */}
          {label && <FormLabel error={error}>{label}</FormLabel>}

          {/* input */}
          <Input
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
        </div>
      )}
    />
  );
};

export default InputField;
