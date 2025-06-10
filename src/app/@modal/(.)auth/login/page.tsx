"use client"

import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { LoginForm } from "@/components/auth/login-form"
import Link from "next/link"

export default function LoginModal() {
  const router = useRouter()

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Welcome back</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <LoginForm />
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground">
              <Link href="/auth/forgot-password" className="hover:text-primary underline underline-offset-4">
                Forgot your password?
              </Link>
            </p>
            <p className="text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link href="/auth/signup" className="hover:text-primary underline underline-offset-4">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
