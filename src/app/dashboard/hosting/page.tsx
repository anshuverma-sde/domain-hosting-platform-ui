"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Server, MoreHorizontal, Activity, HardDrive, Cpu, BarChart3, Settings, Power } from "lucide-react"
import { motion } from "framer-motion"
import DashboardLayout from "@/components/dashboard/dashboard-layout"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function DashboardHostingPage() {
  const hostingAccounts = [
    {
      id: 1,
      name: "example.com",
      type: "Shared Hosting",
      plan: "Premium",
      status: "Active",
      domain: "example.com",
      diskUsage: 65,
      diskTotal: "100 GB",
      bandwidth: 45,
      bandwidthTotal: "Unlimited",
      uptime: 99.9,
      lastBackup: "2024-12-09",
    },
    {
      id: 2,
      name: "VPS Server #1",
      type: "VPS Hosting",
      plan: "Business",
      status: "Active",
      domain: "mysite.net",
      diskUsage: 80,
      diskTotal: "200 GB",
      bandwidth: 30,
      bandwidthTotal: "4 TB",
      uptime: 99.95,
      lastBackup: "2024-12-09",
    },
    {
      id: 3,
      name: "myblog.org",
      type: "WordPress Hosting",
      plan: "Professional",
      status: "Active",
      domain: "myblog.org",
      diskUsage: 25,
      diskTotal: "50 GB",
      bandwidth: 15,
      bandwidthTotal: "Unlimited",
      uptime: 99.8,
      lastBackup: "2024-12-09",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500"
      case "Suspended":
        return "bg-red-500"
      case "Pending":
        return "bg-yellow-500"
      default:
        return "bg-gray-500"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "VPS Hosting":
        return Cpu
      case "WordPress Hosting":
        return Activity
      default:
        return Server
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">My Hosting</h1>
              <p className="text-muted-foreground">Manage your hosting accounts and services</p>
            </div>
            <Button>
              <Server className="mr-2 h-4 w-4" />
              Order Hosting
            </Button>
          </div>
        </motion.div>

        {/* Hosting Accounts */}
        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-6">
          {hostingAccounts.map((account, index) => {
            const TypeIcon = getTypeIcon(account.type)
            return (
              <motion.div key={account.id} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                          <TypeIcon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{account.name}</CardTitle>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <span>{account.type}</span>
                            <span>•</span>
                            <span>{account.plan} Plan</span>
                            <span>•</span>
                            <span>{account.domain}</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Badge className={getStatusColor(account.status)}>{account.status}</Badge>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Settings className="mr-2 h-4 w-4" />
                              Manage Account
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <BarChart3 className="mr-2 h-4 w-4" />
                              View Statistics
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <HardDrive className="mr-2 h-4 w-4" />
                              File Manager
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Power className="mr-2 h-4 w-4" />
                              Restart Service
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center">
                            <HardDrive className="h-4 w-4 mr-2" />
                            Disk Usage
                          </span>
                          <span>
                            {account.diskUsage}% of {account.diskTotal}
                          </span>
                        </div>
                        <Progress value={account.diskUsage} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center">
                            <BarChart3 className="h-4 w-4 mr-2" />
                            Bandwidth
                          </span>
                          <span>
                            {account.bandwidth}% of {account.bandwidthTotal}
                          </span>
                        </div>
                        <Progress value={account.bandwidth} className="h-2" />
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="flex items-center">
                            <Activity className="h-4 w-4 mr-2" />
                            Uptime
                          </span>
                          <span>{account.uptime}%</span>
                        </div>
                        <Progress value={account.uptime} className="h-2" />
                        <p className="text-xs text-muted-foreground">Last backup: {account.lastBackup}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>

        {hostingAccounts.length === 0 && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="text-center py-12">
              <CardContent>
                <Server className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-2xl font-semibold mb-2">No hosting accounts</h2>
                <p className="text-muted-foreground mb-6">Get started with your first hosting plan</p>
                <Button>
                  <Server className="mr-2 h-4 w-4" />
                  Order Hosting
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  )
}
