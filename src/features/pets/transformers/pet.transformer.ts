import typePetTransformer from "@/shared/transformers/type-pet.transformer"
import { PetResponse } from "../types/pet.types"
import sizePetTransformer from "@/shared/transformers/size-pet.transformer"

export const petTransformer = (pet: PetResponse) => {
    return {
        id: pet._id,
        name: pet.name,
        type: typePetTransformer(pet.typeOfPet),
        age: pet.age,
        image: pet.image,
        createdAt: pet.createdAt,
        breed: pet.breed,
        description: pet.description,
        stirilized: pet.stirilized,
        sex: pet.sex,
        size: sizePetTransformer(pet.size),
        available: pet.available,
        owner: pet.owner
    }
}