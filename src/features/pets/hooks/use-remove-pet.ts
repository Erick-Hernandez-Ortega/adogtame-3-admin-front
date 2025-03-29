import { useActionState } from "react";
import removePet from "../actions/remove-pet";
import { useModalStore } from "@/shared/store/modal-store";


export const useRemovePet = () => {
    // No veo necesidad de useMemo
    const initialState = { errors: { general: '' } };
    const [state, formAction] = useActionState(removePet, initialState);
    const { selectedPet } = useModalStore();

    return {
        state,
        formAction,
        selectedPet
    }
}