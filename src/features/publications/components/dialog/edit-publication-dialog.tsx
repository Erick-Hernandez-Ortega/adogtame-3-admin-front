import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";
import { EditPublicationForm } from "../forms/edit-publication-form";
import { useModalStore } from "@/shared/store/modal-store";

export const EditPublicationDialog = () => {
    const { closeModalEditPublication } = useModalStore();

    return (
        <Dialog open onOpenChange={closeModalEditPublication}>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Editar publicación</DialogTitle>
                    <DialogDescription>
                        Editar la publicación de la plataforma
                    </DialogDescription>
                </DialogHeader>

                <EditPublicationForm />
            </DialogContent>
        </Dialog>
    );
}