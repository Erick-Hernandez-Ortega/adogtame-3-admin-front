import { RefObject, useActionState, useEffect, useMemo, useRef, useState } from "react";
import { UserName } from "@/features/users/types/user.types";
import addPet from "../actions/add-pet";
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
    const closeButtonRef: RefObject<HTMLButtonElement | null> = useRef(null);
    
    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async (): Promise<void> => {
        try {
            const { users: fetchUsers } = await getUsersNames();
            setUsers(fetchUsers);
        } catch (error: unknown) {
            console.error(error);
        }
    }

    const handleSubmit = (): void => {
        if (closeButtonRef.current) closeButtonRef.current.click();
    }

    return { 
        closeButtonRef,
        formAction,
        handleSubmit,
        state,
        users,
    };
}