"use client"

import { useState } from "react"

interface Props {
  onCreate: (project: any) => void
}

export default function CreateProjectModal({ onCreate }: Props) {

  const [name, setName] = useState("")
  const [client, setClient] = useState("")
  const [location, setLocation] = useState("")
  const [deadline, setDeadline] = useState("")

  const handleSubmit = () => {

    const newProject = {
    
      name,
      client,
      location,
      status: "Planning",
      progress: 0,
      deadline
    }

    onCreate(newProject)

    setName("")
    setClient("")
    setLocation("")
    setDeadline("")
  }

  return (
    <div className="bg-white border rounded-xl p-6 w-full max-w-lg">

      <h2 className="text-lg font-semibold mb-4">
        Create New Project
      </h2>

      <div className="space-y-4">

        <input
          className="w-full border rounded p-2"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full border rounded p-2"
          placeholder="Client Name"
          value={client}
          onChange={(e) => setClient(e.target.value)}
        />

        <input
          className="w-full border rounded p-2"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="date"
          className="w-full border rounded p-2"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="bg-black text-white px-4 py-2 rounded w-full"
        >
          Create Project
        </button>

      </div>

    </div>
  )
}