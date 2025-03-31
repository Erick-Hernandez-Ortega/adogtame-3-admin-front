import { useActionState, useEffect, useMemo } from "react";
import removePet from "../actions/remove-pet";
import { useModalStore } from "@/shared/store/modal-store";


export const useRemovePet = () => {
    const initialState = useMemo(() => ({ errors: { general: '' } }), []);
    const [state, formAction] = useActionState(removePet, initialState);
    const { selectedPet, closeModalRemovePet } = useModalStore();

    useEffect(() => {
            if (state !== initialState) {
                const hasErrors: boolean = Object.values(state.errors || {}).some(error => error);
                if (!hasErrors) return closeModalRemovePet();
            }
        }, [state, initialState, closeModalRemovePet]);

    return {
        state,
        formAction,
        selectedPet
    }
}