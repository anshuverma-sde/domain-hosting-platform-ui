"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { CreditCard, Download, Eye, MoreHorizontal, Calendar, DollarSign, FileText } from "lucide-react"
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

export default function DashboardBillingPage() {
  const invoices = [
    {
      id: "INV-2024-001",
      date: "2024-12-01",
      amount: 32.97,
      status: "Paid",
      description: "Monthly hosting and domain renewal",
      dueDate: "2024-12-15",
    },
    {
      id: "INV-2024-002",
      date: "2024-11-01",
      amount: 29.99,
      status: "Paid",
      description: "VPS hosting - November",
      dueDate: "2024-11-15",
    },
    {
      id: "INV-2024-003",
      date: "2024-10-01",
      amount: 19.98,
      status: "Paid",
      description: "Domain registration and SSL",
      dueDate: "2024-10-15",
    },
    {
      id: "INV-2024-004",
      date: "2024-09-01",
      amount: 45.99,
      status: "Overdue",
      description: "Hosting upgrade and add-ons",
      dueDate: "2024-09-15",
    },
  ]

  const paymentMethods = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "12/26",
      isDefault: true,
    },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiry: "08/25",
      isDefault: false,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Paid":
        return "bg-green-500"
      case "Pending":
        return "bg-yellow-500"
      case "Overdue":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Billing & Payments</h1>
              <p className="text-muted-foreground">Manage your billing information and payment history</p>
            </div>
            <Button>
              <CreditCard className="mr-2 h-4 w-4" />
              Add Payment Method
            </Button>
          </div>
        </motion.div>

        {/* Billing Overview */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Balance</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$45.99</div>
                <p className="text-xs text-muted-foreground">1 overdue invoice</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$29.99</div>
                <p className="text-xs text-muted-foreground">Due Jan 1, 2025</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">This Year</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$389.94</div>
                <p className="text-xs text-muted-foreground">12 invoices</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Payment Methods</CardTitle>
                <Button variant="outline" size="sm">
                  <CreditCard className="mr-2 h-4 w-4" />
                  Add New
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {paymentMethods.map((method) => (
                <div key={method.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded">
                      <CreditCard className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                    </div>
                    <div>
                      <div className="font-medium">
                        {method.type} ending in {method.last4}
                      </div>
                      <div className="text-sm text-muted-foreground">Expires {method.expiry}</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {method.isDefault && <Badge variant="secondary">Default</Badge>}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Set as Default</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-red-600">Remove</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Billing History */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Billing History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {invoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-green-100 dark:bg-green-900 p-2 rounded">
                        <FileText className="h-4 w-4 text-green-600 dark:text-green-300" />
                      </div>
                      <div>
                        <div className="font-medium">{invoice.id}</div>
                        <div className="text-sm text-muted-foreground">{invoice.description}</div>
                        <div className="text-sm text-muted-foreground">
                          Issued: {invoice.date} • Due: {invoice.dueDate}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="text-right">
                        <div className="font-medium">${invoice.amount}</div>
                        <Badge className={getStatusColor(invoice.status)}>{invoice.status}</Badge>
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Eye className="mr-2 h-4 w-4" />
                            View Invoice
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Download className="mr-2 h-4 w-4" />
                            Download PDF
                          </DropdownMenuItem>
                          {invoice.status === "Overdue" && (
                            <DropdownMenuItem>
                              <CreditCard className="mr-2 h-4 w-4" />
                              Pay Now
                            </DropdownMenuItem>
                          )}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Billing Address */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Billing Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="John" />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Doe" />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Address</Label>
                <Input id="address" defaultValue="123 Main Street" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" defaultValue="New York" />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input id="state" defaultValue="NY" />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input id="zipCode" defaultValue="10001" />
                </div>
              </div>
              <Button>Update Billing Address</Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </DashboardLayout>
  )
}
