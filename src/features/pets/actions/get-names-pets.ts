'use server';
import { findAllPetNames } from "../services/pet.service";
import { PetName } from "../types/pet.types";

export default async function getNamesPets() {
    const names: PetName[] = await findAllPetNames();

    return { pets: names }
}