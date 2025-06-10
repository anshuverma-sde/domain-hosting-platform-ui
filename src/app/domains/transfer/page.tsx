"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Check, ArrowRight, Shield, Clock, Headset } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

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

const transferSteps = [
  {
    step: 1,
    title: "Unlock Your Domain",
    description: "Unlock your domain at your current registrar and get the authorization code",
  },
  {
    step: 2,
    title: "Start Transfer",
    description: "Enter your domain name and authorization code to begin the transfer process",
  },
  {
    step: 3,
    title: "Confirm Transfer",
    description: "Confirm the transfer request via email and complete the payment",
  },
  {
    step: 4,
    title: "Transfer Complete",
    description: "Your domain will be transferred within 5-7 days and extended by 1 year",
  },
]

export default function DomainTransferPage() {
  const [domain, setDomain] = useState("")
  const [authCode, setAuthCode] = useState("")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-700 to-teal-800 text-white py-16 md:py-24">
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
              Transfer Your Domain
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-green-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Move your domain to DomainHost Pro and get better service, pricing, and support
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Free WHOIS Privacy
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Clock className="h-4 w-4 mr-2" />
                5-7 Day Transfer
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Headset className="h-4 w-4 mr-2" />
                Expert Support
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Transfer Form */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
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
                <CardTitle className="text-2xl">Start Your Domain Transfer</CardTitle>
                <p className="text-muted-foreground">Enter your domain details to begin the transfer process</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-2 block">Domain Name</label>
                  <Input
                    placeholder="example.com"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    className="h-12"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Authorization Code (EPP Code)</label>
                  <Input
                    placeholder="Enter your auth code"
                    value={authCode}
                    onChange={(e) => setAuthCode(e.target.value)}
                    className="h-12"
                  />
                  <p className="text-xs text-muted-foreground mt-1">Get this code from your current domain registrar</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <div className="flex items-center mb-2">
                    <Check className="h-5 w-5 text-green-600 mr-2" />
                    <span className="font-medium">Transfer includes:</span>
                  </div>
                  <ul className="text-sm space-y-1 ml-7">
                    <li>1 year domain extension</li>
                    <li>Free WHOIS privacy protection</li>
                    <li>Free DNS management</li>
                    <li>24/7 expert support</li>
                  </ul>
                </div>
                <Button className="w-full h-12 text-lg bg-green-600 hover:bg-green-700">Start Transfer - $12.99</Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Transfer Process */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How Domain Transfer Works</h2>
            <p className="text-xl text-muted-foreground">Simple 4-step process to move your domain</p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {transferSteps.map((step, index) => (
              <motion.div key={step.step} variants={fadeInUp} className="mb-8 last:mb-0">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-6">
                    <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  {index < transferSteps.length - 1 && (
                    <div className="flex-shrink-0 ml-6 mt-6">
                      <ArrowRight className="h-6 w-6 text-muted-foreground" />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-green-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Transfer to DomainHost Pro?</h2>
            <p className="text-xl text-muted-foreground">Better service, better pricing, better support</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Shield,
                title: "Free Privacy Protection",
                description: "Keep your personal information private with free WHOIS protection",
                value: "$12/year value",
              },
              {
                icon: Clock,
                title: "Competitive Pricing",
                description: "Lower renewal rates and transparent pricing with no hidden fees",
                value: "Save up to 30%",
              },
              {
                icon: Headset,
                title: "Expert Support",
                description: "24/7 technical support from domain and hosting experts",
                value: "Always available",
              },
            ].map((benefit, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardContent className="pt-6 text-center">
                    <div className="bg-green-100 dark:bg-green-900 p-4 rounded-full inline-flex mb-4">
                      <benefit.icon className="h-8 w-8 text-green-600 dark:text-green-300" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground mb-4">{benefit.description}</p>
                    <Badge variant="secondary">{benefit.value}</Badge>
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
