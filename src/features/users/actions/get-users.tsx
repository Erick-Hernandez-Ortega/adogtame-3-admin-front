"use server";
import { cookies } from "next/headers";
import { UserResponse, usersTransformer } from "../transformers/users.transformer";
import { User } from "../types/user.types";

export const getUsers = async (): Promise<{ users: User[] }> => {
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/users`,
        {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            }
        }
    );
    const users: UserResponse[] = await response.json();

    return {
        users: users.map(usersTransformer)
    }
}