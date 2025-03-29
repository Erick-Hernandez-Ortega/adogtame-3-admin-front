'use server';
import { revalidatePath } from "next/cache";
import { deletePet } from "../services/pet.service";

export default async function removePet(prevState: unknown, formData: FormData) {
    const id: string = formData?.get("id") as string;
    if (!id) return { errors: { general: 'ID no válido' } };

    await deletePet(id);

    revalidatePath('/mascotas')

    return { errors: { general: '' } }
}