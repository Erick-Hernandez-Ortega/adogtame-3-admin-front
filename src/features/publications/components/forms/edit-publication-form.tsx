import { Label } from "@/shared/components/ui/label"
import { useEditPublication } from "../../hooks/use-edit-publication";
import { Input } from "@/shared/components/ui/input";
import { DialogClose, DialogFooter } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Textarea } from "@/shared/components/ui/textarea";

export const EditPublicationForm = () => {
    const { formAction, state, selectedPublication } = useEditPublication();

    return (
        <form action={formAction}>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="ownerId" className="text-right">
                        Quien es el dueño?
                    </Label>
                    <Input id="id" defaultValue={selectedPublication?.id} type="hidden" className="col-span-3" name="id" readOnly />
                    <Input id="owner" defaultValue={selectedPublication?.ownerPublication.name} readOnly className="col-span-3" name="owner" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="petId" className="text-right">
                        Cual es la mascota?
                    </Label>
                    <Input id="pet" defaultValue={selectedPublication?.petPublication.name} readOnly className="col-span-3" name="pet" required />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="title" className="text-right">
                        Titulo de la publicacion
                    </Label>
                    <Input id="title" defaultValue={selectedPublication?.title} className="col-span-3" type="text" name="title" required />
                    {state?.errors?.title && <Label className="text-red-500 text-xs text-right">{state?.errors?.title}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                        Descripcion de la publicacion
                    </Label>
                    <Textarea defaultValue={selectedPublication?.description} id="description" className="col-span-3" name="description" />
                    {state?.errors?.description && <Label className="text-red-500 text-xs text-right">{state?.errors?.description}</Label>}
                </div>
                {state?.errors?.general && <Label className="text-red-500 text-xs text-right">{state?.errors?.general}</Label>}
            </div>
            <DialogFooter>
                <Button type="submit">Editar</Button>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                        Cerrar
                    </Button>
                </DialogClose>
            </DialogFooter>
        </form>
    )
}