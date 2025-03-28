'use server';
import { findAllPets } from "../services/pet.service";
import { petTransformer } from "../transformers/pet.transformer";
import { PetResponse } from "../types/pet.types";

export default async function getPets() {
    const pets: PetResponse[] = await findAllPets();

    return {
        pets: pets.map((pet: PetResponse) => petTransformer(pet))
    }   
}