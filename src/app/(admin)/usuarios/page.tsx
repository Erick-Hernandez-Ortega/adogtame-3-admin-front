import { getUsers } from "@/features/users/actions/get-users";
import { columns } from "@/features/users/components/columns";
import { DataTable } from "@/features/users/components/data-table";
import { HeaderUsers } from "@/features/users/components/header-users";

export default async function Usuarios() {
    const { users } = await getUsers();

    return (
        <>
            <HeaderUsers />
            <DataTable columns={columns} data={users} />
        </>
    );
}