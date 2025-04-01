import { ChartArea, FilePen, House, LogOut, PawPrint, Users } from "lucide-react";

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
    },
    {
        title: "Mascotas",
        url: "/mascotas",
        icon: PawPrint,
    },
    {
        title: "Publicaciones",
        url: "/publicaciones",
        icon: FilePen,
    }
]

const navLinksStadistic: NavLink[] = [
    {
        title: "Datos detallados",
        url: "/dashboard",
        icon: ChartArea
    }
]

const navLinksSystem: NavLink[] = [
    {
        title: "Cerrar sesión",
        url: "",
        icon: LogOut
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
    },
    {
        title: "Sistema",
        items: navLinksSystem
    }
]