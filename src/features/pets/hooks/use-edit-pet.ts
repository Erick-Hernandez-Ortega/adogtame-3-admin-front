import { useModalStore } from "@/shared/store/modal-store";
import { useActionState, useEffect, useMemo, useState } from "react";
import editPet from "../actions/edit-pet";
import getNameUser from "@/features/users/actions/get-name-user";

export const useEditPet = () => {
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
                    ownerId: ''
                }
            }), []);

    const { selectedPet, closeModalEditPet } = useModalStore();
    const [state, formAction] = useActionState(editPet, initialState);
    const [owner, setOwner] = useState({
        name: '',
        id: ''
    });

    useEffect(() => {
        const getNameOwner = async (): Promise<void> => {
            try {
                if (!selectedPet?.owner) return;
    
                const { name, id } = await getNameUser(selectedPet?.owner);
    
                setOwner({ name, id });
            } catch (error: unknown) {
                console.error(error);
            }
        }

        getNameOwner();
    }, [selectedPet?.owner]);

    useEffect(() => {
        if (state !== initialState) {
            const hasErrors: boolean = Object.values(state.errors || {}).some(error => error);
            if (!hasErrors) return closeModalEditPet();
        }
    }, [state, initialState, closeModalEditPet]);

    return {
        initialState,
        selectedPet,
        state,
        formAction,
        owner
    }
}