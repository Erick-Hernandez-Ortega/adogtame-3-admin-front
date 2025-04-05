import { cookies } from "next/headers";
import { PublicationEdit, PublicationResponse } from "../types/publication.types";

export const findAllPublications = async (): Promise<PublicationResponse[]> => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/publications`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        method: "GET",
    });

    return response.json();
}

export const deletePublication = async (id: string): Promise<unknown> => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/publications/${id}`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        method: "DELETE",
    });

    return response.json();
}

export const updatePublication = async (id: string, publication: PublicationEdit): Promise<unknown> => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/publications/${id}`, {
        body: JSON.stringify(publication),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        method: "PATCH",
    });

    return response.json();
}