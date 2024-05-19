import { z } from "zod";

export const Offer = z.object({
  title: z
    .string()
    .min(1, "Debe ingresar un título")
    .min(4, "Debe ser mayor o igual a 4 caracteres"),
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

export type OfferType = z.infer<typeof Offer>;
