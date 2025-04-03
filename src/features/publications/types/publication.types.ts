interface OwnerPublication {
    _id: string;
    name: string;
}

interface PetPublication {
    _id: string;
    name: string;
}

export interface PublicationResponse {
    _id: string;
    ownerPublication: OwnerPublication;
    petId: PetPublication;
    title: string;
    description: string;
    status: 'created' | 'archived' | 'completed' | 'rejected' | 'approved';
    adoptersIds: string[];
    createdAt: string;
    updatedAt: string;
}