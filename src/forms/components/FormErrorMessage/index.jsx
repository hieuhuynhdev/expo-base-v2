import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";

const FormErrorMessage = ({ message }) => {
  return (
    <Animated.Text
      entering={FadeInDown}
      exiting={FadeOut.duration(275)}
      className="text-destructive text-sm native:px-1 py-1.5"
      aria-invalid="true"
      id="inputError"
    >
      {message}
    </Animated.Text>
  );
};

export { FormErrorMessage };
