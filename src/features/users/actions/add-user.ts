'use server';

import { revalidatePath } from "next/cache";
import { userSchema } from "../schemas/user.schema";
import { createUser } from "../services/users.service";

export default async function addUser(prevState: unknown, formData: FormData) {
    const name: string = formData?.get("name") as string;
    const username: string = formData?.get("username") as string;
    const age: string = formData?.get("age") as string;
    const email: string = formData?.get("email") as string;
    const password: string = formData?.get("password") as string;

    const zodResult = userSchema?.safeParse({ name, username, age, email, password });

    if (!zodResult?.success) return { errors: { ...zodResult?.error?.flatten()?.fieldErrors, login: '' } };

    await createUser({ name, username, age, email, password });

    revalidatePath('/usuarios');

    return {
        errors: {
            name: '',
            username: '',
            age: '',
            email: '',
            password: ''
        }
    };
}