'use server';

import { findAllAvailablePets } from "../services/dashboard.service";
import { petsAvaliableTransformer } from "../transformer/pets-avaliable.transformer";
import { Stat } from "../types/dashboard.types";

export default async function getStats() {
    const totalPets: Stat[] = await findAllAvailablePets();

    return {
        totalPets: totalPets.map(stat => petsAvaliableTransformer(stat))
    }
}