export interface UserResponse {
    _id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    age: string;
    imagen: string;
    isTokenRemoved: boolean;
    createdAt: string;
    updatedAt: string;
}

export const usersTransformer = (user: UserResponse) => {
    return {
        id: user._id,
        name: user.name,
        email: user.email,
        username: user.username,
        age: user.age,
        image: user.imagen,
        createdAt: user.createdAt
    }
}