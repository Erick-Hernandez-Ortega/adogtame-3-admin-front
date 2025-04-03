import { PublicationResponse } from "../types/publication.types"

export const publicationTransformer = (publication: PublicationResponse) => {
    console.log(publication, 'publicationeeee');
    return {
        id: publication._id,
        ownerPublication: publication.ownerId,
        petPublication: publication.petId,
        title: publication.title,
        description: publication.description,
        status: publication.status,
        adoptersIds: publication.adoptersIds,
        createdAt: publication.createdAt
    }
}