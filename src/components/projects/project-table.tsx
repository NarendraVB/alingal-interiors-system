"use client"

import { Project } from "@/types/project"
import { useRouter } from "next/navigation"

interface Props {
  projects: Project[]
}

export default function ProjectTable({ projects }: Props) {

  const router = useRouter()

  return (
    <div className="bg-white border rounded-xl">

      <table className="w-full">

        <thead className="border-b bg-gray-50">
          <tr className="text-left text-sm">
            <th className="p-4">Project</th>
            <th>Client</th>
            <th>Location</th>
            <th>Status</th>
            <th>Progress</th>
            <th>Deadline</th>
          </tr>
        </thead>

        <tbody>

          {projects.map((project) => (
            <tr
              key={project.id}
              onClick={() => router.push(`/projects/${project.id}`)}
              className="border-b hover:bg-gray-50 cursor-pointer"
            >

              <td className="p-4 font-medium">{project.name}</td>
              <td>{project.client}</td>
              <td>{project.location}</td>
              <td>{project.status}</td>
              <td>{project.progress}%</td>
              <td>{project.deadline}</td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  )
}