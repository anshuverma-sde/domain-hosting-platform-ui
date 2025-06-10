import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function DomainResultsSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(5)].map((_, i) => (
        <Card key={i} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <Skeleton className="h-5 w-5 rounded-full mr-3" />
                <div>
                  <Skeleton className="h-6 w-40 mb-1" />
                  <Skeleton className="h-4 w-24" />
                </div>
              </div>

              <div className="flex items-center">
                <Skeleton className="h-6 w-20 mr-4" />
                <Skeleton className="h-10 w-24" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
