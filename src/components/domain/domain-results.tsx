// components/domain/domain-results.tsx
"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, XCircle } from "lucide-react";
import { DomainAvailability, domainService, DomainSuggestion } from "@/services/domain.services";

export default function DomainResults({ query }: { query: string }) {
  const [results, setResults] = useState<DomainAvailability[]>([]);
  const [suggestions, setSuggestions] = useState<DomainSuggestion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDomains() {
      setLoading(true);
      setError(null);
      try {
        // Clean query (remove TLD if present, e.g., "example.com" -> "example")
        const cleanQuery = query.split(".")[0].toLowerCase().trim();
        if (!cleanQuery) {
          throw new Error("Invalid query");
        }

        // Default TLDs to check
        const tlds = ["com", "net", "org", "io", "co", "app", "dev"];

        // Fetch primary search results
        const searchResults = await domainService.searchDomains(cleanQuery, tlds);
        setResults(searchResults);

        // Fetch suggestions (optional, for GoDaddy-like experience)
        const suggestionResults = await domainService.getDomainSuggestions(cleanQuery, 5);
        setSuggestions(suggestionResults);
      } catch (err) {
        setError("Failed to fetch domain results. Please try again.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    if (query) {
      fetchDomains();
    }
  }, [query]);

  if (loading) {
    return <div>Loading...</div>; // Handled by Suspense fallback in parent
  }

  if (error) {
    return <div className="text-center py-8 text-red-500">{error}</div>;
  }

  return (
    <div className="space-y-4">
      {/* Primary Search Results */}
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