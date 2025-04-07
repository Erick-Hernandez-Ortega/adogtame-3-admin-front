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