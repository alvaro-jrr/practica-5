import { phone } from "phone";
import { z } from "zod";

export const Company = z.object({
  email: z
    .string()
    .email("Debe ingresar un email con el formato nombre@ejemplo.com")
    .min(1, "Debe ingresar un email")
    .min(4, "Debe ingresar un email mayor o igual a 4 caracteres"),
  name: z
    .string()
    .min(1, "Debe ingresar un nombre")
    .min(2, "Debe ingresar un nombre mayor o igual a 2 caracteres")
    .max(50, "Debe ingresar un nombre menor o igual a 50 caracteres"),
  address: z.string().min(1, "Debe ingresar una dirección"),
  phoneNumber: z
    .string()
    .min(1, "Debe ingresar un número de teléfono")
    .refine((value) => phone(value).isValid, {
      message: "Debe ingresar un télefono válido",
    }),
});

export type CompanyType = z.infer<typeof Company>;
