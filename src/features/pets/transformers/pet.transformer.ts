import { PetResponse } from "../types/pet.types"

export const petTransformer = (pet: PetResponse) => {
    return {
        id: pet._id,
        name: pet.name,
        type: pet.typeOfPet,
        age: pet.age,
        image: pet.image,
        createdAt: pet.createdAt,
        breed: pet.breed,
        description: pet.description,
        stirilized: pet.stirilized,
        sex: pet.sex,
        size: pet.size,
        available: pet.available,
        owner: pet.owner
    }
}