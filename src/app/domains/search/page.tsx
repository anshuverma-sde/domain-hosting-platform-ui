// app/domains/search/page.tsx
import { Suspense } from "react";
import { SearchDomains } from "@/features/domains/components";
import DomainResults from "@/components/domain/domain-results";
import DomainResultsSkeleton from "@/components/domain/domain-results-skeleton";

export default async function DomainSearchPage({
  searchParams,
}: {
  searchParams: { query?: string };
}) {
  const query = (await searchParams).query || "";

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Search for a Domain Name
        </h1>
        <p className="mt-3 text-lg text-muted-foreground">
          Find the best domain for your brand or business.
        </p>
      </div>

      <div className="mb-10">
        <SearchDomains />
      </div>

      {query ? (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">
            Search Results for: <span className="text-primary">"{query}"</span>
          </h2>
          <Suspense fallback={<DomainResultsSkeleton />}>
            <DomainResults query={query} />
          </Suspense>
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed rounded-lg border-gray-300 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
            Find Your Perfect Domain Name
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base">
            Enter a domain name above to check availability. Discover a wide range of TLDs that suit your personal or business identity.
          </p>
        </div>
      )}
    </div>
  );
}
