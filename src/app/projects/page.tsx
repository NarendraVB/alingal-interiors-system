import DashboardLayout from "@/components/ui/dashboard-layout"
import ProjectTable from "@/components/projects/project-table"

const projects = [
  {
    id: "1",
    name: "Green Villa",
    client: "Arun Nair",
    location: "Kochi",
    status: "Execution",
    progress: 60,
    deadline: "Apr 20"
  },
  {
    id: "2",
    name: "Lake House",
    client: "Joseph",
    location: "Trivandrum",
    status: "Design",
    progress: 30,
    deadline: "May 10"
  },
  {
    id: "3",
    name: "City Apartment",
    client: "Meera",
    location: "Calicut",
    status: "Planning",
    progress: 10,
    deadline: "Jun 1"
  }
]

export default function ProjectsPage() {
  return (
    <DashboardLayout>

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>

        <button className="bg-black text-white px-4 py-2 rounded-lg">
          + New Project
        </button>
      </div>

      <ProjectTable projects={projects} />

    </DashboardLayout>
  )
}