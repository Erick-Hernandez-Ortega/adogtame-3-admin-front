import getPublications from "@/features/publications/actions/get-publications";
import { HeaderPublications } from "@/features/publications/components/header-publications";
import { columnsPublications } from "@/features/publications/components/table/columns-publications";
import { DataTablePublications } from "@/features/publications/components/table/data-table-publications";

export default async function Publicaciones() {
    const { publications } = await getPublications();

    return (
        <>
            <HeaderPublications />
            <DataTablePublications columns={columnsPublications} data={publications} />
        </>
    );
}