import getPets from "@/features/pets/actions/get-pets";
import { HeaderPets } from "@/features/pets/components/header-pets";
import { columnsPets } from "@/features/pets/components/table/columns-pets";
import { DataTablePets } from "@/features/pets/components/table/data-table-pets";

export default async function Mascotas() {
    const { pets } = await getPets();

    return (
        <>
            <HeaderPets />
            <DataTablePets data={pets} columns={columnsPets} />
        </>
    );
}