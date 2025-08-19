"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Edit, Trash2, Eye, Plus } from "lucide-react"

// Mock event data
const MOCK_EVENTS = [
  {
    id: "1",
    title: "Annual Cultural Festival",
    date: "2024-03-15",
    time: "10:00 AM - 6:00 PM",
    location: "Community Center, Delhi",
    attendees: 150,
    status: "upcoming",
    description: "Join us for a day of cultural performances, traditional food, and community bonding.",
  },
  {
    id: "2",
    title: "Educational Seminar",
    date: "2024-04-08",
    time: "2:00 PM - 5:00 PM",
    location: "Auditorium Hall, Mumbai",
    attendees: 75,
    status: "upcoming",
    description: "Learn about career opportunities and educational advancement in various fields.",
  },
  {
    id: "3",
    title: "Community Service Drive",
    date: "2024-02-20",
    time: "9:00 AM - 4:00 PM",
    location: "Various Locations",
    attendees: 200,
    status: "completed",
    description: "Participate in our community service initiative to help those in need.",
  },
]

export function EventManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [events] = useState(MOCK_EVENTS)

  const filteredEvents = events.filter(
    (event) =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "upcoming":
        return <Badge className="bg-blue-100 text-blue-800">Upcoming</Badge>
      case "ongoing":
        return <Badge className="bg-green-100 text-green-800">Ongoing</Badge>
      case "completed":
        return <Badge className="bg-gray-100 text-gray-800">Completed</Badge>
      case "cancelled":
        return <Badge className="bg-red-100 text-red-800">Cancelled</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>Event Management</CardTitle>
              <p className="text-sm text-slate-600 mt-1">Create and manage community events</p>
            </div>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Event
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {/* Search */}
          <div className="mb-6">
            <Input
              placeholder="Search events by title or location..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    {getStatusBadge(event.status)}
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center text-slate-600 text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>
                      {new Date(event.date).toLocaleDateString()} • {event.time}
                    </span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center text-slate-600 text-sm">
                    <Users className="h-4 w-4 mr-2" />
                    <span>{event.attendees} attendees</span>
                  </div>
                  <p className="text-slate-600 text-sm line-clamp-2">{event.description}</p>

                  <div className="flex justify-between pt-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-8">
              <p className="text-slate-500">No events found matching your search criteria.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
