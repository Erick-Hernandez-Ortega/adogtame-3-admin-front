import { Button } from "@/shared/components/ui/button";
import { DialogClose, DialogFooter } from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useAdoptionRemove } from "../../hooks/use-adoption-remove";

export const RemoveAdoptionForm = () => {
    const { formAction, state, selectedAdoption } = useAdoptionRemove();

    return (
        <form action={formAction}>
            <div className="grid gap-4 py-4">
                <Input type="hidden" name="id" defaultValue={selectedAdoption?.id} />
                <div className="text-center mb-4">
                    <h5>Seguro que quieres esta adopcion</h5>
                    de la mascota <span className="font-bold">{selectedAdoption?.pet?.name}</span> del usuario
                    <span className="font-bold"> {selectedAdoption?.user?.name}</span>?
                    {state?.errors?.general && <Label className="text-red-500 text-xs text-right">{state?.errors?.general}</Label>}
                </div>
            </div>
            <DialogFooter>
                <Button type="submit" variant="destructive">Borrar</Button>
                <DialogClose asChild>
                    <Button type="button" variant="secondary">
                        Cerrar
                    </Button>
                </DialogClose>
            </DialogFooter>
        </form>
    );
}