'use server';

import { revalidatePath } from "next/cache";
import { deleteUser } from "../services/users.service";

export async function removeUser (prevState: unknown, formData: FormData) {
    const id: string = formData?.get("id") as string;

    if (!id) return { errors: { general: 'ID no válido' } };

    await deleteUser(id);
    revalidatePath('/usuarios');

    return {
        errors: {
            general: ''
        }
    };
}