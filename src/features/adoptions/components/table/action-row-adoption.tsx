import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/shared/components/ui/dropdown-menu"
import { Row } from "@tanstack/react-table";
import { Button } from "@/shared/components/ui/button";
import { Copy, MoreHorizontal, Pencil, Trash } from "lucide-react";
// import { useModalStore } from "@/shared/store/modal-store";
import { Adoption } from "../../types/adoptions.types";
import { useModalStore } from "@/shared/store/modal-store";

export const ActionRowAdoption = ({ row }: { row: Row<Adoption> }) => {
    const adoption: Adoption = row.original;
    const { openModalRemoveAdoption, openModalEditAdoption } = useModalStore();

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
                    onClick={() => navigator.clipboard.writeText(adoption.id)}
                >
                    <Copy className="h-4 w-4" />
                    Copiar ID
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => openModalEditAdoption(adoption)}>
                    <Pencil className="h-4 w-4" />
                    Editar
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => openModalRemoveAdoption(adoption)}>
                    <Trash className="h-4 w-4" />
                    Eliminar
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
