import Link from "next/link"
import { Newspaper } from 'lucide-react'

import { Button } from "@/components/ui/button"
import ModeToggle from "@/components/mode-toggle"

export function SiteHeader() {
  return (
    <header className="bg-background border-b">
      <div className="container flex h-14 items-center">
        <div className="flex items-center space-x-2 md:mr-6">
          <Newspaper className="h-6 w-6" />
          <Link href="/" className="hidden font-bold md:inline-block">
            VerseSphere
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-2">
            <Link href="/posts">
              <Button variant="ghost">Posts</Button>
            </Link>
            <Link href="/categories">
              <Button variant="ghost">Categories</Button>
            </Link>
            <Link href="/about">
              <Button variant="ghost">About</Button>
            </Link>
          </nav>
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

