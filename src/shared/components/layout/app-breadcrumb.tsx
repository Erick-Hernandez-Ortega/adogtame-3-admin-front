'use client';
import { JSX } from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/shared/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import { links } from "@/shared/data/nav-links";

export const AppBreadcrumb = (): JSX.Element => {
    const pathname: string = usePathname();
    const pathSegments: string[] = pathname.split("/").filter(Boolean);
    const mainCategory = links.find((category) =>
        category.items.some((item) => pathname.startsWith(item.url))
    );

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {mainCategory && (
                    <BreadcrumbItem>
                        <BreadcrumbLink href={mainCategory?.items[0]?.url}>
                            {mainCategory?.title}
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                )}

                {pathSegments.map((segment, index) => {
                    const href: string = `/${pathSegments.slice(0, index + 1).join("/")}`;
                    const isLast: boolean = index === pathSegments?.length - 1;

                    return (
                        <div key={href} className="flex items-center">
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                {isLast ? (
                                    <BreadcrumbPage className="capitalize">{decodeURIComponent(segment)}</BreadcrumbPage>
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