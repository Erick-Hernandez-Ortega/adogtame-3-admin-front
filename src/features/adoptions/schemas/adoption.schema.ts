import { z } from "zod";

export const adoptionSchema = z.object({
    reason: z
        .string({
            required_error: "El motivo es requerido",
        })
        .trim()
        .min(2, {
            message: "El motivo debe tener al menos 2 caracteres",
        })
        .max(82, {
            message: "El motivo debe tener como maximo 82 caracteres",
        }),
    comments: z
        .string({
            required_error: "Los comentarios son requeridos",
        })
        .trim()
        .min(2, {
            message: "Los comentarios deben tener al menos 2 caracteres",
        })
        .max(500, {
            message: "Los comentarios deben tener como maximo 500 caracteres",
        }),
});