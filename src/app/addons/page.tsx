"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Mail, Globe, Database, Lock, Zap, Eye, FileText } from "lucide-react"
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

const addons = [
  {
    icon: Shield,
    name: "SSL Certificates",
    description: "Secure your website with industry-standard SSL encryption",
    price: 9.99,
    period: "year",
    features: ["256-bit encryption", "Browser trust indicators", "Warranty up to $1M", "24/7 support"],
    popular: true,
    color: "green",
  },
  {
    icon: Eye,
    name: "WHOIS Privacy",
    description: "Keep your personal information private in domain records",
    price: 7.99,
    period: "year",
    features: ["Hide personal details", "Reduce spam emails", "Prevent identity theft", "Easy management"],
    popular: false,
    color: "blue",
  },
  {
    icon: Mail,
    name: "Professional Email",
    description: "Custom email addresses with your domain name",
    price: 4.99,
    period: "month",
    features: ["Custom email addresses", "25GB storage per mailbox", "Mobile & desktop apps", "Spam protection"],
    popular: true,
    color: "purple",
  },
  {
    icon: Database,
    name: "Website Backup",
    description: "Automated daily backups of your website and databases",
    price: 2.99,
    period: "month",
    features: ["Daily automated backups", "30-day retention", "One-click restore", "Multiple restore points"],
    popular: false,
    color: "orange",
  },
  {
    icon: Zap,
    name: "CDN Service",
    description: "Global content delivery network for faster loading times",
    price: 9.99,
    period: "month",
    features: ["Global edge locations", "Faster page loading", "Bandwidth savings", "DDoS protection"],
    popular: false,
    color: "indigo",
  },
  {
    icon: Lock,
    name: "Security Suite",
    description: "Advanced security features to protect your website",
    price: 14.99,
    period: "month",
    features: ["Malware scanning", "Firewall protection", "Security monitoring", "Vulnerability alerts"],
    popular: false,
    color: "red",
  },
  {
    icon: Globe,
    name: "SEO Tools",
    description: "Optimize your website for better search engine rankings",
    price: 19.99,
    period: "month",
    features: ["Keyword tracking", "Site analysis", "Competitor insights", "Performance reports"],
    popular: false,
    color: "teal",
  },
  {
    icon: FileText,
    name: "Site Builder Pro",
    description: "Advanced website builder with premium templates",
    price: 12.99,
    period: "month",
    features: ["Premium templates", "Advanced widgets", "E-commerce features", "Custom CSS/HTML"],
    popular: false,
    color: "pink",
  },
]

export default function AddonsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 via-teal-700 to-cyan-800 text-white py-16 md:py-24">
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
              Powerful Add-ons
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-emerald-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Enhance your website with professional tools and services
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Add-ons Grid */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose Your Add-ons</h2>
            <p className="text-xl text-muted-foreground">Professional tools to grow your online presence</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {addons.map((addon, index) => (
              <motion.div key={addon.name} variants={fadeInUp}>
                <Card
                  className={`h-full relative overflow-hidden ${addon.popular ? "border-2 border-emerald-500 shadow-xl" : "hover:shadow-lg"} transition-all duration-300`}
                >
                  {addon.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-3 py-1 text-xs font-medium">
                      Popular
                    </div>
                  )}
                  <CardHeader className="text-center pb-4">
                    <div
                      className={`bg-${addon.color}-100 dark:bg-${addon.color}-900 p-4 rounded-full inline-flex mx-auto mb-4`}
                    >
                      <addon.icon className={`h-8 w-8 text-${addon.color}-600 dark:text-${addon.color}-300`} />
                    </div>
                    <CardTitle className="text-xl mb-2">{addon.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-4">{addon.description}</p>
                    <div className="text-center">
                      <span className="text-3xl font-bold">${addon.price}</span>
                      <span className="text-muted-foreground">/{addon.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <ul className="space-y-2 mb-6">
                      {addon.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm">
                          <div className={`w-2 h-2 bg-${addon.color}-500 rounded-full mr-3 flex-shrink-0`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button
                      className={`w-full ${addon.popular ? `bg-gradient-to-r from-${addon.color}-500 to-${addon.color}-600 hover:from-${addon.color}-600 hover:to-${addon.color}-700` : ""}`}
                    >
                      Add to Cart
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bundle Offers */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bundle & Save</h2>
            <p className="text-xl text-muted-foreground">Get more value with our popular add-on bundles</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp}>
              <Card className="h-full border-2 border-emerald-500 shadow-xl">
                <CardHeader className="text-center">
                  <Badge className="bg-emerald-500 text-white mb-4 w-fit mx-auto">Save 25%</Badge>
                  <CardTitle className="text-2xl mb-2">Security Bundle</CardTitle>
                  <p className="text-muted-foreground mb-4">Complete security package for your website</p>
                  <div className="text-center">
                    <span className="text-3xl font-bold">$24.99</span>
                    <span className="text-muted-foreground">/month</span>
                    <div className="text-sm text-muted-foreground line-through">$32.97</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Shield className="h-5 w-5 text-emerald-500 mr-3" />
                      <span>SSL Certificate</span>
                    </div>
                    <div className="flex items-center">
                      <Lock className="h-5 w-5 text-emerald-500 mr-3" />
                      <span>Security Suite</span>
                    </div>
                    <div className="flex items-center">
                      <Database className="h-5 w-5 text-emerald-500 mr-3" />
                      <span>Website Backup</span>
                    </div>
                  </div>
                  <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Get Security Bundle</Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full border-2 border-blue-500 shadow-xl">
                <CardHeader className="text-center">
                  <Badge className="bg-blue-500 text-white mb-4 w-fit mx-auto">Save 30%</Badge>
                  <CardTitle className="text-2xl mb-2">Growth Bundle</CardTitle>
                  <p className="text-muted-foreground mb-4">Everything you need to grow your business online</p>
                  <div className="text-center">
                    <span className="text-3xl font-bold">$39.99</span>
                    <span className="text-muted-foreground">/month</span>
                    <div className="text-sm text-muted-foreground line-through">$56.96</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-500 mr-3" />
                      <span>Professional Email</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-blue-500 mr-3" />
                      <span>SEO Tools</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-blue-500 mr-3" />
                      <span>CDN Service</span>
                    </div>
                    <div className="flex items-center">
                      <FileText className="h-5 w-5 text-blue-500 mr-3" />
                      <span>Site Builder Pro</span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-500 hover:bg-blue-600">Get Growth Bundle</Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
