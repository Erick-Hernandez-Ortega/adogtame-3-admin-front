"use client"

import { Button } from "@/shared/components/ui/button"
import { ColumnDef, Row } from "@tanstack/react-table"
import { ArrowUpDown, Copy, Pencil, Trash } from "lucide-react"
import { User } from "../types/user.types"
import { MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/shared/components/ui/dropdown-menu"
import { useModalStore } from "@/shared/store/modal-store";

const ActionCell = ({ row }: { row: Row<User> }) => {
    const user: User = row.original;
    const { openEditModalUser, openRemoveModalUser } = useModalStore();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                    <MoreHorizontal className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Acciones</DropdownMenuLabel>
                <DropdownMenuItem
                    onClick={() => navigator.clipboard.writeText(user.id)}
                >
                    <Copy className="h-4 w-4" />
                    Copiar ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => openEditModalUser(user)}>
                    <Pencil className="h-4 w-4" />
                    Editar
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => openRemoveModalUser(user)}>
                    <Trash className="h-4 w-4" />
                    Eliminar
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="p-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nombre
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "username",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="p-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Nombre de Usuario
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "email",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="p-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Email
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "age",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="p-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Edad
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <span>{row.getValue("age")} años</span>
    },
    {
        accessorKey: "createdAt",
        header: "Fecha de Creación",
        cell: ({ row }) => {
            const date: Date = new Date(row.getValue("createdAt"));
            const dateFormat: string = date?.toLocaleDateString("es-ES", {
                year: "numeric",
                month: "long",
                day: "numeric",
            });

            return <span>{dateFormat}</span>
        }
    },
    {
        id: "actions",
        cell: ({ row }) => <ActionCell row={row} />
    },
]
