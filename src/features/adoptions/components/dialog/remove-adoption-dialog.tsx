import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";
import { useModalStore } from "@/shared/store/modal-store";
import { RemoveAdoptionForm } from "../forms/remove-adoption-form";

export const RemoveAdoptionDialog = () => {
    const { closeModalRemoveAdoption } = useModalStore();

    return (
        <Dialog open onOpenChange={closeModalRemoveAdoption}>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Eliminar adopción</DialogTitle>
                    <DialogDescription>
                        Eliminar la adopcion de la plataforma
                    </DialogDescription>
                </DialogHeader>

                <RemoveAdoptionForm />
            </DialogContent>
        </Dialog>
    );
}