"use client"

import { supabase } from "@/lib/supabase"
import { useRouter } from "next/navigation"

export default function TaskList({ tasks, onTaskUpdated }: any) {

  const router = useRouter()

  const toggleTask = async (task: any) => {

  const newStatus =
    task.status === "completed"
      ? "pending"
      : "completed"

  const { error } = await supabase
    .from("tasks")
    .update({ status: newStatus })
    .eq("id", task.id)

  if (!error) {
    onTaskUpdated(task.id, newStatus)
  }

}

  return (
    <div className="bg-white border rounded-xl p-6">

      <h2 className="text-lg font-semibold mb-4">
        Tasks
      </h2>

      <ul className="space-y-3">

        {tasks.map((task: any) => (

          <li
            key={task.id}
            className="flex items-center gap-3"
          >

            <input
              type="checkbox"
              checked={task.status === "completed"}
              onChange={() => toggleTask(task)}
            />

            <span
              className={
                task.status === "completed"
                  ? "line-through text-gray-400"
                  : ""
              }
            >
              {task.title}
            </span>

          </li>

        ))}

      </ul>

    </div>
  )
}