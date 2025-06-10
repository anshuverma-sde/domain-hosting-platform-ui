"use client"

import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { SignupForm } from "@/components/auth/signup-form"
import Link from "next/link"

export default function SignupModal() {
  const router = useRouter()

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Create an account</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <SignupForm />
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <Link href="/terms" className="hover:text-primary underline underline-offset-4">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="hover:text-primary underline underline-offset-4">
                Privacy Policy
              </Link>
              .
            </p>
            <p className="text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link href="/auth/login" className="hover:text-primary underline underline-offset-4">
                Login
              </Link>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
