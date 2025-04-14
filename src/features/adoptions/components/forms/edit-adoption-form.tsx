import { Label } from "@/shared/components/ui/label";
import { useAdoptionUpdate } from "../../hooks/use-adoption-update";
import { Input } from "@/shared/components/ui/input";
import { Textarea } from "@/shared/components/ui/textarea";
import { DialogClose, DialogFooter } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/components/ui/select";

export const EditAdoptionForm = () => {
    const { formAction, selectedAdoption, state } = useAdoptionUpdate();
    const namePet: string = `${selectedAdoption?.pet?.name}, ${selectedAdoption?.pet?.breed} de ${selectedAdoption?.pet?.age}`;

    return (
        <form action={formAction}>
            <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="userId" className="text-right">
                        Usuario interesado
                    </Label>
                    <Input id="id" defaultValue={selectedAdoption?.id} type="hidden" className="col-span-3" name="id" readOnly />
                    <Input id="userId" defaultValue={selectedAdoption?.user.name} readOnly className="col-span-3" name="userId" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="pet" className="text-right">
                        Mascota
                    </Label>
                    <Input id="pet" defaultValue={namePet} readOnly className="col-span-3" name="pet" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="status" className="text-right">
                        Estado
                    </Label>
                    <Select name="status" defaultValue={selectedAdoption?.status}>
                        <SelectTrigger className="col-span-3">
                            <SelectValue placeholder="Estatus" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="approved">Aprobado</SelectItem>
                            <SelectItem value="pending">Pendiente</SelectItem>
                            <SelectItem value="rejected">Rechazado</SelectItem>
                            <SelectItem value="completed">Completado</SelectItem>
                        </SelectContent>
                    </Select>
                    {state?.errors?.status && <Label className="text-red-500 text-xs text-right">{state?.errors?.status}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="reason" className="text-right">
                        Motivo de la adopcion
                    </Label>
                    <Input id="reason" defaultValue={selectedAdoption?.reason} className="col-span-3" type="text" name="reason" />
                    {state?.errors?.reason && <Label className="text-red-500 text-xs text-right">{state?.errors?.reason}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="comments" className="text-right">
                        Comentarios del administrador
                    </Label>
                    <Textarea defaultValue={selectedAdoption?.comments} id="comments" className="col-span-3" name="comments" />
                    {state?.errors?.comments && <Label className="text-red-500 text-xs text-right">{state?.errors?.comments}</Label>}
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
    );
}