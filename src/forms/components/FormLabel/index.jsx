import { Label } from "tamagui";
import { cn } from "@/lib/utils";

const FormLabel = ({ className, children, error }) => {
  return (
    <Label className={cn(error && "text-destructive", className)}>
      {children}
    </Label>
  );
};

export { FormLabel };
