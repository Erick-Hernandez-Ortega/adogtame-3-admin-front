import { LoginForm } from "@/features/auth/components/login-form";
import { PawPrint } from "lucide-react";
import Image from "next/image";

export default async function Auth() {

  return (
    <main className="grid min-h-svh lg:grid-cols-2">
      <article className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <div className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <PawPrint className="size-4" />
            </div>
            Adogtame
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </article>
      <div className="relative hidden bg-muted lg:block">
        <Image
          src="/images/main-picture.webp"
          fill
          priority
          alt="dog"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </main>
  );
}
