export async function login(email: string, password: string) {
    "use server";
    try {
        const response: Response = await fetch(`${process.env.API_URL}/auth/login`, {
            body: JSON.stringify({ email, password }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });
        return response.json();
    } catch (error: unknown) {
        console.error(error)
        return { error }
    }
}