import { Label } from "tamagui";

export const FormLabel = ({ children, error, htmlFor }) => {
  return (
    <Label
      htmlFor={htmlFor}
      color={error ? "$red10" : "$color"}
      fontWeight="500"
    >
      {children}
    </Label>
  );
};
export default FormLabel;
