import { z } from "zod";

export const RegisterSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  businessEmail: z.string().email("Invalid email format"),
});

export type RegisterInput = z.infer<typeof RegisterSchema>;

export const VerifyEmailSchema = z.object({
  email: z
    .string()
    .transform((email) => email.toLowerCase().trim())
    .pipe(z.string().email("Invalid email format")),
  otp: z
    .string()
    .length(6, "OTP must be exactly 6 digits")
    .regex(/^\d{6}$/, "OTP must contain only digits"),
});

export type VerifyEmailInput = z.infer<typeof VerifyEmailSchema>;
