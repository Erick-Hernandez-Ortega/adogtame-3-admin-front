import { Stat } from "../types/dashboard.types"

export const petsAvaliableTransformer = (stat: Stat) => {
    const { color, ...rest } = stat;

    return { ...rest, fill: color };
}