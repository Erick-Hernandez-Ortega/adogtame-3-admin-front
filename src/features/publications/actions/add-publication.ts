'use server';
import { revalidatePath } from "next/cache";
import { publicationSchema } from "../schemas/publication.schema";

export default async function addPublication(prevState: unknown, formData: FormData) {
    const ownerId: string = formData?.get("ownerId") as string;
    const description: string = formData?.get("description") as string;
    const petId: string = formData?.get("petId") as string;
    const title: string = formData?.get("title") as string;

    const zodResult = publicationSchema?.safeParse({ ownerId, description, petId, title });

    if (!zodResult?.success) return { errors: { ...zodResult?.error?.flatten()?.fieldErrors } };

    // await createPublication({ owner, description, pet, title });    

    revalidatePath('/publicaciones');
    
    return {
        errors: {
            owner: '',
            description: '',
            pet: '',
            title: ''
        }
    }
}