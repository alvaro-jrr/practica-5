import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { type SubmitHandler, useForm } from "react-hook-form";

import {
  UserCredentials,
  type UserCredentialsType,
} from "@/models/user-credentials";

import { PasswordField } from "@/components/password-field";
import { TextField } from "@/components/text-field";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export function LoginForm() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserCredentialsType>({
    resolver: zodResolver(UserCredentials),
    values: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<UserCredentialsType> = async () => {
    // Logged in.
    return toast({
      title: "Bienvenido",
      description: "Has ingresado con éxito",
    });
  };

  return (
    <form
      method="post"
      className="w-full space-y-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-4">
        <TextField
          id="email"
          labelProps={{
            children: "Email",
          }}
          inputProps={{
            autoComplete: "email",
            placeholder: "ej: johndoe@gmail.com",
            type: "email",
            ...register("email"),
          }}
          errorMessage={errors.email?.message}
        />

        <PasswordField
          id="password"
          labelProps={{
            children: "Contraseña",
          }}
          inputProps={{
            autoComplete: "current-password",
            ...register("password"),
          }}
          errorMessage={errors.password?.message}
        />
      </div>

      <Button className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : null}

        <span>Iniciar Sesión</span>
      </Button>
    </form>
  );
}
