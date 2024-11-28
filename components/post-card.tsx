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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface PostCardProps {
  title: string
  description: string
  category: string
  date: string
  slug: string
  image: string
  author: {
    name: string
    avatar: string
  }
  className?: string
}

export function PostCard({
  title,
  description,
  category,
  date,
  slug,
  image,
  author,
  className,
}: PostCardProps) {
  return (
    <Card className={cn("overflow-hidden transition-colors hover:bg-muted/50", className)}>
      <div className="aspect-video relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          priority
        />
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
          <Avatar>
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>{author.name[0]}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{author.name}</span>
            <span className="text-xs text-muted-foreground">Author</span>
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

