"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  MessageCircle,
  Phone,
  Mail,
  FileText,
  Search,
  Clock,
  CheckCircle,
  HelpCircle,
  Book,
  Video,
  Users,
  Globe,
  Server,
  Shield,
  Settings,
} from "lucide-react"
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

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Live Chat",
    description: "Get instant help from our support team",
    availability: "24/7",
    responseTime: "< 2 minutes",
    color: "blue",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our technical experts",
    availability: "24/7",
    responseTime: "< 5 minutes",
    color: "green",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us detailed questions and get comprehensive answers",
    availability: "24/7",
    responseTime: "< 2 hours",
    color: "purple",
  },
  {
    icon: FileText,
    title: "Support Tickets",
    description: "Track your support requests and get priority assistance",
    availability: "24/7",
    responseTime: "< 1 hour",
    color: "orange",
  },
]

const faqCategories = [
  {
    icon: Book,
    title: "Getting Started",
    count: 25,
    questions: [
      "How do I register a domain?",
      "How to set up web hosting?",
      "What is DNS and how to configure it?",
      "How to install WordPress?",
    ],
  },
  {
    icon: Users,
    title: "Account Management",
    count: 18,
    questions: [
      "How to update my account information?",
      "How to change my password?",
      "How to manage billing settings?",
      "How to cancel my subscription?",
    ],
  },
  {
    icon: Video,
    title: "Technical Support",
    count: 32,
    questions: [
      "Why is my website slow?",
      "How to fix SSL certificate errors?",
      "How to troubleshoot email issues?",
      "How to restore from backup?",
    ],
  },
]

export default function SupportPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-700 to-pink-800 text-white py-16 md:py-24">
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
              We're Here to Help
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-indigo-100"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Get expert support 24/7 from our dedicated team of professionals
            </motion.p>

            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search our knowledge base..."
                  className="h-14 pl-12 pr-4 text-lg bg-white/90 text-black border-0"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Button className="absolute right-2 top-2 h-10 bg-indigo-600 hover:bg-indigo-700">Search</Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Choose How to Get Help</h2>
            <p className="text-xl text-muted-foreground">Multiple ways to reach our expert support team</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {supportOptions.map((option, index) => (
              <motion.div key={option.title} variants={fadeInUp}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div
                        className={`bg-${option.color}-100 dark:bg-${option.color}-900 p-4 rounded-full inline-flex mb-4 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <option.icon className={`h-8 w-8 text-${option.color}-600 dark:text-${option.color}-300`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                      <p className="text-muted-foreground mb-4">{option.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-center">
                          <Clock className="h-4 w-4 mr-2 text-green-500" />
                          <span className="text-sm">{option.availability}</span>
                        </div>
                        <div className="flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 mr-2 text-blue-500" />
                          <span className="text-sm">Response: {option.responseTime}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Can't find what you're looking for? Send us a detailed message and we'll get back to you as soon as
                possible.
              </p>

              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">First Name</label>
                        <Input placeholder="John" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                        <Input placeholder="Doe" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <Input type="email" placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Subject</label>
                      <Input placeholder="How can we help you?" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <Textarea placeholder="Please describe your issue or question in detail..." rows={6} />
                    </div>
                    <Button className="w-full" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>

              <motion.div
                className="space-y-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
              >
                {faqCategories.map((category, index) => (
                  <motion.div key={category.title} variants={fadeInUp}>
                    <Card className="hover:shadow-lg transition-all duration-300">
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="bg-indigo-100 dark:bg-indigo-900 p-2 rounded-lg mr-3">
                              <category.icon className="h-5 w-5 text-indigo-600 dark:text-indigo-300" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{category.title}</CardTitle>
                              <p className="text-sm text-muted-foreground">{category.count} articles</p>
                            </div>
                          </div>
                          <Badge variant="secondary">{category.count}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          {category.questions.map((question, qIndex) => (
                            <li key={qIndex} className="flex items-center text-sm hover:text-indigo-600 cursor-pointer">
                              <HelpCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                              {question}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-indigo-100">We're available 24/7 to assist you</p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-white/20 p-4 rounded-full inline-flex mb-4">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
              <p className="text-indigo-100 mb-2">1-800-123-4567</p>
              <p className="text-sm text-indigo-200">Available 24/7</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-white/20 p-4 rounded-full inline-flex mb-4">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Support</h3>
              <p className="text-indigo-100 mb-2">support@domainhostpro.com</p>
              <p className="text-sm text-indigo-200">Response within 2 hours</p>
            </motion.div>

            <motion.div variants={fadeInUp} className="text-center">
              <div className="bg-white/20 p-4 rounded-full inline-flex mb-4">
                <MessageCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
              <p className="text-indigo-100 mb-2">Instant messaging</p>
              <p className="text-sm text-indigo-200">Available 24/7</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Knowledge Base</h2>
            <p className="text-xl text-muted-foreground">Find answers to common questions in our documentation</p>
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
                icon: Book,
                title: "Getting Started",
                description: "Learn the basics of setting up your account and services",
                articles: 24,
              },
              {
                icon: Globe,
                title: "Domain Management",
                description: "Managing your domains, DNS settings, and transfers",
                articles: 36,
              },
              {
                icon: Server,
                title: "Hosting Guides",
                description: "Setting up and managing your hosting environments",
                articles: 42,
              },
              {
                icon: Shield,
                title: "Security",
                description: "Protecting your website and account from threats",
                articles: 18,
              },
              {
                icon: Settings,
                title: "Account Settings",
                description: "Managing your profile, billing, and preferences",
                articles: 15,
              },
              {
                icon: Video,
                title: "Video Tutorials",
                description: "Step-by-step video guides for common tasks",
                articles: 28,
              },
            ].map((category, index) => (
              <motion.div key={category.title} variants={fadeInUp}>
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardContent className="pt-6">
                    <div className="text-center mb-4">
                      <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-full inline-flex mb-4">
                        <category.icon className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                      <p className="text-muted-foreground mb-4">{category.description}</p>
                      <Badge variant="secondary">{category.articles} articles</Badge>
                    </div>
                    <div className="mt-6 text-center">
                      <Button variant="outline" className="w-full">
                        Browse Articles
                      </Button>
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
