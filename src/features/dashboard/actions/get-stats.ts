'use server';

import { findAllAdmins, findAllAdoptions, findAllAvailablePets, findAllPublications, findAllUsers } from "../services/dashboard.service";
import { dashboardDataTransformer } from "../transformer/dashboard-data.transformer";
import { Stat } from "../types/dashboard.types";

export default async function getStats() {
    const totalPets: Stat[] = await findAllAvailablePets();
    const totalAdoptions: Stat[] = await findAllAdoptions();
    const totalPublications: Stat[] = await findAllPublications();
    const totalUsers: Stat = await findAllUsers();
    const totalAdmins: Stat = await findAllAdmins();

    return {
        totalPets: totalPets.map(stat => dashboardDataTransformer(stat)),
        totalAdoptions: totalAdoptions.map(stat => dashboardDataTransformer(stat)),
        totalPublications: totalPublications.map(stat => dashboardDataTransformer(stat)),
        totalUsers,
        totalAdmins
    }
}