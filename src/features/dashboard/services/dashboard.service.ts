import { cookies } from "next/headers";
import { PetsAvaliable } from "../types/dashboard.types";

export const findAllAvailablePets = async (): Promise<PetsAvaliable> => {
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