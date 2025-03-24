import { cookies } from "next/headers";
import { PetForm } from "../types/pet.types";

export const createPet = async (pet: PetForm) => {
    "use server";
    const token: string | undefined = (await cookies()).get("token")?.value;

    const response: Response = await fetch(`${process.env.API_URL}/pets`, {
        body: JSON.stringify(pet),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
        method: "POST",
    });

    return response.json();
}