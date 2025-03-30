import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useEditPet } from "../../hooks/use-edit-pet";
import { DialogClose, DialogFooter } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { TypePetSelect } from "../selects/type-pet-select";
import { SizeSelect } from "../selects/size-select";
import { SexSelect } from "../selects/sex-select";
import { StirilizedRadio } from "../radio-group/stirilized-radio";

export const EditPetForm = () => {
    const { selectedPet, formAction, state, owner } = useEditPet();

    return (
        <form action={formAction}>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Nombre
                    </Label>
                    <Input id="name" defaultValue={selectedPet?.name} className="col-span-3" name="name" required />
                    {state?.errors?.name && <Label className="text-red-500 text-xs text-right">{state?.errors?.name}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="breed" className="text-right">
                        Raza de la mascota
                    </Label>
                    <Input id="breed" defaultValue={selectedPet?.breed} className="col-span-3" name="breed" required />
                    {state?.errors?.breed && <Label className="text-red-500 text-xs text-right">{state?.errors?.breed}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="age" className="text-right">
                        Edad
                    </Label>
                    <Input id="age" type="text" defaultValue={selectedPet?.age} className="col-span-3" name="age" required />
                    {state?.errors?.age && <Label className="text-red-500 text-xs text-right">{state?.errors?.age}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                        Descripcion
                    </Label>
                    <Input id="description" type="text" defaultValue={selectedPet?.description} className="col-span-3" name="description" />
                    {state?.errors?.description && <Label className="text-red-500 text-xs text-right">{state?.errors?.description}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="size" className="text-right">
                        Tamaño
                    </Label>
                    <SizeSelect name="size" value={selectedPet?.size} />
                    {state?.errors?.size && <Label className="text-red-500 text-xs text-right">{state?.errors?.size}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="typeOfPet" className="text-right">
                        Tipo de mascota
                        {selectedPet?.type}
                    </Label>
                    <TypePetSelect name="typeOfPet" value={selectedPet?.type} />
                    {state?.errors?.typeOfPet && <Label className="text-red-500 text-xs text-right">{state?.errors?.typeOfPet}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="stirilized" className="text-right">
                        Esta esterilizada la mascota?
                    </Label>
                    <StirilizedRadio name="stirilized" value={selectedPet?.stirilized} />
                    {state?.errors?.stirilized && <Label className="text-red-500 text-xs text-right">{state?.errors?.stirilized}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="sex" className="text-right">
                        Sexo de la mascota
                    </Label>
                    <SexSelect name="sex" value={selectedPet?.sex} />
                    {state?.errors?.sex && <Label className="text-red-500 text-xs text-right">{state?.errors?.sex}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="owner" className="text-right">
                        Quien es el dueño?
                    </Label>
                    <Input id="owner" defaultValue={owner?.id} type="hidden" className="col-span-3" name="owner" required readOnly />
                    <Input id="ownerName" defaultValue={owner?.name} type="text" className="col-span-3" name="ownerName" readOnly />
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