import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import DashboardOverview from "@/components/dashboard/dashboard-overview"

export const metadata: Metadata = {
  title: "Dashboard - DomainHostPro",
  description: "Manage your domains and hosting services",
}

export default async function DashboardPage() {
  // Check if user is authenticated
  const session = cookies().get("session")

  if (!session) {
    redirect("/auth/login")
  }

  // In a real app, you would fetch user data from a database
  const user = {
    name: "John Doe",
    email: "john@example.com",
  }

  return (
    <DashboardLayout>
      <DashboardOverview user={user} />
    </DashboardLayout>
  )
}
