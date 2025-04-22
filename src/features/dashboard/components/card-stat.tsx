import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/shared/components/ui/card";
import { Stat } from "../types/dashboard.types";

export const CardStat = ({ data }: { data: Stat }) => {
    const isNoun: boolean = data.count === 1;

    return (
        <Card className="w-full mx-2">
            <CardHeader className="relative">
                <CardDescription>{data.label}</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                    {data.count} {isNoun ? "registrado" : "registrados"}
                </CardTitle>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="text-muted-foreground">
                    {isNoun ? "un registro" : "registros"} de la plataforma
                </div>
            </CardFooter>
        </Card>
    );
}