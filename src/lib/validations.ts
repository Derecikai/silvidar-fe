import { z } from "zod";

//Login Validation
export const loginFormSchema = z.object({
  email: z.string().email("This is not a valid email"),
  password: z.string().min(4, "the password is to short"),
});

export type TloginFormSchema = z.infer<typeof loginFormSchema>;
