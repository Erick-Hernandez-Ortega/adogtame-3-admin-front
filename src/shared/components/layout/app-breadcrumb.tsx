'use client';
import { JSX } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/shared/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

export const AppBreadcrumb = (): JSX.Element => {
    const pathname: string = usePathname();
    const pathSegments: string[] = pathname.split("/").filter(Boolean)

    return (
        <Breadcrumb>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Inicio</BreadcrumbLink>
                </BreadcrumbItem>

                {pathSegments.map((segment, index) => {
                    const href: string = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const isLast: boolean = index === pathSegments.length - 1;

                    return (
                        <div key={href} className="flex items-center">
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage>{decodeURIComponent(segment)}</BreadcrumbPage>
                                ) : (
                                    <BreadcrumbLink href={href}>
                                        {decodeURIComponent(segment)}
                                    </BreadcrumbLink>
                                )}
                            </BreadcrumbItem>
                        </div>
                    );
                })}
            </BreadcrumbList>
        </Breadcrumb>
    );
}