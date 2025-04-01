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
    ownerId: z
        .string({
            required_error: "El ID del dueño es requerido",
        })
        .trim()
        .min(2, {
            message: "El ID del dueño debe tener al menos 2 caracteres",
        }),
    petId: z
        .string({
            required_error: "El ID de la mascota es requerido",
        })
        .trim()
        .min(2, {
            message: "El ID de la mascota debe tener al menos 2 caracteres",
        }),
});