import { Button } from "@/shared/components/ui/button";
import { DialogClose, DialogFooter } from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useRemovePublication } from "../../hooks/use-remove-publication";

export const RemovePublicationForm = () => {
    const { formAction, state, selectedPublication } = useRemovePublication();

    return (
        <form action={formAction}>
            <div className="grid gap-4 py-4">
                <Input type="hidden" name="id" defaultValue={selectedPublication?.id} />
                <div className="text-center mb-4">
                    <h5>Seguro que quieres esta publicación <span className="font-bold">{selectedPublication?.title}</span></h5>
                    de la mascota <span className="font-bold">{selectedPublication?.petPublication?.name}</span> del usuario
                    <span className="font-bold"> {selectedPublication?.ownerPublication?.name}</span>?
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