'use server';
import { revalidatePath } from "next/cache";
import { adoptionSchema } from "../schemas/adoption.schema";
import { updateAdoption } from "../services/adoptions.service";

export default async function editAdoption(prevState: unknown, formData: FormData) {
    const id: string = formData?.get("id") as string;
    const comments: string = formData?.get("comments") as string;
    const reason: string = formData?.get("reason") as string;
    const status: string = formData?.get("status") as string;

    if (!id) return { errors: { general: 'ID no válido' } };

    const zodResult = adoptionSchema?.safeParse({ comments, reason, status });

    if (!zodResult?.success) return { errors: { ...zodResult?.error?.flatten()?.fieldErrors } };

    await updateAdoption(id, { comments, reason, status });

    revalidatePath('/adopciones');

    return { errors: { general: '', comments: '', reason: '', status: '' } }
}