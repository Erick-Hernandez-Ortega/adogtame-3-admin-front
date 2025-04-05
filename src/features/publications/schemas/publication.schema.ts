import { z } from "zod";

export const publicationSchema = z.object({
    title: z
        .string({
            required_error: "El título es requerido",
        })
        .trim()
        .min(2, {
            message: "El título debe tener al menos 2 caracteres",
        })
        .max(82, {
            message: "El título debe tener como maximo 82 caracteres",
        }),
    description: z
        .string({
            required_error: "La descripción es requerida",
        })
        .trim()
        .min(2, {
            message: "La descripción debe tener al menos 2 caracteres",
        })
        .max(500, {
            message: "La descripción debe tener como maximo 500 caracteres",
        }),
});