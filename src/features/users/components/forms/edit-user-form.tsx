import { Button } from "@/shared/components/ui/button";
import { DialogClose, DialogFooter } from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { editUser } from "../../actions/edit-user";
import { JSX, useActionState, useMemo } from "react";
import { useModalStore } from "@/shared/store/modal-store";

export const EditUserForm = (): JSX.Element => {
    const initialState = useMemo(() => ({ errors: { email: '', password: '', name: '', username: '', age: '' } }), []);
    const [state, formAction] = useActionState(editUser, initialState);
    const { selectedUser } = useModalStore();

    return (
        <form action={formAction}>
            <div className="grid gap-4 py-4">
                <Input type="hidden" name="id" defaultValue={selectedUser?.id} />
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                        Nombre
                    </Label>
                    <Input id="name" defaultValue={selectedUser?.name} className="col-span-3" name="name" required />
                    {state?.errors?.name && <Label className="text-red-500 text-xs text-right">{state?.errors?.name}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="username" className="text-right">
                        Nombre de usuario
                    </Label>
                    <Input id="username" defaultValue={selectedUser?.username} className="col-span-3" name="username" required />
                    {state?.errors?.username && <Label className="text-red-500 text-xs text-right">{state?.errors?.username}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                        Correo
                    </Label>
                    <Input id="email" type="email" defaultValue={selectedUser?.email} className="col-span-3" name="email" required />
                    {state?.errors?.email && <Label className="text-red-500 text-xs text-right">{state?.errors?.email}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="age" className="text-right">
                        Edad
                    </Label>
                    <Input id="age" type="number" defaultValue={selectedUser?.age} className="col-span-3" name="age" required />
                    {state?.errors?.age && <Label className="text-red-500 text-xs text-right">{state?.errors?.age}</Label>}
                </div>
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