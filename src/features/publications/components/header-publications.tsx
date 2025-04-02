// import { AddPublicationDialog } from "./dialog/add-publication-dialog";

export const HeaderPublications = () => {
    return (
        <header className="flex items-center justify-between">
            <div>
                <h2 className="text-2xl mb-2">Publicaciones</h2>
                <p className="tracking-wide text-sm leading-relaxed">
                    Gestiona y administra las publicaciones de mascotas de tu plataforma de manera eficiente.
                    Con herramientas intuitivas, podrás visualizar, editar y organizar las publicaciones que los dueños realizan sobre sus mascotas.
                    Asegura que cada publicación refleje la información precisa y relevante, manteniendo la comunidad informada y conectada.
                </p>
            </div>
            {/* Desabilitar add publication */}
            {/* <AddPublicationDialog /> */}
        </header>
    );
}