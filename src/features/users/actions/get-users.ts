"use server";
import { UserResponse, usersTransformer } from "../transformers/users.transformer";
import { User } from "../types/user.types";
import { findAllUsers } from "../services/users.service";

export const getUsers = async (): Promise<{ users: User[] }> => {
    const users: UserResponse[] = await findAllUsers();

    return {
        users: users.map(usersTransformer)
    }
}