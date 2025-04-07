import getAdoptions from "@/features/adoptions/actions/get-adoptions";
import { HeaderAdoptions } from "@/features/adoptions/components/header-adoptions";
import { columnsAdoptions } from "@/features/adoptions/components/table/columns-adoptions";
import { DataTableAdoptions } from "@/features/adoptions/components/table/data-table-adoptions";

export default async function Adopciones() {
    const { adoptions } = await getAdoptions();

    return (
        <>
            <HeaderAdoptions />
            <DataTableAdoptions columns={columnsAdoptions} data={adoptions} />
        </>
    );
}