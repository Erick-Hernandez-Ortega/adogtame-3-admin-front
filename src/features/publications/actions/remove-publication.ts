'use server';
import { revalidatePath } from "next/cache";
import { deletePublication } from "../services/publications.service";

export default async function removePublication(prevState: unknown, formData: FormData) {
    const id: string = formData?.get("id") as string;
    if (!id) return { errors: { general: 'ID no válido' } }

    await deletePublication(id);

    revalidatePath('/publicaciones')

    return { errors: { general: '' } }
}