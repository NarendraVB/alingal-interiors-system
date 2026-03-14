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
    <div className="h-80 bg-white p-4 rounded-xl border">
      <h2 className="font-semibold mb-4">Projects by Stage</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="projects" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}