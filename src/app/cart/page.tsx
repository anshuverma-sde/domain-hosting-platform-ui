"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Trash2, Plus, Minus, ShoppingCart, CreditCard } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Link from "next/link"

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

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      type: "domain",
      name: "example.com",
      price: 12.99,
      period: "1 year",
      quantity: 1,
    },
    {
      id: 2,
      type: "hosting",
      name: "Premium Hosting",
      price: 9.99,
      period: "monthly",
      quantity: 1,
    },
    {
      id: 3,
      type: "addon",
      name: "SSL Certificate",
      price: 9.99,
      period: "yearly",
      quantity: 1,
    },
  ])

  const [promoCode, setPromoCode] = useState("")

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems((items) => items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id))
  }

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.08
  const total = subtotal + tax

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="flex items-center mb-8">
            <ShoppingCart className="h-8 w-8 mr-3 text-blue-600" />
            <h1 className="text-3xl font-bold">Shopping Cart</h1>
          </div>

          {cartItems.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <ShoppingCart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
                <h2 className="text-2xl font-semibold mb-2">Your cart is empty</h2>
                <p className="text-muted-foreground mb-6">Add some domains or hosting plans to get started</p>
                <Button asChild>
                  <Link href="/domains/search">Search Domains</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Cart Items ({cartItems.length})</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.div className="space-y-4" variants={staggerContainer} initial="initial" animate="animate">
                      {cartItems.map((item, index) => (
                        <motion.div key={item.id} variants={fadeInUp}>
                          <div className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex-1">
                              <div className="flex items-center mb-2">
                                <h3 className="font-semibold">{item.name}</h3>
                                <Badge variant="secondary" className="ml-2">
                                  {item.type}
                                </Badge>
                              </div>
                              <p className="text-sm text-muted-foreground">{item.period}</p>
                              <p className="text-lg font-bold text-blue-600">${item.price}</p>
                            </div>

                            <div className="flex items-center space-x-4">
                              <div className="flex items-center space-x-2">
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  disabled={item.quantity <= 1}
                                >
                                  <Minus className="h-4 w-4" />
                                </Button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <Button
                                  variant="outline"
                                  size="icon"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                >
                                  <Plus className="h-4 w-4" />
                                </Button>
                              </div>

                              <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </CardContent>
                </Card>
              </div>

              {/* Order Summary */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle>Order Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
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

                    <div className="space-y-2">
                      <label className="text-sm font-medium">Promo Code</label>
                      <div className="flex space-x-2">
                        <Input
                          placeholder="Enter code"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                        />
                        <Button variant="outline">Apply</Button>
                      </div>
                    </div>

                    <Button className="w-full" size="lg" asChild>
                      <Link href="/checkout">
                        <CreditCard className="mr-2 h-4 w-4" />
                        Proceed to Checkout
                      </Link>
                    </Button>

                    <div className="text-center">
                      <Link href="/domains/search" className="text-sm text-blue-600 hover:underline">
                        Continue Shopping
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
