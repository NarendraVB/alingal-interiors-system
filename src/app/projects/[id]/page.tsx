"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { supabase } from "@/lib/supabase"
import DashboardLayout from "@/components/ui/dashboard-layout"
import TaskList from "@/components/tasks/task-list"
import CreateTask from "@/components/tasks/create-task"

export default function ProjectPage() {

  const params = useParams()
  const id = params.id as string

  const [project, setProject] = useState<any>(null)
  const [tasks, setTasks] = useState<any[]>([])

  const fetchProject = async () => {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .eq("id", id)
      .single()

    if (data) setProject(data)
  }

  const fetchTasks = async () => {
    const { data } = await supabase
      .from("tasks")
      .select("*")
      .eq("project_id", id)

    if (data) setTasks(data)
  }

  useEffect(() => {

    if (id) {
      fetchProject()
      fetchTasks()
    }

  }, [id])

  if (!project) {
    return <div className="p-10">Loading project...</div>
  }

  return (
    <DashboardLayout>

      <h1 className="text-2xl font-bold mb-6">
        {project.name}
      </h1>

      <div className="grid grid-cols-2 gap-6">

        <div className="bg-white p-6 border rounded-xl">
          <h2 className="font-semibold">Client</h2>
          <p>{project.client}</p>
        </div>
        <div className="mt-8 space-y-4">

  <CreateTask
    projectId={id}
    onTaskCreated={fetchTasks}
  />

  <TaskList tasks={tasks}
   onTaskUpdated={(id:string,status:string)=>{
    setTasks((prev:any)=>
    prev.map((task:any)=>
    task.id===id
    ?{...task,status}
    :task
)
)
   }}
   />

</div>

        <div className="bg-white p-6 border rounded-xl">
          <h2 className="font-semibold">Location</h2>
          <p>{project.location}</p>
        </div>

      </div>

      <div className="mt-8">
        
      </div>

    </DashboardLayout>
  )
}