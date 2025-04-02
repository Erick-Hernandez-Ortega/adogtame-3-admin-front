'use server';
import { findPetsNamesByOwner } from "../services/pet.service";

export default async function getNamesPetsByOwner(ownerId: string) {
    const names = await findPetsNamesByOwner(ownerId);

    return {
        pets: names
    }
}