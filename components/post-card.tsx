import Image from "next/image"
import Link from "next/link"
import { Calendar } from 'lucide-react'

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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
    <Card className={cn("overflow-hidden transition-colors hover:bg-muted/50", className)}>
      <div className="aspect-video relative bg-muted">
        <div className="flex h-full items-center justify-center text-muted-foreground">
          Featured Image
        </div>
      </div>
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
        <CardTitle className="line-clamp-2">{title}</CardTitle>
        <CardDescription className="line-clamp-3">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <div className="h-10 w-10 rounded-full bg-muted" />
          <div className="flex flex-col">
            <span className="text-sm font-medium">Author</span>
            <span className="text-xs text-muted-foreground">Contributor</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={`/posts/${slug}`} className="w-full">
          <Button className="w-full">Read more</Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

