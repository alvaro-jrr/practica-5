import { z } from "zod";

export const PostulationApplication = z.object({
  description: z
    .string()
    .min(1, "Debe ingresar una descripción")
    .min(20, "Debe ser mayor o igual a 20 caracteres"),
  salary: z.coerce
    .number({
      message: "Debe ser un número",
    })
    .min(1, "Debe ingresar un salario mayor a 1"),
});

export type PostulationApplicationType = z.infer<typeof PostulationApplication>;
