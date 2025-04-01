import { Button } from "@/shared/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog";
import { AddPublicationForm } from "../forms/add-publication-form";

export const AddPublicationDialog = () => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Crear nueva publicacion</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Crear una publicacion</DialogTitle>
                    <DialogDescription>
                        Agrega una nueva publicacion a la plataforma
                    </DialogDescription>
                </DialogHeader>

                <AddPublicationForm />
            </DialogContent>
        </Dialog>
    );
}