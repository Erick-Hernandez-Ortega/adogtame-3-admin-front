import { cookies } from "next/headers";
import { UserCreate, UserEdit } from "../types/user.types";

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

export const updateUser = async (user: UserEdit) => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/users/${user.id}`, {
        body: JSON.stringify(user),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        method: "PATCH",
    });

    return response.json();
}

export const deleteUser = async (id: string) => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/users/${id}`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        method: "DELETE",
    });

    return response.json();
}

export const findAllUsers = async () => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/users`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        method: "GET",
    });

    return response.json();
}

export const findAllNames = async () => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/users/names`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        method: "GET",
    });

    return response.json();
}
