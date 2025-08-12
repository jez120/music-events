import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const events = [
  {
    title: "Jazz Night",
    date: "May 1, 2024",
    venue: "Blue Note",
    price: "$30",
    image: "https://picsum.photos/seed/1/400/200",
  },
  {
    title: "Rock Fest",
    date: "May 5, 2024",
    venue: "Madison Square Garden",
    price: "$45",
    image: "https://picsum.photos/seed/2/400/200",
  },
  {
    title: "Classical Evening",
    date: "May 10, 2024",
    venue: "Carnegie Hall",
    price: "$60",
    image: "https://picsum.photos/seed/3/400/200",
  },
  {
    title: "Indie Vibes",
    date: "May 15, 2024",
    venue: "The Bowery",
    price: "$25",
    image: "https://picsum.photos/seed/4/400/200",
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <section className="max-w-2xl mx-auto text-center mb-10">
        <h1 className="text-4xl font-bold mb-4">Music Events — It Works</h1>
        <Input
          placeholder="Search events..."
          className="bg-gray-800 border-gray-700 text-white"
        />
      </section>
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((event) => (
          <Card key={event.title} className="bg-gray-800 border-gray-700">
            <CardHeader className="p-0">
              <img
                src={event.image}
                alt={event.title}
                className="h-40 w-full rounded-t-md object-cover"
              />
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="mb-1">{event.title}</CardTitle>
              <CardDescription className="mb-2">
                {event.date} — {event.venue}
              </CardDescription>
              <Badge>{event.price}</Badge>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  )
}
