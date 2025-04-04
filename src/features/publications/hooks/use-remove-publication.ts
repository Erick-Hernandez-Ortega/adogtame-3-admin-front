import { useActionState, useEffect, useMemo } from "react";
import removePublication from "../actions/remove-publication";
import { useModalStore } from "@/shared/store/modal-store";

export const useRemovePublication = () => {
    const initialState = useMemo(() => ({ errors: { general: '' } }), []);
    const [state, formAction] = useActionState(removePublication, initialState);
    const { selectedPublication, closeModalRemovePublication } = useModalStore();

    useEffect(() => {
            if (state !== initialState) {
                const hasErrors: boolean = Object.values(state.errors || {}).some(error => error);
                if (!hasErrors) return closeModalRemovePublication();
            }
        }, [state, initialState, closeModalRemovePublication]);

    return {
        state,
        formAction,
        selectedPublication
    }
}