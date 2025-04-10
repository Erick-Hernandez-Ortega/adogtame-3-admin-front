'use client';
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useActionState, useMemo } from "react";
import addUser from "../../actions/add-user";
import { DialogClose, DialogFooter } from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";

export const AddUserForm = () => {
    const initialState = useMemo(() => ({ errors: { email: '', password: '', name: '', username: '', age: '' } }), []);
    const [state, formAction] = useActionState(addUser, initialState);

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
                    <Label htmlFor="username" className="text-right">
                        Nombre de usuario
                    </Label>
                    <Input id="username" className="col-span-3" name="username" />
                    {state?.errors?.username && <Label className="text-red-500 text-xs text-right">{state?.errors?.username}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                        Correo
                    </Label>
                    <Input id="email" type="email" className="col-span-3" name="email" />
                    {state?.errors?.email && <Label className="text-red-500 text-xs text-right">{state?.errors?.email}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="password" className="text-right">
                        Contraseña
                    </Label>
                    <Input id="password" type="password" className="col-span-3" name="password" />
                    {state?.errors?.password && <Label className="text-red-500 text-xs text-right">{state?.errors?.password}</Label>}
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="age" className="text-right">
                        Edad
                    </Label>
                    <Input id="age" type="number" className="col-span-3" name="age" />
                    {state?.errors?.age && <Label className="text-red-500 text-xs text-right">{state?.errors?.age}</Label>}
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