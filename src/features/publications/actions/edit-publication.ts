'use server';
import { revalidatePath } from "next/cache";
import { publicationSchema } from "../schemas/publication.schema";
import { updatePublication } from "../services/publications.service";

export default async function editPublication(prevState: unknown, formData: FormData) {
    const description: string = formData?.get("description") as string;
    const title: string = formData?.get("title") as string;
    const id: string = formData?.get("id") as string;

    if (!id) return { errors: { general: 'ID no válido' } }

    const zodResult = publicationSchema?.safeParse({ description, title });

    if (!zodResult?.success) return { errors: { ...zodResult?.error?.flatten()?.fieldErrors } };

    await updatePublication(id, { description, title });

    revalidatePath('/publicaciones')

    return {
        errors: {
            description: '',
            title: ''
        }
    }
}