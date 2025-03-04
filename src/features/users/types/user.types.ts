export interface User {
    id: string;
    name: string;
    email: string;
    username: string;
    age: string;
    image: string;
    createdAt: string;
}

export interface UserCreate {
    name: string;
    email: string;
    username: string;
    age: string;
    password: string;
}