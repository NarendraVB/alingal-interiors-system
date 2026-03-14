"use client"

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

const data = [
  { name: "Planning", projects: 3 },
  { name: "Design", projects: 5 },
  { name: "Execution", projects: 7 },
  { name: "Installation", projects: 2 },
]

export default function ProjectChart() {
  return (
    <div className="bg-white p-6 rounded-xl border h-[350px]">
      <h2 className="font-semibold mb-4">Projects by Stage</h2>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <XAxis dataKey="name" tickLine={false} axisLine={false} />
            <YAxis tickLine={false} axisLine={false} />
          <Tooltip />
          <Bar dataKey="projects" radius={[6,6,0,0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}