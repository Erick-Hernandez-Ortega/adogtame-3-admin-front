'use server';

import { findAllAdmins, findAllAdoptions, findAllAvailablePets, findAllPublications, findAllUsers, findAllUsersByMonth } from "../services/dashboard.service";
import { dashboardDataTransformer } from "../transformer/dashboard-data.transformer";
import { Stat, StatDate } from "../types/dashboard.types";

export default async function getStats() {
    const totalPets: Stat[] = await findAllAvailablePets();
    const totalAdoptions: Stat[] = await findAllAdoptions();
    const totalPublications: Stat[] = await findAllPublications();
    const totalUsers: Stat = await findAllUsers();
    const totalAdmins: Stat = await findAllAdmins();
    const totalUsersByMonth: StatDate[] = await findAllUsersByMonth();

    return {
        totalPets: totalPets.map(stat => dashboardDataTransformer(stat)),
        totalAdoptions: totalAdoptions.map(stat => dashboardDataTransformer(stat)),
        totalPublications: totalPublications.map(stat => dashboardDataTransformer(stat)),
        totalUsers,
        totalAdmins,
        totalUsersByMonth
    }
}