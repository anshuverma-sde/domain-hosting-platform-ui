"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/hooks/useAuth"
import toast from "react-hot-toast"

interface VerifyEmailPageProps {
  params: {
    token: string;
  };
}

export default function VerifyEmailPage({ params }: VerifyEmailPageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [isVerified, setIsVerified] = useState(false)
  const router = useRouter()
  const { verifyEmail } = useAuth()

  useEffect(() => {
    async function verify() {
      try {
        await verifyEmail(params.token)
        setIsVerified(true)
        toast.success('Your email has been successfully verified.')
      } catch (error) {
        toast.error(error instanceof Error ? error.message : "Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }

    verify()
  }, [params.token, verifyEmail])

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-semibold">Verifying your email</h1>
          <p className="text-muted-foreground">Please wait while we verify your email address.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-semibold">
          {isVerified ? "Email verified" : "Verification failed"}
        </h1>
        <p className="text-muted-foreground">
          {isVerified
            ? "Your email has been successfully verified. You can now log in to your account."
            : "We couldn't verify your email address. The link may have expired or is invalid."}
        </p>
        <Button
          onClick={() => router.push("/login")}
          className="mt-4"
        >
          {isVerified ? "Go to login" : "Try again"}
        </Button>
      </div>
    </div>
  )
} 