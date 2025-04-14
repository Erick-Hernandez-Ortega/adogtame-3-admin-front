'use client'
import * as React from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/shared/components/ui/sidebar"
import { links } from "@/shared/data/nav-links"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Caveat } from "next/font/google";
import { useLogout } from "@/shared/hooks/use-logout"

const caveat = Caveat({ subsets: ["latin"] });

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname: string = usePathname();
  const { closeSession } = useLogout();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <h2 className={`${caveat.className} text-center text-3xl`}>
            Adogtame
        </h2>
      </SidebarHeader>
      <SidebarContent>
        {links.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={pathname === item.url}>
                      {item.title === "Cerrar sesión" ? (
                        <button onClick={closeSession}>
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.title}
                        </button>
                      ) : (
                        <Link href={item.url}>
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.title}
                        </Link>
                      )}
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
