import { AddPetForm } from "../forms/add-pet-form";
import { Button } from "@/shared/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog";

export const AddPetDialog = () => {
    
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Crear nueva mascota</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Crear mascota</DialogTitle>
                    <DialogDescription>
                        Agrega una nueva mascota a la plataforma
                    </DialogDescription>
                </DialogHeader>

                <AddPetForm />
            </DialogContent>
        </Dialog>
    );
}