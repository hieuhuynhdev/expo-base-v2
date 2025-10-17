import { Text } from "tamagui";

const FormErrorMessage = ({ message }) => {
  return (
    <Text color="$red10" marginTop="$2">
      {message}
    </Text>
  );
};

export { FormErrorMessage };
