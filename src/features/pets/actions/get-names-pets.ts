'use server';
import { findAllPetNames } from "../services/pet.service";

export default async function getNamesPets() {
    const names = await findAllPetNames();

    return { pets: names }
}