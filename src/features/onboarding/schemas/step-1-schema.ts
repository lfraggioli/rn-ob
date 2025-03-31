import { z } from "zod";

export const step1Schema = z.object({
  nombre: z.string().min(2, "El nombre es obligatorio"),
});

export type Step1Data = z.infer<typeof step1Schema>;
