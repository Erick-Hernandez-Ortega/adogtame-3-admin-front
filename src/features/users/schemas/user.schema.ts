import { z } from "zod";

export const userSchema = z.object({
    name: z
        .string({
            required_error: "El nombre es requerido",
        })
        .trim()
        .min(2, {
            message: "El nombre debe tener al menos 2 caracteres",
        })
        .max(82, {
            message: "El nombre debe tener como maximo 82 caracteres",
        }),
    email: z
        .string({
            required_error: "El correo es requerido",
        })
        .trim()
        .email({
            message: "El correo no es válido",
        }),
    username: z
        .string({
            required_error: "El nombre de usuario es requerido",
        })
        .trim()
        .min(2, {
            message: "El nombre de usuario debe tener al menos 2 caracteres",
        })
        .max(32, {
            message: "El nombre de usuario debe tener como maximo 32 caracteres",
        }),
    age: z
        .string({
            required_error: "La edad es requerida",
        })
        .trim()
        .min(2, {
            message: "La edad debe tener al menos 2 caracteres",
        })
        .max(3, {
            message: "La edad debe tener como maximo 3 caracteres",
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
