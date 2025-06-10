"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe, Search, MoreHorizontal, Calendar, Shield, Settings, RefreshCwIcon as Refresh } from "lucide-react"
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

export default function DashboardDomainsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const domains = [
    {
      name: "example.com",
      status: "Active",
      registrationDate: "2020-01-15",
      expirationDate: "2025-01-15",
      autoRenew: true,
      privacy: true,
      nameServers: "DomainHost Pro",
    },
    {
      name: "mysite.net",
      status: "Expiring Soon",
      registrationDate: "2021-03-20",
      expirationDate: "2024-12-25",
      autoRenew: false,
      privacy: false,
      nameServers: "Custom",
    },
    {
      name: "myblog.org",
      status: "Active",
      registrationDate: "2022-06-10",
      expirationDate: "2025-06-10",
      autoRenew: true,
      privacy: true,
      nameServers: "DomainHost Pro",
    },
  ]

  const filteredDomains = domains.filter((domain) => domain.name.toLowerCase().includes(searchTerm.toLowerCase()))

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-500"
      case "Expiring Soon":
        return "bg-yellow-500"
      case "Expired":
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
              <h1 className="text-3xl font-bold">My Domains</h1>
              <p className="text-muted-foreground">Manage your domain portfolio</p>
            </div>
            <Button>
              <Globe className="mr-2 h-4 w-4" />
              Register New Domain
            </Button>
          </div>
        </motion.div>

        {/* Search and Filters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search domains..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button variant="outline">Filter</Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Domains List */}
        <motion.div variants={staggerContainer} initial="initial" animate="animate" className="space-y-4">
          {filteredDomains.map((domain, index) => (
            <motion.div key={domain.name} variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full">
                        <Globe className="h-6 w-6 text-blue-600 dark:text-blue-300" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{domain.name}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Expires: {domain.expirationDate}</span>
                          <span>•</span>
                          <span>NS: {domain.nameServers}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Badge className={getStatusColor(domain.status)}>{domain.status}</Badge>
                        {domain.autoRenew && <Badge variant="outline">Auto-Renew</Badge>}
                        {domain.privacy && (
                          <Badge variant="outline">
                            <Shield className="h-3 w-3 mr-1" />
                            Privacy
                          </Badge>
                        )}
                      </div>

                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>
                            <Settings className="mr-2 h-4 w-4" />
                            Manage DNS
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Refresh className="mr-2 h-4 w-4" />
                            Renew Domain
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Shield className="mr-2 h-4 w-4" />
                            Privacy Settings
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Calendar className="mr-2 h-4 w-4" />
                            Auto-Renew Settings
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredDomains.length === 0 && (
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Card className="text-center py-12">
              <CardContent>
                <Globe className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-2xl font-semibold mb-2">No domains found</h2>
                <p className="text-muted-foreground mb-6">
                  {searchTerm ? "Try adjusting your search terms" : "Register your first domain to get started"}
                </p>
                <Button>
                  <Globe className="mr-2 h-4 w-4" />
                  Register Domain
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </DashboardLayout>
  )
}
