import { AddPetDialog } from "./dialog/add-pet-dialog";

export const HeaderPets = () => {
    return (
        <header className="flex items-center justify-between">
            <div>
                <h2 className="text-2xl mb-2">Mascotas</h2>
                <p className="tracking-wide text-sm leading-relaxed">
                    Gestiona y administra de manera eficiente a las mascotas de tu plataforma.
                    Con herramientas diseñadas para simplificar el proceso, podrás visualizar, editar y actualizar los perfiles de cada mascota,
                    asegurando que toda la información esté organizada y al día.
                </p>
            </div>
            <AddPetDialog />
        </header>
    );
}