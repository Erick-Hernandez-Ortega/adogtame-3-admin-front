"use client"

import { Button } from "@/shared/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Badge } from "@/shared/components/ui/badge"
import { getStatusVariant, statusPublicationTransformer } from "@/shared/transformers/status-publication.transformer"
import { Adoption } from "../../types/adoptions.types"
import { ActionRowAdoption } from "./action-row-adoption"

export const columnsAdoptions: ColumnDef<Adoption>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "pet.name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="p-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Mascota
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const pet = row.original.pet;
            return `${pet.name} (${pet.age})`
        },
    },
    {
        accessorKey: "user.name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="p-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Usuario
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => {
            const user = row.original.user;
            return `${user.name} (${user.username})`
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="p-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Estatus
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <Badge variant={getStatusVariant(row.getValue("status"))}>{statusPublicationTransformer(row.getValue("status"))}</Badge>
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
        cell: ({ row }) => <ActionRowAdoption row={row} />
    },
]
