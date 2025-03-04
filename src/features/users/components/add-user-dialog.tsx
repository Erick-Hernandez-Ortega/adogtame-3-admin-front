import { Button } from "@/shared/components/ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog";
import { JSX } from "react";
import { AddUserForm } from "./add-user-form";

export const AddUserDialog = (): JSX.Element => {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Crear nuevo usuario</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Crear usuario</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when youre done.
                    </DialogDescription>
                </DialogHeader>

                <AddUserForm />

                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Cerrar
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}