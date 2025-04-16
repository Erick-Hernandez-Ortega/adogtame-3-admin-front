export interface AdminResponse {
    _id: string;
    name: string;
    email: string;
    password: string;
    profilePicture: string;
    isTokenRemoved: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface Admin {
    id: string;
    email: string;
    name: string;
    createdAt: Date;
}	