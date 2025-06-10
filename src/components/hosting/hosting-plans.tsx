"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Shared Hosting",
    price: 4.99,
    features: [
      "Single Website",
      "50 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "10 Email Accounts",
      "24/7 Support",
    ],
    popular: false,
    buttonText: "Get Started",
  },
  {
    name: "Premium Hosting",
    price: 9.99,
    features: [
      "Unlimited Websites",
      "100 GB SSD Storage",
      "Unmetered Bandwidth",
      "Free SSL Certificate",
      "Unlimited Email Accounts",
      "Free Domain for 1 Year",
      "Daily Backups",
      "24/7 Priority Support",
    ],
    popular: true,
    buttonText: "Get Started",
  },
  {
    name: "Business Hosting",
    price: 14.99,
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
    ],
    popular: false,
    buttonText: "Get Started",
  },
]

export default function HostingPlans() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <Card key={plan.name} className={`flex flex-col ${plan.popular ? "border-blue-500 shadow-lg relative" : ""}`}>
          {plan.popular && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
              Most Popular
            </div>
          )}
          <CardHeader>
            <CardTitle className="text-2xl text-center">{plan.name}</CardTitle>
            <div className="text-center mt-2">
              <span className="text-4xl font-bold">${plan.price}</span>
              <span className="text-muted-foreground">/mo</span>
            </div>
          </CardHeader>
          <CardContent className="flex-grow">
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button className={`w-full ${plan.popular ? "bg-blue-500 hover:bg-blue-600" : ""}`}>
              {plan.buttonText}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
