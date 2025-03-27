import { useActionState, useEffect, useMemo, useState } from "react";
import addPet from "../actions/add-pet";
import { UserName } from "@/features/users/types/user.types";
import getUsersNames from "@/features/users/actions/get-users-names";

export const useAddPet = () => {
    const initialState = useMemo(() => (
        {
            errors: {
                name: '',
                breed: '',
                age: '',
                description: '',
                stirilized: '',
                sex: '',
                typeOfPet: '',
                size: '',
                owner: ''
            }
        }), []);
    const [state, formAction] = useActionState(addPet, initialState);
    const [users, setUsers] = useState<UserName[]>([]);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        try {
            const { users: fetchUsers } = await getUsersNames();
            setUsers(fetchUsers);
        } catch (error: unknown) {
            console.error(error);
        }
    }

    return { 
        state,
        formAction,
        users
    };
}