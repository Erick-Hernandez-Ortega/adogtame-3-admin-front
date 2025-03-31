// import "./globals.css";

import { AppBreadcrumb } from "@/shared/components/layout/app-breadcrumb";
import { AppSidebar } from "@/shared/components/layout/app-sidebar";
import { Separator } from "@/shared/components/ui/separator";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/shared/components/ui/sidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adogtame Administrador",
  description: "Adogtame Administrador",
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <AppBreadcrumb />
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
