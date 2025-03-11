import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog"
import { useModalStore } from "@/shared/store/modal-store";
import { JSX } from "react";
import { EditUserForm } from "../forms/edit-user-form";

export const EditUserDialog = (): JSX.Element => {
    const { closeEditModalUser } = useModalStore();

    return (
        <Dialog open onOpenChange={closeEditModalUser}>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Editar usuario</DialogTitle>
                    <DialogDescription>
                        Edita el usuario de la plataforma
                    </DialogDescription>
                </DialogHeader>

                <EditUserForm />
            </DialogContent>
        </Dialog>
    )
}