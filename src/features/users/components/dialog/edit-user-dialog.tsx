import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog"
import { useModalStore } from "@/shared/store/modal-store";
import { JSX } from "react";

export const EditUserDialog = (): JSX.Element => {
    const { closeEditModalUser } = useModalStore();

    return (
        <Dialog open onOpenChange={closeEditModalUser}>
            <DialogContent >
                <DialogHeader>
                    <DialogTitle>Editar usuario</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}