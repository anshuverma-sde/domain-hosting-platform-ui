"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Server, Cpu, HardDrive, Wifi, Shield, Headset } from "lucide-react"
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

const vpsPlans = [
  {
    name: "VPS Starter",
    price: 14.99,
    originalPrice: 19.99,
    specs: {
      cpu: "2 vCPU Cores",
      ram: "2 GB RAM",
      storage: "50 GB SSD",
      bandwidth: "1 TB",
    },
    features: [
      "Full Root Access",
      "Free SSL Certificate",
      "Weekly Backups",
      "24/7 Support",
      "99.9% Uptime SLA",
      "DDoS Protection",
    ],
    popular: false,
  },
  {
    name: "VPS Business",
    price: 29.99,
    originalPrice: 39.99,
    specs: {
      cpu: "4 vCPU Cores",
      ram: "8 GB RAM",
      storage: "100 GB SSD",
      bandwidth: "2 TB",
    },
    features: [
      "Full Root Access",
      "Free SSL Certificate",
      "Daily Backups",
      "Dedicated IP Address",
      "24/7 Priority Support",
      "99.9% Uptime SLA",
      "DDoS Protection",
      "Server Monitoring",
    ],
    popular: true,
  },
  {
    name: "VPS Pro",
    price: 59.99,
    originalPrice: 79.99,
    specs: {
      cpu: "8 vCPU Cores",
      ram: "16 GB RAM",
      storage: "200 GB SSD",
      bandwidth: "4 TB",
    },
    features: [
      "Full Root Access",
      "Free SSL Certificate",
      "Daily Backups",
      "Dedicated IP Address",
      "24/7 Priority Support",
      "99.9% Uptime SLA",
      "Advanced DDoS Protection",
      "Server Monitoring",
      "Performance Optimization",
      "Custom Configurations",
    ],
    popular: false,
  },
]

export default function VPSHostingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-indigo-700 to-blue-800 text-white py-16 md:py-24">
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
              VPS Hosting
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-purple-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Powerful virtual private servers with dedicated resources and full control
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Server className="h-4 w-4 mr-2" />
                Full Root Access
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                DDoS Protection
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Headset className="h-4 w-4 mr-2" />
                24/7 Expert Support
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* VPS Plans */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your VPS Plan</h2>
            <p className="text-xl text-muted-foreground">Scalable virtual private servers for growing businesses</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {vpsPlans.map((plan, index) => (
              <motion.div key={plan.name} variants={fadeInUp}>
                <Card
                  className={`h-full relative overflow-hidden ${plan.popular ? "border-2 border-purple-500 shadow-2xl scale-105" : "hover:shadow-xl"} transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <div className="flex items-center justify-center gap-2">
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <div className="text-left">
                          <div className="text-sm text-muted-foreground line-through">${plan.originalPrice}</div>
                          <div className="text-sm text-muted-foreground">/month</div>
                        </div>
                      </div>
                    </div>

                    {/* Server Specs */}
                    <div className="grid grid-cols-2 gap-2 text-sm bg-slate-50 dark:bg-slate-800 rounded-lg p-3 mb-4">
                      <div className="flex items-center">
                        <Cpu className="h-4 w-4 mr-1 text-purple-600" />
                        {plan.specs.cpu}
                      </div>
                      <div className="flex items-center">
                        <Server className="h-4 w-4 mr-1 text-purple-600" />
                        {plan.specs.ram}
                      </div>
                      <div className="flex items-center">
                        <HardDrive className="h-4 w-4 mr-1 text-purple-600" />
                        {plan.specs.storage}
                      </div>
                      <div className="flex items-center">
                        <Wifi className="h-4 w-4 mr-1 text-purple-600" />
                        {plan.specs.bandwidth}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button
                      className={`w-full ${plan.popular ? "bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700" : ""}`}
                      size="lg"
                    >
                      Get Started
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">VPS Hosting Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Enterprise-grade features for maximum performance and control
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Server,
                title: "Full Root Access",
                description: "Complete control over your server environment with root access",
              },
              {
                icon: Shield,
                title: "Advanced Security",
                description: "DDoS protection, firewall, and security monitoring included",
              },
              {
                icon: Cpu,
                title: "Dedicated Resources",
                description: "Guaranteed CPU, RAM, and storage resources for consistent performance",
              },
              {
                icon: HardDrive,
                title: "SSD Storage",
                description: "High-performance SSD storage for faster data access and loading times",
              },
              {
                icon: Wifi,
                title: "High Bandwidth",
                description: "Generous bandwidth allowances for high-traffic applications",
              },
              {
                icon: Headset,
                title: "Expert Support",
                description: "24/7 technical support from VPS specialists",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-full inline-flex mb-4">
                        <feature.icon className="h-6 w-6 text-purple-600 dark:text-purple-300" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
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
