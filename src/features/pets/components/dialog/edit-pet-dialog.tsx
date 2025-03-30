import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog"
import { useModalStore } from "@/shared/store/modal-store";
import { EditPetForm } from "../forms/edit-pet-form";

export const EditPetDialog = () => {
    const { closeModalEditPet } = useModalStore();
    
    return (
        <Dialog open onOpenChange={closeModalEditPet}>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Editar mascota</DialogTitle>
                    <DialogDescription>
                        Editar la mascota de la plataforma
                    </DialogDescription>
                </DialogHeader>

                <EditPetForm />
            </DialogContent>
        </Dialog>
    )
}