import { cookies } from "next/headers";
import { AdminResponse } from "../types/admins.types";

export const findAllAdmins = async (): Promise<AdminResponse[]> => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/admins`, {
        headers: {
            "Authorization": `Bearer ${token}`,
        },
        method: "GET",
    });

    return response.json();
}