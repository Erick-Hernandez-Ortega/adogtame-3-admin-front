import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/shared/components/ui/dropdown-menu"
import { Pet } from "../../types/pet.types";
import { Row } from "@tanstack/react-table";
import { Button } from "@/shared/components/ui/button";
import { Copy, MoreHorizontal, Trash } from "lucide-react";
import { useModalStore } from "@/shared/store/modal-store";

export const ActionRowPet = ({ row }: { row: Row<Pet> }) => {
    const pet: Pet = row.original;
    const { openModalRemovePet } = useModalStore();

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
                    onClick={() => navigator.clipboard.writeText(pet.id)}
                >
                    <Copy className="h-4 w-4" />
                    Copiar ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                {/* <DropdownMenuItem onClick={() => openEditModalUser(user)}>
                    <Pencil className="h-4 w-4" />
                    Editar
                </DropdownMenuItem> */}
                <DropdownMenuItem onClick={() => openModalRemovePet(pet)}>
                    <Trash className="h-4 w-4" />
                    Eliminar
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
