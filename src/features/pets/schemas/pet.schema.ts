import { z } from "zod";

export const petSchema = z.object({
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
    breed: z
        .string({
            required_error: "La raza es requerida",
        })
        .trim()
        .min(2, {
            message: "La raza debe tener al menos 2 caracteres",
        })
        .max(82, {
            message: "La raza debe tener como maximo 82 caracteres",
        }),
    age: z
        .string({
            required_error: "La edad es requerida",
        })
        .trim()
        .min(2, {
            message: "La edad debe tener al menos 2 caracteres",
        })
        .max(10, {
            message: "La edad debe tener como maximo 10 caracteres",
        }),
    description: z
        .string()
        .trim()
        .max(750, {
            message: "La descripción debe tener como máximo 750 caracteres",
        })
        .optional(),
    stirilized: z
        .boolean(),
    sex: z
        .string()
        .trim()
        .min(2, {
            message: "El sexo debe tener al menos 2 caracteres",
        })
        .max(10, {
            message: "El sexo debe tener como maximo 10 caracteres",
        }),
    typeOfPet: z
        .string()
        .trim()
        .min(2, {
            message: "El tipo de mascota debe tener al menos 2 caracteres",
        })
        .max(32, {
            message: "El tipo de mascota debe tener como maximo 32 caracteres",
        }),
    size: z
        .string()
        .trim()
        .min(2, {
            message: "El tamaño debe tener al menos 2 caracteres",
        })
        .max(32, {
            message: "El tamaño debe tener como maximo 32 caracteres",
        }),
})