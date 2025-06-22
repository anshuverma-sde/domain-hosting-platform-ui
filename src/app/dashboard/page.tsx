import type { Metadata } from "next"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import DashboardOverview from "@/components/dashboard/dashboard-overview"

export const metadata: Metadata = {
  title: "Dashboard - DomainHostPro",
  description: "Manage your domains and hosting services",
}

export default async function DashboardPage() {
  return (
    <DashboardLayout>
      <DashboardOverview  />
    </DashboardLayout>
  )
}
