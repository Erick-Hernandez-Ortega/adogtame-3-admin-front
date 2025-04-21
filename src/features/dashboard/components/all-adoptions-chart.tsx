'use client';
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/shared/components/ui/chart";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import { StatData } from "../types/dashboard.types";

const chartConfig = {
} satisfies ChartConfig

export const AllAdoptionsChart = ({data}: { data: StatData[] }) => {
    
    return (
        <article className="flex-1 pb-0">
            <ChartContainer
                config={chartConfig}
                className="mx-auto aspect-square max-h-[250px]"
            >
                <PieChart>
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                        data={data?.slice(1)}
                        dataKey="count"
                        nameKey="label"
                        innerRadius={60}
                        strokeWidth={5}
                    >
                        <Label
                            content={({ viewBox }) => {
                                if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                    return (
                                        <text
                                            x={viewBox.cx}
                                            y={viewBox.cy}
                                            textAnchor="middle"
                                            dominantBaseline="middle"
                                        >
                                            <tspan
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                className="fill-foreground text-3xl font-bold"
                                            >
                                                {data[0].count}
                                            </tspan>
                                            <tspan
                                                x={viewBox.cx}
                                                y={(viewBox.cy || 0) + 24}
                                                className="fill-muted-foreground"
                                            >
                                                {data[0]?.label}
                                            </tspan>
                                        </text>
                                    )
                                }
                            }}
                        />
                    </Pie>
                </PieChart>
            </ChartContainer>
            <div className="text-center text-sm">
                <p className="flex items-center justify-center gap-2">
                    {data[0]?.label} disponibles actualmente
                    <TrendingUp className="h-4 w-4" />
                </p>
            </div>
        </article>
    );
}