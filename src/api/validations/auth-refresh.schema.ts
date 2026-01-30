import { z } from "zod";

export const refreshSchema = z.object({
    refreshToken: z.string({
        required_error: "Refresh token is required",
        invalid_type_error: "Refresh token must be a string",
    }).min(1, "Refresh token cannot be empty"),
});

export type RefreshInput = z.infer<typeof refreshSchema>;
