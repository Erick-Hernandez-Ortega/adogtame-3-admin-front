import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/shared/components/ui/dialog";
import { useModalStore } from "@/shared/store/modal-store";
import { RemovePublicationForm } from "../forms/remove-publication-form";

export const RemovePublicationDialog = () => {
    const { closeModalRemovePublication } = useModalStore();

    return (
        <Dialog open onOpenChange={closeModalRemovePublication}>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Eliminar publicación</DialogTitle>
                    <DialogDescription>
                        Eliminar la publicación de la plataforma
                    </DialogDescription>
                </DialogHeader>

                <RemovePublicationForm />
            </DialogContent>
        </Dialog>
    );
}