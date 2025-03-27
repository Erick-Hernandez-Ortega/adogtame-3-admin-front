'use server';
import { revalidatePath } from "next/cache";
import { petSchema } from "../schemas/pet.schema";
import { createPet } from "../services/pet.service";

export default async function addPet(prevState: unknown, formData: FormData) {
    const name: string = (formData?.get("name") as string)?.trim();
    const breed: string = (formData?.get("breed") as string)?.trim();
    const age: string = (formData?.get("age") as string)?.trim();
    const description: string = (formData?.get("description") as string)?.trim();
    const stirilized: boolean = (formData?.get("stirilized") as string)?.trim() === 'true';
    const sex: string = (formData?.get("sex") as string)?.trim();
    const typeOfPet: string = (formData?.get("typeOfPet") as string)?.trim();
    const size: string = (formData?.get("size") as string)?.trim();
    const ownerId: string = (formData?.get("ownerId") as string)?.trim();

    const zodResult = petSchema?.safeParse({ name, breed, age, description, stirilized, sex, typeOfPet, size, ownerId });

    if (!zodResult?.success) return { errors: { ...zodResult?.error?.flatten()?.fieldErrors } };

    await createPet({ name, breed, age, description, stirilized, sex, typeOfPet, size, owner: ownerId });    

    revalidatePath('/mascotas');
    
    return {
        errors: {
            name: '',
            breed: '',
            age: '',
            description: '',
            stirilized: '',
            sex: '',
            typeOfPet: '',
            size: '',
            owner: ''
        }
    }
}