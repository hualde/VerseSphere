import { SiteHeader } from "@/components/site-header"
import { PostCard } from "@/components/post-card"
import { Button } from "@/components/ui/button"

const POSTS = [
  {
    title: "The Art of Digital Photography",
    description: "A comprehensive guide on how to capture perfect moments in the digital age. Learn about composition, lighting, and post-processing techniques.",
    category: "Photography",
    date: "2024-01-15",
    slug: "art-digital-photography"
  },
  {
    title: "Vegetarian Recipes for Beginners",
    description: "Discover delicious and easy-to-make vegetarian recipes that will transform your cooking. From quick lunches to elaborate dinners.",
    category: "Cooking",
    date: "2024-01-14",
    slug: "vegetarian-recipes-beginners"
  },
  {
    title: "Travel Guide: Barcelona",
    description: "Everything you need to know for your next visit to the Catalan capital. Explore hidden gems, local cuisine, and cultural highlights.",
    category: "Travel",
    date: "2024-01-13",
    slug: "travel-guide-barcelona"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero Section */}
        <section className="bg-slate-950 text-white">
          <div className="container py-24 md:py-32 lg:py-40">
            <div className="flex flex-col items-center gap-8 text-center">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to VerseSphere
              </h1>
              <p className="max-w-[700px] text-lg text-slate-400 sm:text-xl md:text-2xl">
                Your space to explore a diversity of fascinating topics, from photography to travel, and everything in between.
              </p>
              <div className="flex gap-4">
                <Button size="lg" variant="secondary">
                  Start Reading
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-950">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts Section */}
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Featured Posts</h2>
            <p className="text-lg text-muted-foreground">
              Discover our latest and most engaging content
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((post) => (
              <PostCard key={post.slug} {...post} />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="border-t bg-slate-50 dark:bg-slate-950">
          <div className="container py-12 md:py-16 lg:py-20">
            <div className="flex flex-col items-center gap-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Stay Updated
              </h2>
              <p className="max-w-[600px] text-lg text-muted-foreground">
                Subscribe to our newsletter to receive the latest updates and exclusive content
              </p>
              <form className="mt-4 flex w-full max-w-md gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-md border bg-background px-3 py-2"
                />
                <Button type="submit">Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

