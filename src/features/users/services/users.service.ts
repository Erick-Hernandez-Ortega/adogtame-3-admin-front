import { cookies } from "next/headers";
import { UserCreate } from "../types/user.types";

export const createUser = async (user: UserCreate) => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/users`, {
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        method: "POST",
    });

    return response.json();
}