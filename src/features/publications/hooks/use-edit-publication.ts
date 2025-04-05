import { useActionState, useEffect, useMemo } from "react";
import editPublication from "../actions/edit-publication";
import { useModalStore } from "@/shared/store/modal-store";

export const useEditPublication = () => {
    const initialState = useMemo(() => (
        {
            errors: {
                title: '',
                description: ''
            }
        }), []);
    const [state, formAction] = useActionState(editPublication, initialState);
    const { selectedPublication, closeModalEditPublication } = useModalStore();

    useEffect(() => {
        if (state !== initialState) {
            const hasErrors: boolean = Object.values(state.errors || {}).some(error => error);
            if (!hasErrors) return closeModalEditPublication();
        }
    }, [state, initialState, closeModalEditPublication]);

    return {
        state,
        formAction,
        selectedPublication
    }
}