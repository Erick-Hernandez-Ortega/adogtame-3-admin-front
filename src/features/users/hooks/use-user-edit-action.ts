import { useModalStore } from "@/shared/store/modal-store";
import { useActionState, useEffect, useMemo } from "react";
import { editUser } from "../actions/edit-user";

export const useUserEditAction = () => {
    const initialState = useMemo(() => ({ errors: { email: '', name: '', username: '', age: '' } }), []);
    const [state, formAction] = useActionState(editUser, initialState);
    const { selectedUser, closeEditModalUser } = useModalStore();

    useEffect(() => {
        if (state !== initialState) {
            const hasErrors: boolean = Object.values(state.errors || {}).some(error => error);
            if (!hasErrors) return closeEditModalUser();
        }
    }, [state, initialState, closeEditModalUser]);


    return { 
        state,
        formAction,
        selectedUser
     };
}