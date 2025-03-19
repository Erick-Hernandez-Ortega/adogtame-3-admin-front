import { useActionState, useMemo } from "react";
import addPet from "../actions/add-pet";

export const useAddPet = () => {
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
                size: ''
            }
        }), []);
    const [state, formAction] = useActionState(addPet, initialState);


    return { 
        state,
        formAction
    };
}