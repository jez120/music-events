import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Event {
  id: number;
  title: string;
  date: string;
  venue: string;
  price: string;
  image: string;
}

const events: Event[] = [
  {
    id: 1,
    title: "Rocking New Year",
    date: "Jan 1, 2025",
    venue: "Madison Square Garden",
    price: "$99",
    image: "https://picsum.photos/seed/rock/400/200",
  },
  {
    id: 2,
    title: "Jazz Nights",
    date: "Feb 14, 2025",
    venue: "Blue Note",
    price: "$79",
    image: "https://picsum.photos/seed/jazz/400/200",
  },
  {
    id: 3,
    title: "Pop Fiesta",
    date: "Mar 20, 2025",
    venue: "Staples Center",
    price: "$120",
    image: "https://picsum.photos/seed/pop/400/200",
  },
  {
    id: 4,
    title: "Indie Vibes",
    date: "Apr 5, 2025",
    venue: "The Roxy",
    price: "$60",
    image: "https://picsum.photos/seed/indie/400/200",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black p-8 text-gray-100">
      <div className="mx-auto max-w-6xl space-y-8">
        <section className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Music Events — It Works</h1>
          <div className="mx-auto max-w-md">
            <Input placeholder="Search events" />
          </div>
        </section>
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <img src={event.image} alt="" className="h-40 w-full object-cover" />
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{event.date}</p>
                <p className="text-sm">{event.venue}</p>
              </CardContent>
              <CardFooter>
                <Badge>{event.price}</Badge>
              </CardFooter>
            </Card>
          ))}
        </section>
      </div>
    </main>
  );
}
