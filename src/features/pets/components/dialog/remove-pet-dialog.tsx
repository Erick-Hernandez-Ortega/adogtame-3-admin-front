import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";
import { useModalStore } from "@/shared/store/modal-store";

export const RemovePetDialog = () => {
    const { closeModalRemovePet } = useModalStore();

    return (
        <Dialog open onOpenChange={closeModalRemovePet}>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Eliminar mascota</DialogTitle>
                    <DialogDescription>
                        Eliminar la mascota de la plataforma
                    </DialogDescription>
                </DialogHeader>

                {/* <RemoveUserForm /> */}
            </DialogContent>
        </Dialog>
    );
}