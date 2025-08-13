"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Users, MapPin, Calendar, Settings, LogOut, Search, Filter } from "lucide-react"
import Link from "next/link"

// Mock member data
const mockMembers = [
  {
    id: 1,
    name: "Rajesh Sharma",
    email: "rajesh.sharma@email.com",
    phone: "+91 98765 43210",
    state: "Maharashtra",
    district: "Mumbai",
    joinDate: "2024-01-15",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya.patel@email.com",
    phone: "+91 87654 32109",
    state: "Gujarat",
    district: "Ahmedabad",
    joinDate: "2024-02-20",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Amit Gupta",
    email: "amit.gupta@email.com",
    phone: "+91 76543 21098",
    state: "Maharashtra",
    district: "Pune",
    joinDate: "2024-01-10",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "Sunita Joshi",
    email: "sunita.joshi@email.com",
    phone: "+91 65432 10987",
    state: "Maharashtra",
    district: "Mumbai",
    joinDate: "2024-03-05",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@email.com",
    phone: "+91 54321 09876",
    state: "Rajasthan",
    district: "Jaipur",
    joinDate: "2024-02-28",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    name: "Meera Agarwal",
    email: "meera.agarwal@email.com",
    phone: "+91 43210 98765",
    state: "Uttar Pradesh",
    district: "Lucknow",
    joinDate: "2024-01-25",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("all")
  const [selectedDistrict, setSelectedDistrict] = useState("all")

  // Filter members based on search and location filters
  const filteredMembers = mockMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesState = selectedState === "all" || member.state === selectedState
    const matchesDistrict = selectedDistrict === "all" || member.district === selectedDistrict

    return matchesSearch && matchesState && matchesDistrict
  })

  // Get unique states and districts for filter options
  const states = [...new Set(mockMembers.map((member) => member.state))]
  const districts =
    selectedState === "all"
      ? [...new Set(mockMembers.map((member) => member.district))]
      : [...new Set(mockMembers.filter((member) => member.state === selectedState).map((member) => member.district))]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-black text-lg">ॐ</span>
              </div>
              <div>
                <h1 className="font-serif font-black text-xl text-primary">Brahman Samaj</h1>
                <p className="text-sm text-muted-foreground">Parshuram Sena</p>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" />
                  <AvatarFallback>RS</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Rajesh Sharma</span>
              </div>
              <Button variant="ghost" size="sm">
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="font-serif font-black text-3xl text-primary mb-2">Welcome to Your Dashboard</h1>
          <p className="text-muted-foreground">Connect with fellow community members and manage your profile</p>
        </div>

        <Tabs defaultValue="members" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-[400px]">
            <TabsTrigger value="members" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Members
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Events
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Profile
            </TabsTrigger>
          </TabsList>

          <TabsContent value="members" className="space-y-6">
            {/* Filters Section */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif font-bold text-primary flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  Find Members
                </CardTitle>
                <CardDescription>Search and filter community members by location</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <Label htmlFor="search" className="font-medium mb-2 block">
                      Search Members
                    </Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="search"
                        placeholder="Search by name or email..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="min-w-[150px]">
                      <Label htmlFor="state-filter" className="font-medium mb-2 block">
                        State
                      </Label>
                      <Select value={selectedState} onValueChange={setSelectedState}>
                        <SelectTrigger>
                          <SelectValue placeholder="All States" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All States</SelectItem>
                          {states.map((state) => (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="min-w-[150px]">
                      <Label htmlFor="district-filter" className="font-medium mb-2 block">
                        District
                      </Label>
                      <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                        <SelectTrigger>
                          <SelectValue placeholder="All Districts" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="all">All Districts</SelectItem>
                          {districts.map((district) => (
                            <SelectItem key={district} value={district}>
                              {district}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span>
                    Showing {filteredMembers.length} of {mockMembers.length} members
                  </span>
                  {(selectedState !== "all" || selectedDistrict !== "all" || searchTerm) && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => {
                        setSearchTerm("")
                        setSelectedState("all")
                        setSelectedDistrict("all")
                      }}
                      className="text-primary hover:text-accent"
                    >
                      Clear filters
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Members Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMembers.map((member) => (
                <Card key={member.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <CardTitle className="font-serif font-bold text-primary text-lg">{member.name}</CardTitle>
                        <CardDescription className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          {member.district}, {member.state}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-sm text-muted-foreground">Email: {member.email}</p>
                      <p className="text-sm text-muted-foreground">Phone: {member.phone}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-xs">
                        Joined {new Date(member.joinDate).toLocaleDateString()}
                      </Badge>
                      <Button
                        size="sm"
                        variant="outline"
                        className="hover:bg-primary hover:text-primary-foreground bg-transparent"
                      >
                        Connect
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredMembers.length === 0 && (
              <Card className="text-center py-12">
                <CardContent>
                  <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">No Members Found</h3>
                  <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif font-bold text-primary">Upcoming Events</CardTitle>
                <CardDescription>Community events and gatherings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="font-serif font-bold text-lg text-primary mb-2">No Events Scheduled</h3>
                  <p className="text-muted-foreground">Check back later for upcoming community events</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-serif font-bold text-primary">Profile Settings</CardTitle>
                <CardDescription>Manage your account information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" defaultValue="Rajesh" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" defaultValue="Sharma" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" defaultValue="rajesh.sharma@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input id="phone" defaultValue="+91 98765 43210" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="state">State</Label>
                    <Select defaultValue="maharashtra">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="gujarat">Gujarat</SelectItem>
                        <SelectItem value="rajasthan">Rajasthan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="district">District</Label>
                    <Select defaultValue="mumbai">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="nagpur">Nagpur</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="bg-accent hover:bg-accent/90">Update Profile</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
