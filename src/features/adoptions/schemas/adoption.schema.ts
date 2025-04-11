import { z } from "zod";

export const adoptionSchema = z.object({
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
    status: z
        .enum(["approved", "pending", "rejected", "completed"], {
            required_error: "El estado es requerido",
        })
});