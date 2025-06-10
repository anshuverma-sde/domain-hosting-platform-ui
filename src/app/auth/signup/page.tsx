import type { Metadata } from "next"
import Link from "next/link"
import { SignupForm } from "@/components/auth/signup-form"

export const metadata: Metadata = {
  title: "Sign Up - DomainHostPro",
  description: "Create a new DomainHostPro account",
}

export default function SignupPage() {
  return (
    <div className="container mx-auto flex h-screen flex-col items-center justify-center">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
          <p className="text-sm text-muted-foreground">Enter your information to create an account</p>
        </div>
        <SignupForm />
        <p className="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our{" "}
          <Link href="/terms" className="hover:text-brand underline underline-offset-4">
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link href="/privacy" className="hover:text-brand underline underline-offset-4">
            Privacy Policy
          </Link>
          .
        </p>
        <p className="px-8 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link href="/auth/login" className="hover:text-brand underline underline-offset-4">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}
