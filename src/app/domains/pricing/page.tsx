"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"
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

const domainPricing = [
  { extension: ".com", price: 12.99, renewal: 14.99, popular: true },
  { extension: ".net", price: 14.99, renewal: 16.99, popular: false },
  { extension: ".org", price: 12.99, renewal: 14.99, popular: false },
  { extension: ".io", price: 39.99, renewal: 49.99, popular: true },
  { extension: ".co", price: 24.99, renewal: 29.99, popular: false },
  { extension: ".app", price: 15.99, renewal: 18.99, popular: false },
  { extension: ".dev", price: 15.99, renewal: 18.99, popular: false },
  { extension: ".tech", price: 19.99, renewal: 24.99, popular: false },
  { extension: ".online", price: 9.99, renewal: 39.99, popular: false },
  { extension: ".store", price: 19.99, renewal: 59.99, popular: false },
  { extension: ".blog", price: 12.99, renewal: 29.99, popular: false },
  { extension: ".ai", price: 99.99, renewal: 199.99, popular: true },
]

const features = [
  "Free WHOIS privacy protection",
  "Free DNS management",
  "Free email forwarding",
  "Free domain forwarding",
  "24/7 customer support",
  "Easy domain management panel",
]

export default function DomainPricingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-700 to-red-800 text-white py-16 md:py-24">
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
              Domain Pricing
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-purple-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Transparent pricing for all domain extensions with no hidden fees
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Domain Extension Pricing</h2>
            <p className="text-xl text-muted-foreground">Choose from hundreds of domain extensions</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {domainPricing.map((domain, index) => (
              <motion.div key={domain.extension} variants={fadeInUp}>
                <Card
                  className={`h-full relative ${domain.popular ? "border-2 border-purple-500 shadow-lg" : "hover:shadow-lg"} transition-all duration-300`}
                >
                  {domain.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                      <Star className="h-3 w-3 inline mr-1" />
                      Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-2">
                    <CardTitle className="text-2xl font-bold">{domain.extension}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-purple-600">${domain.price}</div>
                      <div className="text-sm text-muted-foreground">First year</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">${domain.renewal}</div>
                      <div className="text-sm text-muted-foreground">Renewal price</div>
                    </div>
                    <Button className={`w-full ${domain.popular ? "bg-purple-600 hover:bg-purple-700" : ""}`}>
                      Register Now
                    </Button>
                  </CardContent>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">All Domain Registrations Include</h2>
            <p className="text-xl text-muted-foreground">We provide everything you need for domain management</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <div className="flex items-center p-4">
                  <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Register Your Domain?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">Get started with your perfect domain name today</p>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
              Search Available Domains
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
