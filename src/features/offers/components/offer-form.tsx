import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Offer, OfferType } from "@/models/offer";
import { useToast } from "@/components/ui/use-toast";
import { TextField } from "@/components/text-field";
import { TextareaField } from "@/components/textarea-field";

export function OfferForm() {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OfferType>({
    resolver: zodResolver(Offer),
    values: {
      title: "",
      description: "",
      salary: 0.0,
    },
  });

  const onSubmit: SubmitHandler<OfferType> = async () => {
    return toast({
      title: "Oferta creada",
    });
  };

  return (
    <form method="post" className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-4">
        <TextField
          id="title"
          labelProps={{
            children: "Título",
          }}
          inputProps={{
            placeholder: "ej: React Developer",
            ...register("title"),
          }}
          errorMessage={errors.title?.message}
        />

        <TextareaField
          id="description"
          labelProps={{
            children: "Descripción",
          }}
          textareaProps={{
            placeholder: "ej: Trabajo a tiempo completo...",
            ...register("description"),
          }}
          errorMessage={errors.description?.message}
        />

        <TextField
          id="salary"
          labelProps={{
            children: "Salario (USD)",
          }}
          inputProps={{
            placeholder: "ej: 100",
            ...register("salary"),
          }}
          errorMessage={errors.salary?.message}
        />
      </div>

      <Button className="w-full">Crear</Button>
    </form>
  );
}
