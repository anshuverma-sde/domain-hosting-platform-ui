import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, XCircle } from "lucide-react"

// This would normally be fetched from an API
async function searchDomains(query: string) {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Generate some sample results
  const tlds = [".com", ".net", ".org", ".io", ".co", ".app", ".dev"]
  const results = tlds.map((tld) => {
    const domain = `${query}${tld}`
    // Randomly determine if domain is available
    const isAvailable = Math.random() > 0.3

    return {
      domain,
      available: isAvailable,
      price: isAvailable ? getPriceForTld(tld) : null,
    }
  })

  return results
}

function getPriceForTld(tld: string): number {
  const prices: Record<string, number> = {
    ".com": 12.99,
    ".net": 14.99,
    ".org": 12.99,
    ".io": 39.99,
    ".co": 24.99,
    ".app": 15.99,
    ".dev": 15.99,
  }

  return prices[tld] || 9.99
}

export default async function DomainResults({ query }: { query: string }) {
  const results = await searchDomains(query)

  return (
    <div className="space-y-4">
      {results.map((result) => (
        <Card key={result.domain} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                {result.available ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                ) : (
                  <XCircle className="h-5 w-5 text-red-500 mr-3" />
                )}
                <div>
                  <h3 className="text-lg font-semibold">{result.domain}</h3>
                  <p className="text-sm text-muted-foreground">{result.available ? "Available" : "Not Available"}</p>
                </div>
              </div>

              <div className="flex items-center">
                {result.available && (
                  <>
                    <span className="text-lg font-semibold mr-4">${result.price}/yr</span>
                    <Button>Add to Cart</Button>
                  </>
                )}
                {!result.available && <Button variant="outline">Make Offer</Button>}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      {results.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No domains found matching "{query}"</p>
        </div>
      )}
    </div>
  )
}
