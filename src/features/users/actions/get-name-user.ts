'use server'
import { findNameById } from "../services/users.service"

export default async function getNameUser(id: string) {
    const response = await findNameById(id);

    return {
        name: response.name as string,
        id: response._id as string
    }
}