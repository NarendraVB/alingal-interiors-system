"use client"

import { Bell, Search } from "lucide-react"

export default function Topbar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white border-b">

      <div className="flex items-center gap-3">
        <Search size={18} />
        <input
          className="outline-none"
          placeholder="Search projects..."
        />
      </div>

      <div className="flex items-center gap-6">

        <Bell size={20} />

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gray-300" />
          <span className="text-sm font-medium">Admin</span>
        </div>

      </div>

    </div>
  )
}