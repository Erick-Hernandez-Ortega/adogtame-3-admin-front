import { Button } from "@/shared/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog";
import { JSX } from "react";
import { AddUserForm } from "../forms/add-user-form";

export const AddUserDialog = (): JSX.Element => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Crear nuevo usuario</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Crear usuario</DialogTitle>
                    <DialogDescription>
                        Agrega un nuevo usuario a la plataforma
                    </DialogDescription>
                </DialogHeader>

                <AddUserForm />
            </DialogContent>
        </Dialog>
    );
}