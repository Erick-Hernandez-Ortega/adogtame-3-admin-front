import { JSX } from "react";

export default function HeaderUsers(): JSX.Element {
  return (
    <header>
      <h2 className="text-2xl mb-2">Usuarios</h2>
      <p className="tracking-wide text-sm leading-relaxed">
        Gestiona y administra fácilmente a los usuarios de tu plataforma. Podrás visualizar, editar y controlar los perfiles de
        cada usuario para mantener un entorno organizado y seguro. Simplifica la
        gestión con herramientas intuitivas y optimizadas para una mejor
        experiencia.
      </p>
    </header>
  );
}
