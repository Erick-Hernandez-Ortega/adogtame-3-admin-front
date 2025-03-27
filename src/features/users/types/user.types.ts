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

export interface UserEdit extends Omit<UserCreate, "password"> {
    id: string;
}

export interface UserName {
    _id: string;
    name: string;
}
