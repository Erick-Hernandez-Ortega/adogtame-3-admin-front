import { Adoption, AdoptionResponse } from "../types/adoptions.types";

export default function adoptionTransformer(adoption: AdoptionResponse): Adoption {

    return {
        id: adoption._id,
        comments: adoption.comments,
        createdAt: adoption.createdAt,
        reason: adoption.reason,
        status: adoption.status,
        user: adoption.userId,
        pet: adoption.petId
    }
}