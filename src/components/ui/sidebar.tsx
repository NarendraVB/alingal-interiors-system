"use client"

import Link from "next/link"
import { LayoutDashboard, FolderKanban, CheckSquare, Users, DollarSign, FileText, Settings } from "lucide-react"

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Projects", href: "/projects", icon: FolderKanban },
  { name: "Tasks", href: "/tasks", icon: CheckSquare },
  { name: "Clients", href: "/clients", icon: Users },
  { name: "Finance", href: "/finance", icon: DollarSign },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
]

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r flex flex-col">

      <div className="p-6 text-xl font-bold">
        Alingal Interiors
      </div>

      <nav className="flex flex-col gap-2 px-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
          >
            <item.icon size={18} />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="mt-auto p-4 text-sm text-gray-500">
        Internal System
      </div>

    </div>
  )
}