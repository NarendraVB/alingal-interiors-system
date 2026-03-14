import DashboardLayout from "@/components/ui/dashboard-layout"
import StatsCard from "@/components/dashboard/stats-card"
import ProjectChart from "@/components/dashboard/project-chart"
import RecentActivity from "@/components/dashboard/recent-activity"

export default function DashboardPage() {
  return (
    <DashboardLayout>

      <h1 className="text-2xl font-bold mb-6">
        Dashboard
      </h1>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <StatsCard title="Active Projects" value="12" />
        <StatsCard title="Completed Projects" value="45" />
        <StatsCard title="Delayed Projects" value="3" />
        <StatsCard title="Revenue This Month" value="₹24L" />
      </div>
      <ProjectChart />
    <div className="grid grid-cols-3 gap-6 mt-6">

  <div className="col-span-2">
    <ProjectChart />
  </div>

  <RecentActivity />

</div>
    </DashboardLayout>
  )
}