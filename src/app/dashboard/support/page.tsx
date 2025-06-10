"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MessageCircle, Plus, Clock, CheckCircle, AlertCircle, HelpCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
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

export default function DashboardSupportPage() {
  const [tickets, setTickets] = useState([
    {
      id: "TKT-2024-001",
      subject: "Domain transfer issue",
      status: "Open",
      priority: "High",
      created: "2024-12-09",
      lastUpdate: "2024-12-09",
      category: "Domains",
    },
    {
      id: "TKT-2024-002",
      subject: "Email setup help",
      status: "In Progress",
      priority: "Medium",
      created: "2024-12-08",
      lastUpdate: "2024-12-09",
      category: "Email",
    },
    {
      id: "TKT-2024-003",
      subject: "Billing question",
      status: "Resolved",
      priority: "Low",
      created: "2024-12-07",
      lastUpdate: "2024-12-08",
      category: "Billing",
    },
  ])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open":
        return <AlertCircle className="h-4 w-4" />
      case "In Progress":
        return <Clock className="h-4 w-4" />
      case "Resolved":
        return <CheckCircle className="h-4 w-4" />
      default:
        return <HelpCircle className="h-4 w-4" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-red-500"
      case "In Progress":
        return "bg-yellow-500"
      case "Resolved":
        return "bg-green-500"
      default:
        return "bg-gray-500"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "Low":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Support Center</h1>
              <p className="text-muted-foreground">Get help with your account and services</p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Ticket
            </Button>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeInUp}>
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full inline-flex mb-4">
                    <MessageCircle className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                  <p className="text-muted-foreground mb-4">Get instant help from our support team</p>
                  <Button className="w-full">Start Chat</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full inline-flex mb-4">
                    <HelpCircle className="h-8 w-8 text-green-600 dark:text-green-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Knowledge Base</h3>
                  <p className="text-muted-foreground mb-4">Find answers to common questions</p>
                  <Button variant="outline" className="w-full">
                    Browse Articles
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer">
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="bg-purple-100 dark:bg-purple-900 p-4 rounded-full inline-flex mb-4">
                    <Plus className="h-8 w-8 text-purple-600 dark:text-purple-300" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Submit Ticket</h3>
                  <p className="text-muted-foreground mb-4">Create a detailed support request</p>
                  <Button variant="outline" className="w-full">
                    New Ticket
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Support Tickets */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>My Support Tickets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {tickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">{getStatusIcon(ticket.status)}</div>
                      <div>
                        <div className="font-medium">{ticket.subject}</div>
                        <div className="text-sm text-muted-foreground">
                          {ticket.id} • Created {ticket.created} • Last updated {ticket.lastUpdate}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Badge variant="outline">{ticket.category}</Badge>
                      <Badge className={getPriorityColor(ticket.priority)}>{ticket.priority}</Badge>
                      <Badge className={getStatusColor(ticket.status)}>{ticket.status}</Badge>
                    </div>
                  </div>
                ))}
              </div>

              {tickets.length === 0 && (
                <div className="text-center py-8">
                  <MessageCircle className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No support tickets</h3>
                  <p className="text-muted-foreground mb-4">You haven't created any support tickets yet</p>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Create First Ticket
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </motion.div>

        {/* Create New Ticket */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Create New Support Ticket</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Category</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="domains">Domains</SelectItem>
                      <SelectItem value="hosting">Hosting</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="technical">Technical</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Priority</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="Brief description of your issue" />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Description</label>
                <Textarea placeholder="Please provide detailed information about your issue..." rows={6} />
              </div>

              <Button className="w-full">
                <Plus className="mr-2 h-4 w-4" />
                Submit Ticket
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
