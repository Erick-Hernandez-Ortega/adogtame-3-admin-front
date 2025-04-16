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
