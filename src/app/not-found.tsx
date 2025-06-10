import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Home, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 text-6xl font-bold text-muted-foreground">404</div>
          <CardTitle>Page Not Found</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button asChild className="flex-1">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <Link href="/domains/search">
                <Search className="mr-2 h-4 w-4" />
                Search Domains
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
