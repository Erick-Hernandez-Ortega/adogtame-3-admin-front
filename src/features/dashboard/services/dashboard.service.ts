import { cookies } from "next/headers";
import { Stat } from "../types/dashboard.types";

export const findAllAvailablePets = async (): Promise<Stat[]> => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/stats/pets-availables`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        method: "GET",
    });

    return response.json();
}

export const findAllAdoptions = async (): Promise<Stat[]> => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/stats/adoptions`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        method: "GET",
    });

    return response.json();
}

export const findAllPublications = async (): Promise<Stat[]> => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/stats/publications`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        method: "GET",
    });

    return response.json();
}

export const findAllUsers = async (): Promise<Stat> => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/stats/users`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        method: "GET",
    });

    return response.json();
}

export const findAllAdmins = async (): Promise<Stat> => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/stats/admins`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        method: "GET",
    });

    return response.json();
}
