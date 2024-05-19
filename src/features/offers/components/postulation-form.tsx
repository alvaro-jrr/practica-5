import { useToast } from "@/components/ui/use-toast";
import {
  PostulationApplication,
  PostulationApplicationType,
} from "@/models/postulation";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField } from "@/components/text-field";
import { TextareaField } from "@/components/textarea-field";
import { Button } from "@/components/ui/button";

export function PostulationForm() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostulationApplicationType>({
    resolver: zodResolver(PostulationApplication),
    values: {
      description: "",
      salary: 0.0,
    },
  });

  const onSubmit: SubmitHandler<PostulationApplicationType> = async () => {
    return toast({
      title: "Oferta creada",
    });
  };

  return (
    <form method="post" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <TextareaField
          id="description"
          labelProps={{
            children: "Háblanos de ti",
          }}
          textareaProps={{
            placeholder: "ej: Tengo experiencia en React...",
            ...register("description"),
          }}
          errorMessage={errors.description?.message}
        />

        <TextField
          id="salary"
          labelProps={{
            children: "Expectativa salarial (USD)",
          }}
          inputProps={{
            placeholder: "ej: 100",
            ...register("salary"),
          }}
          errorMessage={errors.salary?.message}
        />
      </div>

      <Button className="w-full">Aplicar</Button>
    </form>
  );
}
