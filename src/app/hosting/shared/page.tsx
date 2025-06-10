"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Shield, Zap, Globe, Headset } from "lucide-react"
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

const plans = [
  {
    name: "Starter",
    price: 2.99,
    originalPrice: 4.99,
    features: [
      "1 Website",
      "50 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "10 Email Accounts",
      "24/7 Support",
      "1-Click WordPress Install",
      "Website Builder",
    ],
    popular: false,
    savings: "40% OFF",
  },
  {
    name: "Premium",
    price: 5.99,
    originalPrice: 9.99,
    features: [
      "Unlimited Websites",
      "100 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "Unlimited Email Accounts",
      "Free Domain for 1 Year",
      "Daily Backups",
      "24/7 Priority Support",
      "Advanced Security",
      "Performance Optimization",
    ],
    popular: true,
    savings: "40% OFF",
  },
  {
    name: "Business",
    price: 11.99,
    originalPrice: 19.99,
    features: [
      "Unlimited Websites",
      "200 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "Unlimited Email Accounts",
      "Free Domain for 1 Year",
      "Daily Backups",
      "Dedicated IP Address",
      "Enhanced Performance",
      "24/7 Priority Support",
      "Advanced Security Suite",
      "SEO Tools",
    ],
    popular: false,
    savings: "40% OFF",
  },
]

export default function SharedHostingPage() {
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
              Shared Web Hosting
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-blue-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Affordable, reliable hosting perfect for small to medium websites
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4 text-sm"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Free SSL Certificate
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                99.9% Uptime
              </div>
              <div className="flex items-center bg-white/20 rounded-full px-4 py-2">
                <Headset className="h-4 w-4 mr-2" />
                24/7 Support
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-xl text-muted-foreground">All plans include a 30-day money-back guarantee</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {plans.map((plan, index) => (
              <motion.div key={plan.name} variants={fadeInUp}>
                <Card
                  className={`h-full relative overflow-hidden ${plan.popular ? "border-2 border-blue-500 shadow-2xl scale-105" : "hover:shadow-xl"} transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  {plan.savings && (
                    <div className="absolute top-4 right-4">
                      <Badge variant="destructive" className="bg-red-500">
                        {plan.savings}
                      </Badge>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Shared Hosting?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build and grow your website
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
                title: "Lightning Fast",
                description: "SSD storage and optimized servers ensure your website loads quickly",
              },
              {
                icon: Shield,
                title: "Secure & Protected",
                description: "Free SSL certificates and advanced security features keep your site safe",
              },
              {
                icon: Globe,
                title: "Global CDN",
                description: "Content delivery network ensures fast loading times worldwide",
              },
              {
                icon: Headset,
                title: "Expert Support",
                description: "24/7 technical support from hosting experts via chat, phone, and email",
              },
              {
                icon: Star,
                title: "99.9% Uptime",
                description: "Reliable hosting infrastructure with industry-leading uptime guarantee",
              },
              {
                icon: Check,
                title: "Easy Setup",
                description: "One-click installations for WordPress, Joomla, and other popular applications",
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
    </div>
  )
}
