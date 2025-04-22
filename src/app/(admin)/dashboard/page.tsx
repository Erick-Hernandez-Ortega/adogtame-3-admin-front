import getStats from "@/features/dashboard/actions/get-stats";
import { BarChartComponent } from "@/features/dashboard/components/bar-char-component";
import { CardStat } from "@/features/dashboard/components/card-stat";
import { HeaderDashboard } from "@/features/dashboard/components/header-dashboard";
import { PieChartComponent } from "@/features/dashboard/components/pie-chart-component";

export default async function Dashboard() {
    const { totalPets, totalAdoptions, totalPublications, totalUsers, totalAdmins, totalUsersByMonth } = await getStats();

    return (
        <>
            <HeaderDashboard />
            <div className="grid grid-cols-6 grid-rows-6 gap-0">
                <div className="row-span-2 col-span-2 flex items-center justify-center">
                    <PieChartComponent data={totalPets} />
                </div>
                <div className="row-span-2 col-span-2 flex items-center justify-center">
                    <PieChartComponent data={totalAdoptions} />
                </div>
                <div className="row-span-2 col-span-2 flex items-center justify-center">
                    <PieChartComponent data={totalPublications} />
                </div>
                <div className="row-span-2 col-span-6 flex items-center justify-center">
                    <BarChartComponent data={totalUsersByMonth} title="Usuarios registrados por mes" />
                </div>
                <div className="row-span-2 col-span-3 flex items-center justify-center">
                    <CardStat data={totalUsers} />
                </div>
                <div className="row-span-2 col-span-3 flex items-center justify-center">
                    <CardStat data={totalAdmins} />
                </div>
            </div>
        </>
    );
}