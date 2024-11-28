import { SiteHeader } from "@/components/site-header"
import { PostCard } from "@/components/post-card"

// Example posts - in a real implementation these would come from a database or CMS
const POSTS = [
  {
    title: "The Art of Digital Photography",
    description: "A comprehensive guide on how to capture perfect moments in the digital age",
    category: "Photography",
    date: "2024-01-15",
    slug: "art-digital-photography"
  },
  {
    title: "Vegetarian Recipes for Beginners",
    description: "Discover delicious and easy-to-make vegetarian recipes",
    category: "Cooking",
    date: "2024-01-14",
    slug: "vegetarian-recipes-beginners"
  },
  {
    title: "Travel Guide: Barcelona",
    description: "Everything you need to know for your next visit to the Catalan capital",
    category: "Travel",
    date: "2024-01-13",
    slug: "travel-guide-barcelona"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="container py-6 md:py-12">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            VerseSphere
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Your space to explore a diversity of fascinating topics
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((post) => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </main>
    </div>
  )
}

