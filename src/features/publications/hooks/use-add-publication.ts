import { RefObject, useActionState, useEffect, useMemo, useRef, useState } from "react";
import addPublication from "../actions/add-publication";
import { UserName } from "@/features/users/types/user.types";
import getUsersNames from "@/features/users/actions/get-users-names";
import { PetName } from "@/features/pets/types/pet.types";
import getNamesPets from "@/features/pets/actions/get-names-pets";

export const useAddPublication = () => {
    const initialState = useMemo(() => (
        {
            errors: {
                owner: '',
                description: '',
                pet: '',
                title: ''
            }
        }), []);
    const [state, formAction] = useActionState(addPublication, initialState);
    const closeButtonRef: RefObject<HTMLButtonElement | null> = useRef(null);
    const [users, setUsers] = useState<UserName[]>([]);
    const [pets, setPets] = useState<PetName[]>([]);

    useEffect(() => {
        getAllUsers();
        getAllPets();
    }, []);

    const getAllUsers = async (): Promise<void> => {
        try {
            const { users: fetchUsers } = await getUsersNames();
            setUsers(fetchUsers);
        } catch (error: unknown) {
            console.error(error);
        }
    }

    const getAllPets = async (): Promise<void> => {
        try {
            const { pets: fetchPets } = await getNamesPets();
            setPets(fetchPets);
        } catch (error: unknown) {
            console.error(error);
        }
    }

    return {
        state,
        formAction,
        closeButtonRef,
        users,
        pets
    };
}