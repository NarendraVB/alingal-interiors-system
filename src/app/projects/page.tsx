"use client"

import { useState, useEffect } from "react"
import DashboardLayout from "@/components/ui/dashboard-layout"
import ProjectTable from "@/components/projects/project-table"
import CreateProjectModal from "@/components/projects/create-project-modal"
import { supabase } from "@/lib/supabase"

export default function ProjectsPage() {

  const [projects, setProjects] = useState<any[]>([])
  const [showModal, setShowModal] = useState(false)

  // fetch projects from database
  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from("projects")
      .select("*")

    console.log("Fetch:", data)
    console.log("Fetch error:", error)

    if (data) setProjects(data)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  // create project
  const addProject = async (project: any) => {

    const { data, error } = await supabase
      .from("projects")
      .insert([project])
      .select()

    console.log("Insert:", data)
    console.log("Insert error:", error)

    if (data) {
      setProjects([...projects, data[0]])
    }
  }

  return (
    <DashboardLayout>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-black text-white px-4 py-2 rounded-lg"
        >
          + New Project
        </button>
      </div>

      <ProjectTable projects={projects} />

      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <CreateProjectModal
            onCreate={(project) => {
              addProject(project)
              setShowModal(false)
            }}
          />
        </div>
      )}

    </DashboardLayout>
  )
}