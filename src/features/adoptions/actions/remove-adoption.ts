'use server';
import { revalidatePath } from "next/cache";
import { deleteAdoption } from "../services/adoptions.service";

export default async function removeAdoption(prevState: unknown, formData: FormData) {
    const id: string = formData?.get("id") as string;
    if (!id) return { errors: { general: 'ID no válido' } };

    await deleteAdoption(id);

    revalidatePath('/adopciones');

    return { errors: { general: '' } }
}