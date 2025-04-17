'use server';

import { findAllAvailablePets } from "../services/dashboard.service";
import { PetsAvaliable } from "../types/dashboard.types";

export default async function getPetsAvaliable() {
    const totalPets: PetsAvaliable = await findAllAvailablePets();

    return {
        totalPets
    }
}