import { useActionState, useEffect, useMemo } from "react";
import removeAdoption from "../actions/remove-adoption";
import { useModalStore } from "@/shared/store/modal-store";

export const useAdoptionRemove = () => {
    const initialState = useMemo(() => ({ errors: { general: '' } }), []);
    const [state, formAction] = useActionState(removeAdoption, initialState);
    const { closeModalRemoveAdoption, selectedAdoption } = useModalStore();

    useEffect(() => {
        if (state !== initialState) {
            const hasErrors: boolean = Object.values(state.errors || {}).some(error => error);
            if (!hasErrors) return closeModalRemoveAdoption();
        }
    }, [state, initialState, closeModalRemoveAdoption]);

    return {
        state,
        formAction,
        selectedAdoption
    }
}