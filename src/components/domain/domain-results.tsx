"use client";

import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";
import DomainResultsSkeleton from "./domain-results-skeleton";
import { DomainAvailability, DomainSuggestion, domainService } from "@/services/domain.services";

interface CombinedResults {
  results: DomainAvailability[];
  suggestions: DomainSuggestion[];
}

async function fetchDomainData(query: string): Promise<CombinedResults> {
  const cleanQuery = query.split(".")[0].toLowerCase().trim();
  if (!cleanQuery) throw new Error("Invalid query");

  const tlds = ["com", "net", "org", "io", "co", "app", "dev"];
  const [results, suggestions] = await Promise.all([
    domainService.searchDomains(cleanQuery, tlds),
    domainService.getDomainSuggestions(cleanQuery, 5),
  ]);

  return { results, suggestions };
}

export default function DomainResults({ query }: { query: string }) {
  const {
    data,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["domain-search", query],
    queryFn: () => fetchDomainData(query),
    enabled: !!query, // only run if query exists
  });

  if (isLoading) return <DomainResultsSkeleton />;

  if (isError) {
    return (
      <div className="text-center py-8 text-red-500">
        {(error as Error)?.message || "Failed to fetch domain results."}
      </div>
    );
  }

  const { results, suggestions } = data!;

  return (
    <div className="space-y-4">
      {/* Primary Results */}
      {results.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Primary Results</h3>
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
                      <p className="text-sm text-muted-foreground">
                        {result.available ? "Available" : "Not Available"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {result.available && result.price && (
                      <>
                        <span className="text-lg font-semibold mr-4">
                          ${result.price}/yr
                        </span>
                        <Button>Add to Cart</Button>
                      </>
                    )}
                    {!result.available && <Button variant="outline">Make Offer</Button>}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Suggested Domains</h3>
          {suggestions.map((suggestion) => (
            <Card key={suggestion.domain} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    {suggestion.available ? (
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    ) : (
                      <XCircle className="h-5 w-5 text-red-500 mr-3" />
                    )}
                    <div>
                      <h3 className="text-lg font-semibold">{suggestion.domain}</h3>
                      <p className="text-sm text-muted-foreground">
                        {suggestion.available ? "Available" : "Not Available"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {suggestion.available && suggestion.price && (
                      <>
                        <span className="text-lg font-semibold mr-4">
                          ${suggestion.price}/yr
                        </span>
                        <Button>Add to Cart</Button>
                      </>
                    )}
                    {!suggestion.available && <Button variant="outline">Make Offer</Button>}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {results.length === 0 && suggestions.length === 0 && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No domains found matching "{query}"</p>
        </div>
      )}
    </div>
  );
}
