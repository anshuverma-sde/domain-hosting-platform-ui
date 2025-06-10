import { Suspense } from "react"
import { SearchDomains } from "@/features/domains/components"
import DomainResults from "@/components/domain/domain-results"
import DomainResultsSkeleton from "@/components/domain/domain-results-skeleton"

export default async function DomainSearchPage({
  searchParams,
}: {
  searchParams: { query?: string }
}) {
  const query = (await searchParams).query || ""

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Domain Search</h1>

      <div className="mb-8">
        <SearchDomains />
      </div>

      {query && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Search Results for "{query}"</h2>
          <Suspense fallback={<DomainResultsSkeleton />}>
            <DomainResults query={query} />
          </Suspense>
        </div>
      )}

      {!query && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Find Your Perfect Domain Name</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enter your desired domain name in the search box above to check availability and pricing. We offer a wide
            range of domain extensions to help you find the perfect match for your brand.
          </p>
        </div>
      )}
    </div>
  )
}
