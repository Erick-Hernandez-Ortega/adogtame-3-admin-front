'use server'

import { findAllNames } from "../services/users.service";

export default async function getUsersNames() {
    const names = await findAllNames();

    return { users: names }
}