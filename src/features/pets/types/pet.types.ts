export interface PetForm {
    name: string;
    breed: string;
    age: string;
    description: string;
    stirilized: boolean;
    sex: string;
    typeOfPet: string;
    size: string;
    owner: string;
}

export interface PetResponse {
    _id: string;
    name: string;
    breed: string;
    age: string;
    description: string;
    stirilized: boolean;
    sex: 'Male' | 'Female' | 'Unknown';
    typeOfPet: 'Dog' | 'Cat' | 'Other';
    size: 'Little' | 'Medium' | 'Large' | 'VeryLarge';
    available: boolean;
    owner: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}