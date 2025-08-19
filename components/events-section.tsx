import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock } from "lucide-react"

export function EventsSection() {
  const events = [
    {
      title: "Annual Cultural Festival",
      date: "March 15, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Community Center, Delhi",
      description: "Join us for a day of cultural performances, traditional food, and community bonding.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Educational Seminar",
      date: "April 8, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Auditorium Hall, Mumbai",
      description: "Learn about career opportunities and educational advancement in various fields.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Community Service Drive",
      date: "May 20, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "Various Locations",
      description: "Participate in our community service initiative to help those in need.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section id="events" className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Upcoming Events</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join us in celebrating our culture through various upcoming events and community gatherings.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-primary">{event.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-slate-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.time}</span>
                </div>
                <div className="flex items-center text-slate-600">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="text-sm">{event.location}</span>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{event.description}</p>
                <Button className="w-full mt-4">RSVP Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
