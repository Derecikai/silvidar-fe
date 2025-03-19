import { z } from "zod";

//Login Validation
export const loginFormSchema = z.object({
  email: z.string().email("This is not a valid email"),
  password: z.string().min(4, "the password is to short"),
});

export type TloginFormSchema = z.infer<typeof loginFormSchema>;

//SignUp Validation

export const SignUpFormSchema = z.object({
  username: z.string().min(3, "The username is too short"),
  email: z.string().email("This is not a valid email"),
  password: z.string().min(4, "the password is to short"),
});
