import { z } from "zod";

export const step2Schema = z.object({
  email: z.string().email("El email no es válido"),
});

export type Step2Data = z.infer<typeof step2Schema>;
