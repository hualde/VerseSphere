import Link from "next/link"
import { Calendar } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface PostCardProps {
  title: string
  description: string
  category: string
  date: string
  slug: string
  className?: string
}

export function PostCard({
  title,
  description,
  category,
  date,
  slug,
  className,
}: PostCardProps) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold text-primary">{category}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-1 h-4 w-4" />
            {date}
          </div>
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={`/posts/${slug}`}>
          <Button>Read more</Button>
        </Link>
      </CardContent>
    </Card>
  )
}

