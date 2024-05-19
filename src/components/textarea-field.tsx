import { cn } from "@/lib/utils";

import { FormError } from "./form-error";
import { Label } from "./ui/label";
import { Textarea, type TextareaProps } from "./ui/textarea";

interface Props {
  id: string;
  labelProps: Omit<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    "className" | "htmlFor"
  >;
  textareaProps: Omit<TextareaProps, "id" | "name">;
  errorMessage?: string;
  className?: string;
  description?: string;
  isOptional?: boolean;
}

export function TextareaField({
  id,
  labelProps,
  textareaProps,
  description,
  errorMessage,
  className,
  isOptional = false,
}: Props) {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex items-center justify-between">
        <Label htmlFor={id} {...labelProps}></Label>

        {isOptional ? (
          <span className="text-xs text-muted-foreground">Opcional</span>
        ) : null}
      </div>

      {description ? (
        <p className="text-sm text-muted-foreground">{description}</p>
      ) : null}

      <Textarea
        id={id}
        name={id}
        aria-invalid={errorMessage ? true : false}
        {...textareaProps}
      />

      <FormError message={errorMessage} />
    </div>
  );
}
