"use client"

import { useState } from "react"

interface Props {
  projectId: string
  onTaskCreated: () => void
}

export default function CreateTask({ projectId, onTaskCreated }: Props) {

  const [title, setTitle] = useState("")

  const handleCreate = async () => {

  const res = await fetch("/api/create-task", {
    method: "POST",
    body: JSON.stringify({
      title,
      project_id: projectId
    })
  })

  const data = await res.json()

  if (!data.error) {
    setTitle("")
    onTaskCreated()
  }

}

  return (
    <div className="flex gap-2">

      <input
        className="border rounded p-2 flex-1"
        placeholder="New task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <button
        onClick={handleCreate}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Add
      </button>

    </div>
  )
}