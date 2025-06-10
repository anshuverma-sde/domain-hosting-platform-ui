"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Globe, Calendar, User, Shield } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function WhoisPage() {
  const [domain, setDomain] = useState("")
  const [loading, setLoading] = useState(false)
  const [results, setResults] = useState<any>(null)

  const handleSearch = async () => {
    if (!domain) return

    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setResults({
        domain: domain,
        status: "Active",
        registrar: "DomainHost Pro",
        registrationDate: "2020-01-15",
        expirationDate: "2025-01-15",
        nameServers: ["ns1.domainhostpro.com", "ns2.domainhostpro.com"],
        registrant: "Privacy Protected",
        admin: "Privacy Protected",
        tech: "Privacy Protected",
      })
      setLoading(false)
    }, 1500)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              WHOIS Lookup
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Find detailed information about any domain name registration
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Domain WHOIS Lookup</CardTitle>
                <p className="text-muted-foreground">Enter a domain name to view its registration information</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex gap-2">
                  <Input
                    placeholder="example.com"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="h-12"
                    onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  />
                  <Button onClick={handleSearch} disabled={loading} className="h-12 px-6">
                    {loading ? (
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    ) : (
                      <Search className="h-4 w-4" />
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Results Section */}
      {results && (
        <section className="py-16 bg-background">
          <motion.div className="container mx-auto px-4">
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl">WHOIS Information for {results.domain}</CardTitle>
                    <Badge className="bg-green-500">{results.status}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Globe className="h-5 w-5 text-blue-600 mr-3" />
                        <div>
                          <div className="font-medium">Registrar</div>
                          <div className="text-muted-foreground">{results.registrar}</div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-green-600 mr-3" />
                        <div>
                          <div className="font-medium">Registration Date</div>
                          <div className="text-muted-foreground">{results.registrationDate}</div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-red-600 mr-3" />
                        <div>
                          <div className="font-medium">Expiration Date</div>
                          <div className="text-muted-foreground">{results.expirationDate}</div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center">
                        <User className="h-5 w-5 text-purple-600 mr-3" />
                        <div>
                          <div className="font-medium">Registrant</div>
                          <div className="text-muted-foreground">{results.registrant}</div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-orange-600 mr-3" />
                        <div>
                          <div className="font-medium">Admin Contact</div>
                          <div className="text-muted-foreground">{results.admin}</div>
                        </div>
                      </div>

                      <div className="flex items-center">
                        <Shield className="h-5 w-5 text-teal-600 mr-3" />
                        <div>
                          <div className="font-medium">Tech Contact</div>
                          <div className="text-muted-foreground">{results.tech}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Name Servers</h3>
                    <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                      {results.nameServers.map((ns: string, index: number) => (
                        <div key={index} className="text-sm font-mono">
                          {ns}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* Info Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What is WHOIS?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              WHOIS is a protocol that provides information about domain name registrations
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={{
              animate: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Globe,
                title: "Domain Information",
                description: "View registration details, expiration dates, and registrar information",
              },
              {
                icon: User,
                title: "Contact Details",
                description: "Find registrant, administrative, and technical contact information",
              },
              {
                icon: Shield,
                title: "Privacy Protection",
                description: "Some domains use privacy services to protect personal information",
              },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6 text-center">
                    <div className="bg-blue-100 dark:bg-blue-900 p-4 rounded-full inline-flex mb-4">
                      <item.icon className="h-8 w-8 text-blue-600 dark:text-blue-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
