"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Lock, ShoppingCart } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
}

export default function CheckoutPage() {
  const [paymentMethod, setPaymentMethod] = useState("card")
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  })

  const orderItems = [
    { name: "example.com", price: 12.99, period: "1 year" },
    { name: "Premium Hosting", price: 9.99, period: "monthly" },
    { name: "SSL Certificate", price: 9.99, period: "yearly" },
  ]

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center mb-8">
            <Lock className="h-8 w-8 mr-3 text-green-600" />
            <h1 className="text-3xl font-bold">Secure Checkout</h1>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-6">
              {/* Billing Information */}
              <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <Card>
                  <CardHeader>
                    <CardTitle>Billing Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          value={billingInfo.firstName}
                          onChange={(e) => setBillingInfo({ ...billingInfo, firstName: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          value={billingInfo.lastName}
                          onChange={(e) => setBillingInfo({ ...billingInfo, lastName: e.target.value })}
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={billingInfo.email}
                        onChange={(e) => setBillingInfo({ ...billingInfo, email: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={billingInfo.phone}
                        onChange={(e) => setBillingInfo({ ...billingInfo, phone: e.target.value })}
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={billingInfo.address}
                        onChange={(e) => setBillingInfo({ ...billingInfo, address: e.target.value })}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          value={billingInfo.city}
                          onChange={(e) => setBillingInfo({ ...billingInfo, city: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          value={billingInfo.state}
                          onChange={(e) => setBillingInfo({ ...billingInfo, state: e.target.value })}
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input
                          id="zipCode"
                          value={billingInfo.zipCode}
                          onChange={(e) => setBillingInfo({ ...billingInfo, zipCode: e.target.value })}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Payment Method */}
              <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex items-center">
                          <CreditCard className="h-4 w-4 mr-2" />
                          Credit/Debit Card
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "card" && (
                      <div className="space-y-4 mt-4">
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input id="expiry" placeholder="MM/YY" />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV</Label>
                            <Input id="cvv" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center space-x-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms" className="text-sm">
                        I agree to the Terms of Service and Privacy Policy
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Order Summary */}
            <div>
              <motion.div variants={fadeInUp} initial="initial" animate="animate">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {orderItems.map((item, index) => (
                      <div key={index} className="flex justify-between">
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-sm text-muted-foreground">{item.period}</div>
                        </div>
                        <div className="font-medium">${item.price}</div>
                      </div>
                    ))}

                    <Separator />

                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>

                    <Separator />

                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>

                    <Button className="w-full" size="lg">
                      <Lock className="mr-2 h-4 w-4" />
                      Complete Order
                    </Button>

                    <div className="text-center text-sm text-muted-foreground">
                      <Lock className="h-4 w-4 inline mr-1" />
                      Your payment information is secure and encrypted
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
