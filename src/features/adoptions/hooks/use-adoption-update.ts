import { useModalStore } from "@/shared/store/modal-store";
import { useActionState, useEffect, useMemo } from "react";
import editAdoption from "../actions/edit-adoption";

export const useAdoptionUpdate = () => {
    const initialState = useMemo(() => ({ errors: { general: '', comments: '', reason: '', status: '' } }), []);
    const [state, formAction] = useActionState(editAdoption, initialState);
    const { selectedAdoption, closeModalEditAdoption } = useModalStore();


    useEffect(() => {
        if (state !== initialState) {
            const hasErrors: boolean = Object.values(state.errors || {}).some(error => error);
            if (!hasErrors) return closeModalEditAdoption();
        }
    }, [state, initialState, closeModalEditAdoption]);

    return {
        state,
        formAction,
        selectedAdoption
    }
}