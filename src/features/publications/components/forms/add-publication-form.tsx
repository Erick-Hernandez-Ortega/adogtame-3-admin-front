'use client';
import { Button } from "@/shared/components/ui/button";
import { DialogClose, DialogFooter } from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { Textarea } from "@/shared/components/ui/textarea";
import { useAddPublication } from "../../hooks/use-add-publication";
import { OwnerCombobox } from "@/shared/components/combobox/owner-combobox";
import { PetsCombobox } from "@/shared/components/combobox/pets-combobox";

export const AddPublicationForm = () => {
    const { formAction, state, closeButtonRef, users, pets } = useAddPublication();

    return (
        <form action={formAction}>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="ownerId" className="text-right">
                        Quien es el dueño?
                    </Label>
                    <OwnerCombobox users={users} />
                    {state?.errors?.owner && <Label className="text-red-500 text-xs text-right">{state?.errors?.owner}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="petId" className="text-right">
                        Cual es la mascota?
                    </Label>
                    <PetsCombobox pets={pets} />
                    {state?.errors?.pet && <Label className="text-red-500 text-xs text-right">{state?.errors?.pet}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                        Titulo de la publicacion
                    </Label>
                    <Input id="title" className="col-span-3" type="text" name="title" required />
                    {state?.errors?.title && <Label className="text-red-500 text-xs text-right">{state?.errors?.title}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                        Descripcion de la publicacion
                    </Label>
                    <Textarea  id="description" className="col-span-3" name="description" />
                    {state?.errors?.description && <Label className="text-red-500 text-xs text-right">{state?.errors?.description}</Label>}
                </div>
            </div>
            <DialogFooter>
                <Button type="submit">Crear</Button>
                <DialogClose asChild>
                    <Button type="button" variant="secondary" ref={closeButtonRef}>
                        Cerrar
                    </Button>
                </DialogClose>
            </DialogFooter>
        </form>
    );
}