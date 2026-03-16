"use client"

export default function TaskList({ tasks }: any) {

  return (
    <div className="bg-white border rounded-xl p-6">

      <h2 className="text-lg font-semibold mb-4">
        Tasks
      </h2>

      <ul className="space-y-2">

        {tasks.map((task: any) => (
          <li
            key={task.id}
            className="flex items-center gap-2"
          >
            <input type="checkbox" />

            <span>
              {task.title}
            </span>

          </li>
        ))}

      </ul>

    </div>
  )
}