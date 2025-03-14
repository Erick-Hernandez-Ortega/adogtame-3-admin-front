import { Button } from "@/shared/components/ui/button"
import { DialogClose, DialogFooter } from "@/shared/components/ui/dialog"
import { Input } from "@/shared/components/ui/input"
import { Label } from "@/shared/components/ui/label"
import { JSX } from "react"
import { useUserRemoveAction } from "../../hooks/use-user-remove-action"

export const RemoveUserForm = (): JSX.Element => {
    const { selectedUser, formAction, state } = useUserRemoveAction();

    return (
        <form action={formAction}>
            <div className="grid gap-4 py-4">
                <Input type="hidden" name="id" defaultValue={selectedUser?.id} />
                <div className="text-center mb-4">
                    <h5>Seguro que quieres borrar a <span className="font-bold">{selectedUser?.name}</span>?</h5>
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
    )
}