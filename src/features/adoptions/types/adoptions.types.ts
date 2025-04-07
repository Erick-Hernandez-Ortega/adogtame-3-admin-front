interface UserDetailsResponse {
    _id: string;
    name: string;
    username: string;
    age: string;
    email: string;
    imagen: string;
    isTokenRemoved: boolean;
}

interface PetDetailsResponse {
    _id: string;
    name: string;
    breed: string;
    age: string;
    description: string;
    stirilized: boolean;
    sex: "Male" | "Female" | "Unknown";
    typeOfPet: "Dog" | "Cat" | "Other";
    size: "Little" | "Medium" | "Large" | "VeryLarge";
    available: boolean;
    owner: string
  }


export  interface AdoptionResponse {
    _id: string,
    petId: PetDetailsResponse;
    userId: UserDetailsResponse;
    status: "pending" | "approved" | "rejected" | "completed";
    reason: string;
    comments: string;
    createdAt: string;
    updatedAt: string;
}

export interface Adoption {
    id: string,
    pet: PetDetailsResponse;
    user: UserDetailsResponse;
    status: "pending" | "approved" | "rejected" | "completed";
    reason: string;
    comments: string;
    createdAt: string;
}