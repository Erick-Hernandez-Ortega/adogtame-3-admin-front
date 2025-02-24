"use server";
import { loginSchema } from "../schemas/auth.schema";
import { login } from "../services/auth.service";
import { redirect, RedirectType } from "next/navigation";

export async function authenticate(prevState: unknown, formData: FormData) {
    const email: string = formData?.get("email") as string;
    const password: string = formData?.get("password") as string;

    const zodResult = loginSchema?.safeParse({ email, password });

    if (!zodResult?.success) return { errors: { ...zodResult?.error?.flatten()?.fieldErrors, login: '' } };

    const response = await login(email, password);

    if (response?.statusCode === 200) return redirect("/dashboard", RedirectType.replace);

    return {
        errors: {
            login: response.message,
            email: '',
            password: ''
        }
    };
}