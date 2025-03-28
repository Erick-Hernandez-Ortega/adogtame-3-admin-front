"use client"

import { Button } from "@/shared/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"
import { Pet } from "../../types/pet.types"
import { ActionRowPet } from "./action-row-pet"

export const columnsPets: ColumnDef<Pet>[] = [
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
        accessorKey: "type",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="p-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Tipo de Mascota
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "breed",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="p-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Raza
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
        cell: ({ row }) => <span>{row.getValue("age")}</span>
    },
    {
        accessorKey: "size",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    className="p-0"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Tamaño
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => <span>{row.getValue("size")}</span>
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
        cell: ({ row }) => <ActionRowPet row={row} />
    },
]
