"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { SearchDomains } from "@/components/domain/search-domains"
import DomainResults from "@/components/domain/domain-results"
import { Suspense } from "react"
import DomainResultsSkeleton from "@/components/domain/domain-results-skeleton"

export default function DomainSearchModal() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const query = searchParams.get("query") || ""

  return (
    <Dialog open onOpenChange={() => router.back()}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Domain Search</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <SearchDomains />

          {query && (
            <div>
              <h3 className="text-lg font-semibold mb-4">Search Results for "{query}"</h3>
              <Suspense fallback={<DomainResultsSkeleton />}>
                <DomainResults query={query} />
              </Suspense>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
