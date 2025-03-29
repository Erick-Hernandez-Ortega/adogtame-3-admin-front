import { Input } from "@/shared/components/ui/input";
import { useRemovePet } from "../../hooks/use-remove-pet";
import { Label } from "@/shared/components/ui/label";
import { DialogClose, DialogFooter } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";


export const RemovePetForm = () => {
    const { formAction, state, selectedPet } = useRemovePet();

    return (
        <form action={formAction}>
            <div className="grid gap-4 py-4">
                <Input type="hidden" name="id" defaultValue={selectedPet?.id} />
                <div className="text-center mb-4">
                    <h5>Seguro que quieres borrar a <span className="font-bold">{selectedPet?.name}</span>?</h5>
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