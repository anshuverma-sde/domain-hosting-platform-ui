import axiosInstance from "@/lib/axios";

// Define interfaces for API response data
export interface DomainAvailability {
  domain: string;
  available: boolean;
  price?: number;
  currency?: string;
}

export interface DomainSuggestion {
  domain: string;
  available: boolean;
  price?: number;
  currency?: string;
}

export interface DomainPricing {
  tld: string;
  registrationPrice: number;
  renewalPrice: number;
  transferPrice?: number;
  currency: string;
}

export interface PopularTld {
  tld: string;
  popularityScore?: number;
}

class DomainService {
  private baseUrl = `/api/domains`;

  /**
   * Search for domain availability by keyword
   * @param keyword - The domain keyword (e.g., "example")
   * @param tlds - Optional array of TLDs to check (e.g., ["com", "net"])
   * @returns Array of domain availability results
   */
  async searchDomains(keyword: string, tlds?: string[]): Promise<DomainAvailability[]> {
    if (!keyword) {
      throw new Error("Keyword is required for domain search");
    }
    const response = await axiosInstance.get<{ data: DomainAvailability[] }>(
      `${this.baseUrl}/search`,
      {
        params: { keyword, tlds: tlds?.join(",") },
      }
    );
    return response.data.data;
  }

  /**
   * Check availability of a specific domain
   * @param domain - Full domain name (e.g., "example.com")
   * @returns Domain availability result
   */
  async checkDomainAvailability(domain: string): Promise<DomainAvailability> {
    if (!domain) {
      throw new Error("Domain name is required");
    }
    const response = await axiosInstance.get<{ data: DomainAvailability }>(
      `${this.baseUrl}/available`,
      {
        params: { domain },
      }
    );
    return response.data.data;
  }

  /**
   * Check availability of multiple domains
   * @param domains - Array of full domain names (e.g., ["example.com", "example.net"])
   * @returns Array of domain availability results
   */
  async checkBulkDomainAvailability(domains: string[]): Promise<DomainAvailability[]> {
    if (!domains || !Array.isArray(domains) || domains.length === 0) {
      throw new Error("Valid domains array is required");
    }
    const response = await axiosInstance.post<{ data: DomainAvailability[] }>(
      `${this.baseUrl}/available`,
      { domains }
    );
    return response.data.data;
  }

  /**
   * Get domain suggestions based on a keyword
   * @param query - Keyword for suggestions (e.g., "example")
   * @param limit - Number of suggestions to return (default: 10)
   * @returns Array of domain suggestions
   */
  async getDomainSuggestions(query: string, limit: number = 10): Promise<DomainSuggestion[]> {
    if (!query) {
      throw new Error("Query parameter is required for domain suggestions");
    }
    const response = await axiosInstance.get<{ data: DomainSuggestion[] }>(
      `${this.baseUrl}/suggest`,
      {
        params: { query, limit },
      }
    );
    return response.data.data;
  }

  /**
   * Get pricing for a specific TLD or all TLDs
   * @param tld - Optional specific TLD (e.g., "com")
   * @returns Array of domain pricing information
   */
  async getDomainPricing(tld?: string): Promise<DomainPricing[]> {
    const response = await axiosInstance.get<{ data: DomainPricing[] }>(
      `${this.baseUrl}/tlds${tld ? `/${tld}` : ""}`
    );
    return response.data.data;
  }

  /**
   * Get popular TLDs
   * @param limit - Number of TLDs to return (default: 10)
   * @returns Array of popular TLDs
   */
  async getPopularTlds(limit: number = 10): Promise<PopularTld[]> {
    const response = await axiosInstance.get<{ data: PopularTld[] }>(
      `${this.baseUrl}/popular-tlds`,
      {
        params: { limit },
      }
    );
    return response.data.data;
  }
}

export const domainService = new DomainService();