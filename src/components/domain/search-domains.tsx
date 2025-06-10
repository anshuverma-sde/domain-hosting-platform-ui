"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"

export function SearchDomains() {
  const [domain, setDomain] = useState("")
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (domain.trim()) {
      router.push(`/domains/search?query=${encodeURIComponent(domain.trim())}`)
    }
  }

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-2xl mx-auto">
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Find your perfect domain name..."
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          className="h-14 pl-4 pr-12 text-lg rounded-l-md rounded-r-none border-r-0 bg-white text-black"
        />
        <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      <Button
        type="submit"
        className="h-14 px-8 text-lg font-medium rounded-l-none bg-yellow-500 hover:bg-yellow-600 text-black"
      >
        Search
      </Button>
    </form>
  )
}
