import { Admin, AdminResponse } from "../types/admins.types"


export const adminTransformer = (admin: AdminResponse): Admin => {
    return {
        id: admin._id,
        email: admin.email,
        name: admin.name,
        createdAt: admin.createdAt
    }
}