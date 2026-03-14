export default function RecentActivity() {
  const activities = [
    "Rahul uploaded new design for Green Villa",
    "Payment received from Arun Nair",
    "Kitchen layout task completed",
    "New project added: Lake House"
  ]

  return (
    <div className="bg-white border rounded-xl p-4">
      <h2 className="font-semibold mb-4">Recent Activity</h2>

      <ul className="space-y-2 text-sm">
        {activities.map((item, i) => (
          <li key={i} className="text-gray-600">
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}