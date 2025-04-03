import { z } from "zod";

export const step4Schema = z.object({
  aceptaTerminos: z.boolean(),
});

export type Step4Data = z.infer<typeof step4Schema>;
