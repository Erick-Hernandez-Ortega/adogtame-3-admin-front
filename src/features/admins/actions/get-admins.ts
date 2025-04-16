'use server';
import { findAllAdmins } from "../services/admins.service";
import { adminTransformer } from "../transformers/admin.transformer";
import { AdminResponse } from "../types/admins.types";

export default async function getAdmins() {
    const admins: AdminResponse[] = await findAllAdmins();

    return {
        admins: admins.map(admin => adminTransformer(admin))
    }
}