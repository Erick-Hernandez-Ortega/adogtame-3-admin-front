import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";
import { useModalStore } from "@/shared/store/modal-store";
import { EditAdoptionForm } from "../forms/edit-adoption-form";

export const EditAdoptionDialog = () => {
    const { closeModalEditAdoption } = useModalStore();
    
    return (
        <Dialog open onOpenChange={closeModalEditAdoption}>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Editar una adopción</DialogTitle>
                    <DialogDescription>
                        Editar la adopcion de la plataforma
                    </DialogDescription>
                </DialogHeader>

                <EditAdoptionForm />
            </DialogContent>
        </Dialog>
    );
}