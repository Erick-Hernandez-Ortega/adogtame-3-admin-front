"use client"
import { Button } from "@/shared/components/ui/button";
import { cn } from "@/shared/lib/utils";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useActionState, useEffect, useMemo, useState } from "react";
import { authenticate } from "@/features/auth/actions/auth";
import { AlertError } from "@/shared/components/alerts/alert-error";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const initialState = useMemo(() => ({ errors: { email: '', password: '', login: '' } }), []);
  const [state, formAction] = useActionState(authenticate, initialState);
  const [openAlert, setOpenAlert] = useState<boolean>(false);

  useEffect(() => {
    if (!!state?.errors?.login !== openAlert) setOpenAlert(!!state?.errors?.login);
  }, [state?.errors?.login, openAlert]);  

  return (
    <form className={cn("flex flex-col gap-6", className)} {...props} action={formAction}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Adogtame administrador</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Inicia sesión
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Correo electrónico</Label>
          <Input id="email" name="email" type="email" placeholder="admin@gmail.com" required />
          {state?.errors?.email && <p className="text-red-500 text-xs">{state?.errors?.email}</p>}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Contraseña</Label>
          </div>
          <Input id="password" name="password" type="password" required />
          {state?.errors?.password && <p className="text-red-500 text-xs">{state?.errors?.password}</p>}
        </div>
        <Button type="submit" className="w-full">
          Inicia sesión
        </Button>
        <AlertError
          isOpen={openAlert}
          title="Error de inicio de sesión"
          description={state?.errors?.login}
          btnCancel="Cerrar"
          onClose={() => { state.errors.login = ''; setOpenAlert(false) }}
        />
      </div>
    </form>
  )
}
