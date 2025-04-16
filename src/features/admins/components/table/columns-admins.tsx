"use client"
import { Button } from "@/shared/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Admin } from "../../types/admins.types"

export const columnsAdmins: ColumnDef<Admin>[] = [
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
        }
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
                    Correo
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        }
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
    }
]
