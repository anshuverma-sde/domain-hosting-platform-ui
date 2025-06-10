"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Zap, Shield, Headset, Globe, Database } from "lucide-react"
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

const wordpressPlans = [
  {
    name: "WP Starter",
    price: 7.99,
    originalPrice: 12.99,
    features: [
      "1 WordPress Site",
      "50 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "WordPress Pre-installed",
      "Automatic Updates",
      "Daily Backups",
      "24/7 Support",
    ],
    popular: false,
  },
  {
    name: "WP Professional",
    price: 14.99,
    originalPrice: 24.99,
    features: [
      "5 WordPress Sites",
      "100 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "WordPress Pre-installed",
      "Automatic Updates",
      "Daily Backups",
      "Staging Environment",
      "Performance Optimization",
      "24/7 Priority Support",
    ],
    popular: true,
  },
  {
    name: "WP Business",
    price: 29.99,
    originalPrice: 49.99,
    features: [
      "Unlimited WordPress Sites",
      "200 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "WordPress Pre-installed",
      "Automatic Updates",
      "Daily Backups",
      "Staging Environment",
      "Performance Optimization",
      "WP-CLI Access",
      "Git Integration",
      "24/7 Priority Support",
    ],
    popular: false,
  },
]

export default function WordPressHostingPage() {
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
              WordPress Hosting
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Optimized hosting specifically designed for WordPress websites
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Lightning Fast
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Auto Updates
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Headset className="h-4 w-4 mr-2" />
                WP Expert Support
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* WordPress Plans */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your WordPress Plan</h2>
            <p className="text-xl text-muted-foreground">Optimized for speed, security, and performance</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {wordpressPlans.map((plan, index) => (
              <motion.div key={plan.name} variants={fadeInUp}>
                <Card
                  className={`h-full relative overflow-hidden ${plan.popular ? "border-2 border-blue-500 shadow-2xl scale-105" : "hover:shadow-xl"} transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
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
                      <p className="text-sm text-muted-foreground mt-2">Billed annually</p>
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
                      className={`w-full ${plan.popular ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700" : ""}`}
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

      {/* WordPress Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">WordPress Hosting Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for a successful WordPress website
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
                icon: Zap,
                title: "Optimized Performance",
                description: "Server-level caching and optimization specifically for WordPress",
              },
              {
                icon: Shield,
                title: "Automatic Updates",
                description: "WordPress core, themes, and plugins updated automatically",
              },
              {
                icon: Database,
                title: "Daily Backups",
                description: "Automated daily backups with one-click restore functionality",
              },
              {
                icon: Globe,
                title: "Staging Environment",
                description: "Test changes safely before pushing to your live website",
              },
              {
                icon: Shield,
                title: "Security Hardening",
                description: "Advanced security measures to protect against WordPress threats",
              },
              {
                icon: Headset,
                title: "WordPress Experts",
                description: "24/7 support from WordPress specialists who know the platform",
              },
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full inline-flex mb-4">
                        <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-300" />
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

      {/* WordPress Benefits */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our WordPress Hosting?</h2>
            <p className="text-xl text-muted-foreground">Built specifically for WordPress performance and security</p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl">
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Lightning Fast Loading</h3>
                      <p className="text-muted-foreground">
                        Our servers are optimized specifically for WordPress with advanced caching and CDN integration.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Automatic Maintenance</h3>
                      <p className="text-muted-foreground">
                        WordPress core, themes, and plugins are automatically updated to keep your site secure.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
                      <p className="text-muted-foreground">
                        Our support team consists of WordPress experts who can help with any WordPress-related issues.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Enhanced Security</h3>
                      <p className="text-muted-foreground">
                        Advanced security measures including malware scanning, firewall protection, and brute force
                        protection.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Easy Management</h3>
                      <p className="text-muted-foreground">
                        Manage your WordPress sites with our intuitive control panel designed for WordPress users.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">Scalable Resources</h3>
                      <p className="text-muted-foreground">
                        Easily upgrade your resources as your WordPress site grows without any downtime.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
