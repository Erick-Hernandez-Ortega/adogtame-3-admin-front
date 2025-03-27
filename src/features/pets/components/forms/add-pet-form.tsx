'use client';
import { Label } from "@/shared/components/ui/label";
import { useAddPet } from "../../hooks/use-add-pet";
import { Input } from "@/shared/components/ui/input";
import { DialogClose, DialogFooter } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { SizeSelect } from "../selects/size-select";
import { TypePetSelect } from "../selects/type-pet-select";
import { StirilizedRadio } from "../radio-group/stirilized-radio";
import { SexSelect } from "../selects/sex-select";
import { OwnerCombobox } from "../combobox/owner-combobox";

export const AddPetForm = () => {
    const { formAction, state, users } = useAddPet();

    return (
        <form action={formAction}>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Nombre
                    </Label>
                    <Input id="name" className="col-span-3" name="name" required />
                    {state?.errors?.name && <Label className="text-red-500 text-xs text-right">{state?.errors?.name}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="breed" className="text-right">
                        Raza de la mascota
                    </Label>
                    <Input id="breed" className="col-span-3" name="breed" required />
                    {state?.errors?.breed && <Label className="text-red-500 text-xs text-right">{state?.errors?.breed}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="age" className="text-right">
                        Edad
                    </Label>
                    <Input id="age" type="text" className="col-span-3" name="age" required />
                    {state?.errors?.age && <Label className="text-red-500 text-xs text-right">{state?.errors?.age}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                        Descripcion
                    </Label>
                    <Input id="description" type="text" className="col-span-3" name="description" />
                    {state?.errors?.description && <Label className="text-red-500 text-xs text-right">{state?.errors?.description}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="size" className="text-right">
                        Tamaño
                    </Label>
                    <SizeSelect name="size" />
                    {state?.errors?.size && <Label className="text-red-500 text-xs text-right">{state?.errors?.size}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="typeOfPet" className="text-right">
                        Tipo de mascota
                    </Label>
                    <TypePetSelect name="typeOfPet" />
                    {state?.errors?.typeOfPet && <Label className="text-red-500 text-xs text-right">{state?.errors?.typeOfPet}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="stirilized" className="text-right">
                        Esta esterilizada la mascota?
                    </Label>
                    <StirilizedRadio name="stirilized" />
                    {state?.errors?.stirilized && <Label className="text-red-500 text-xs text-right">{state?.errors?.stirilized}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="sex" className="text-right">
                        Sexo de la mascota
                    </Label>
                    <SexSelect name="sex" />
                    {state?.errors?.sex && <Label className="text-red-500 text-xs text-right">{state?.errors?.sex}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="owner" className="text-right">
                        Quien es el dueño?
                    </Label>
                    <OwnerCombobox users={users} />
                    {state?.errors?.owner && <Label className="text-red-500 text-xs text-right">{state?.errors?.owner}</Label>}
                </div>
            </div>
            <DialogFooter>
                <Button type="submit">Agregar</Button>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                        Cerrar
                    </Button>
                </DialogClose>
            </DialogFooter>
        </form>
    );
}