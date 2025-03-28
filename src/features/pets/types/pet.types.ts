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

export interface PetResponse extends PetForm  {
    _id: string;
    stirilized: boolean;
    sex: 'Male' | 'Female' | 'Unknown';
    typeOfPet: 'Dog' | 'Cat' | 'Other';
    size: 'Little' | 'Medium' | 'Large' | 'VeryLarge';
    available: boolean;
    image: string;
    createdAt: string;
    updatedAt: string;
}

export interface Pet {
    id: string;
    name: string;
    type: "Dog" | "Cat" | "Other";
    age: string;
    image: string;
    createdAt: string;
    breed: string;
    description: string;
    stirilized: boolean;
    sex: "Male" | "Female" | "Unknown";
    size: 'Little' | 'Medium' | 'Large' | 'VeryLarge';
    available: boolean;
    owner: string;
}