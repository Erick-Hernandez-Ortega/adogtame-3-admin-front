import { cookies } from "next/headers";
import { AdoptionResponse } from "../types/adoptions.types";

export const findAllAdoptions = async (): Promise<AdoptionResponse[]> => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/adopcions`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        method: "GET",
    });

    return response.json();
}

export const deleteAdoption = async (id: string): Promise<unknown> => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/adopcions/${id}`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        method: "DELETE",
    });

    return response.json();
}

export const updateAdoption = async (id: string, adoption: { comments: string, reason: string, status: string }): Promise<unknown> => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/adopcions/${id}`, {
        body: JSON.stringify(adoption),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        method: "PATCH",
    });

    return response.json();
}