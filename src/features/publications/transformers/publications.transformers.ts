import { PublicationResponse } from "../types/publication.types"

export const publicationTransformer = (publication: PublicationResponse) => {
    return {
        id: publication._id,
        ownerPublication: publication.ownerPublication,
        petId: publication.petId,
        title: publication.title,
        description: publication.description,
        status: publication.status,
        adoptersIds: publication.adoptersIds,
        createdAt: publication.createdAt
    }
}