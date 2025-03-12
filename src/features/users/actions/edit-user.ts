'use server';

import { revalidatePath } from "next/cache";
import { userSchema } from "../schemas/user.schema";
import { updateUser } from "../services/users.service";

export async function editUser (prevState: unknown, formData: FormData) {
    const name: string = formData?.get("name") as string;
    const username: string = formData?.get("username") as string;
    const age: string = formData?.get("age") as string;
    const email: string = formData?.get("email") as string;
    const id: string = formData?.get("id") as string;

    const userEditSchema = userSchema.omit({ password: true });
    const zodResult = userEditSchema?.safeParse({ name, username, age, email });
    
    if (!zodResult?.success) return { errors: { ...zodResult?.error?.flatten()?.fieldErrors} };

    await updateUser({ id, name, username, age, email });

    revalidatePath('/usuarios');

    return {
        errors: {
            name: '',
            username: '',
            age: '',
            email: ''
        }
    };
} 