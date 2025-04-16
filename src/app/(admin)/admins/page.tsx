import getAdmins from "@/features/admins/actions/get-admins";
import { HeaderAdmins } from "@/features/admins/components/header-admins";
import { columnsAdmins } from "@/features/admins/components/table/columns-admins";
import { DataTableAdmins } from "@/features/admins/components/table/data-table-admins";

export default async function Admins() {
    const { admins } = await getAdmins();
    
    return (
        <>
            <HeaderAdmins />
            <DataTableAdmins data={admins} columns={columnsAdmins} />
        </>
    );
}