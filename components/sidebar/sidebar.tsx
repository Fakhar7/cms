"use client"

import * as React from "react"
import {
  MessagesSquare,
  SquarePen,
  Settings2,
  UsersRound
} from "lucide-react"

import { NavMain } from "~/components/sidebar/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
  SidebarTrigger,
} from "~/components/ui/sidebar"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },

  navMain: [
    {
      title: "Posts",
      url: "#",
      icon: SquarePen,
      isActive: true,
      items: [
        {
          title: "Write",
          url: "#",
        },
        {
          title: "Draft",
          url: "#",
        },
        {
          title: "Published",
          url: "#",
        },
        {
          title: "Categories",
          url: "#",
        },
        {
          title: "Tags",
          url: "#",
        },
      ],
    },
    {
      title: "Users",
      url: "#",
      icon: UsersRound,
      items: [
        {
          title: "Admins",
          url: "#",
        },
        {
          title: "Subscribers",
          url: "#",
        },
        {
          title: "Banned",
          url: "#",
        },
      ],
    },
    {
      title: "Messages",
      url: "#",
      icon: MessagesSquare,
      items: [
        {
          title: "Emails",
          url: "#",
        },
        {
          title: "Others",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "/settings/general",
        },
        {
          title: "Appearance",
          url: "/settings/appearance",
        }
      ],
    },
  ]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
