import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";
import { useModalStore } from "@/shared/store/modal-store";
import { JSX } from "react";
import { RemoveUserForm } from "../forms/remove-user-form";

export const RemoveUserDialog = (): JSX.Element => {
    const { closeRemoveModalUser } = useModalStore();
    
    return (
        <Dialog open onOpenChange={closeRemoveModalUser}>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Eliminar usuario</DialogTitle>
                    <DialogDescription>
                        Eliminar el usuario de la plataforma
                    </DialogDescription>
                </DialogHeader>

                <RemoveUserForm />
            </DialogContent>
        </Dialog>
    )
}