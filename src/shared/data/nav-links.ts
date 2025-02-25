import { ChartArea, House, Users } from "lucide-react";

interface NavLink {
    title: string;
    url: string;
    icon: React.ElementType;
}

const navLinksAdmin: NavLink[] = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: House
    },
    {
        title: "Usuarios",
        url: "/usuarios",
        icon: Users,
    }
]

const navLinksStadistic: NavLink[] = [
    {
        title: "Datos detallados",
        url: "/dashboard",
        icon: ChartArea
    }
]

export const links = [
    {
        title: "Administrar",
        items: navLinksAdmin
    },
    {
        title: "Estadisticas",
        items: navLinksStadistic
    }
]