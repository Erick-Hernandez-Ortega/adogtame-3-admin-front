import { z } from "zod";

export const loginSchema = z.object({
    email: z
        .string({
            required_error: "El correo es requerido",
        })
        .trim()
        .email({
            message: "El correo no es válido",
        }),
    password: z
        .string({
            required_error: "La contraseña es requerida",
        })
        .trim()
        .min(6, {
            message: "La contraseña debe tener al menos 6 caracteres",
        })
        .max(32, {
            message: "La contraseña debe tener como maximo 32 caracteres",
        }),
});
