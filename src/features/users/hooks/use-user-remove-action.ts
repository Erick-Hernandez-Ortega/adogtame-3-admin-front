import { useActionState, useMemo } from "react";
import { removeUser } from "../actions/remove-user";
import { useModalStore } from "@/shared/store/modal-store";

export const useUserRemoveAction = () => {
    const initialState = useMemo(() => ({ errors: { general: '' } }), []);
    const [state, formAction] = useActionState(removeUser, initialState);
    const { selectedUser } = useModalStore();
    
    return {
        state,
        formAction,
        selectedUser
    }
}