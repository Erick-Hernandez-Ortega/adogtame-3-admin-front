import { Stat } from "../types/dashboard.types"

export const dashboardDataTransformer = (stat: Stat) => {
    const { color, ...rest } = stat;

    return { ...rest, fill: color };
}