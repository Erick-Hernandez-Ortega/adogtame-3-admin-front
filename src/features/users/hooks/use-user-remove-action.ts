import { useActionState, useEffect, useMemo } from "react";
import { removeUser } from "../actions/remove-user";
import { useModalStore } from "@/shared/store/modal-store";

export const useUserRemoveAction = () => {
    const initialState = useMemo(() => ({ errors: { general: '' } }), []);
    const [state, formAction] = useActionState(removeUser, initialState);
    const { selectedUser, closeRemoveModalUser } = useModalStore();

    useEffect(() => {
        if (state !== initialState) {
            const hasErrors: boolean = Object.values(state.errors || {}).some(error => error);
            if (!hasErrors) return closeRemoveModalUser();
        }
    }, [state, initialState, closeRemoveModalUser]);

    return {
        state,
        formAction,
        selectedUser
    }
}