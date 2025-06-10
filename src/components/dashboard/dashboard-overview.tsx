"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Globe, Server, CreditCard, Calendar, TrendingUp } from "lucide-react"
import { motion } from "framer-motion"

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

export default function DashboardOverview({ user }: { user: { name: string; email: string } }) {
  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <h1 className="text-3xl font-bold">Welcome back, {user.name}!</h1>
        <p className="text-muted-foreground">Here's an overview of your account and services.</p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Domains</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">+2 from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Hosting Plans</CardTitle>
              <Server className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">2 shared, 1 VPS</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Spend</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$89.97</div>
              <p className="text-xs text-muted-foreground">+$15.00 from last month</p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Renewals Due</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2</div>
              <p className="text-xs text-muted-foreground">Within 30 days</p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full">
                  <Globe className="h-4 w-4 text-green-600 dark:text-green-300" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Domain registered</p>
                  <p className="text-xs text-muted-foreground">example.com - 2 days ago</p>
                </div>
                <Badge variant="secondary">New</Badge>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full">
                  <Server className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Hosting upgraded</p>
                  <p className="text-xs text-muted-foreground">VPS Business plan - 1 week ago</p>
                </div>
                <Badge variant="outline">Upgrade</Badge>
              </div>

              <div className="flex items-center space-x-4">
                <div className="bg-purple-100 dark:bg-purple-900 p-2 rounded-full">
                  <CreditCard className="h-4 w-4 text-purple-600 dark:text-purple-300" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Payment processed</p>
                  <p className="text-xs text-muted-foreground">$29.99 - 2 weeks ago</p>
                </div>
                <Badge variant="secondary">Paid</Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" variant="outline">
                <Globe className="mr-2 h-4 w-4" />
                Register New Domain
              </Button>

              <Button className="w-full justify-start" variant="outline">
                <Server className="mr-2 h-4 w-4" />
                Upgrade Hosting
              </Button>

              <Button className="w-full justify-start" variant="outline">
                <CreditCard className="mr-2 h-4 w-4" />
                View Billing
              </Button>

              <Button className="w-full justify-start" variant="outline">
                <TrendingUp className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Service Status */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
        <Card>
          <CardHeader>
            <CardTitle>Service Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">example.com</span>
                  <Badge className="bg-green-500">Active</Badge>
                </div>
                <Progress value={85} className="h-2" />
                <p className="text-xs text-muted-foreground">SSL expires in 85 days</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">mysite.net</span>
                  <Badge variant="destructive">Expiring Soon</Badge>
                </div>
                <Progress value={15} className="h-2" />
                <p className="text-xs text-muted-foreground">Renew in 15 days</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">VPS Server</span>
                  <Badge className="bg-green-500">Online</Badge>
                </div>
                <Progress value={65} className="h-2" />
                <p className="text-xs text-muted-foreground">65% disk usage</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}
