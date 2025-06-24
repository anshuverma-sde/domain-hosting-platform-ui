"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { useAuth } from "@/hooks/useAuth"
import Link from "next/link"
import toast from "react-hot-toast"

const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export function ForgotPasswordForm() {
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { forgotPassword } = useAuth()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)

    try {
      await forgotPassword(values.email)
      setIsSubmitted(true)
      toast.success('Please check your email for password reset instructions.')
    } catch (error) {
      toast.error( error instanceof Error ? error.message : "Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="text-center space-y-4">
        <h2 className="text-2xl font-semibold">Check your email</h2>
        <p className="text-muted-foreground">
          We have sent you password reset instructions to your email address.
        </p>
        <Button
          variant="link"
          onClick={() => setIsSubmitted(false)}
          className="text-primary"
        >
          Try another email
        </Button>
      </div>
    )
  }

  return (
    <div className="grid gap-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-semibold">Forgot password</h1>
        <p className="text-muted-foreground">
          Enter your email address and we'll send you a link to reset your password.
        </p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="name@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send reset link"}
          </Button>
        </form>
      </Form>
      <div className="text-center text-sm">
        Remember your password?{" "}
        <Link href="/login" className="text-primary hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  )
} 