import { z } from "zod";

export const step3Schema = z.object({
  genero: z.enum(["masculino", "femenino", "otro"], {
    errorMap: () => ({ message: "Selecciona un género válido" }),
  }),
});

export type Step3Data = z.infer<typeof step3Schema>;
