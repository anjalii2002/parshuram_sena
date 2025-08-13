"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, MapPin, Search, Filter, Mail, Phone } from "lucide-react"
import Link from "next/link"

// Extended mock member data for directory
const directoryMembers = [
  {
    id: 1,
    name: "Rajesh Sharma",
    email: "rajesh.sharma@email.com",
    phone: "+91 98765 43210",
    state: "Maharashtra",
    district: "Mumbai",
    profession: "Software Engineer",
    joinDate: "2024-01-15",
    avatar: "/placeholder.svg?height=60&width=60",
    bio: "Community volunteer and technology enthusiast",
  },
  {
    id: 2,
    name: "Priya Patel",
    email: "priya.patel@email.com",
    phone: "+91 87654 32109",
    state: "Gujarat",
    district: "Ahmedabad",
    profession: "Teacher",
    joinDate: "2024-02-20",
    avatar: "/placeholder.svg?height=60&width=60",
    bio: "Dedicated educator and cultural preservationist",
  },
  {
    id: 3,
    name: "Amit Gupta",
    email: "amit.gupta@email.com",
    phone: "+91 76543 21098",
    state: "Maharashtra",
    district: "Pune",
    profession: "Business Owner",
    joinDate: "2024-01-10",
    avatar: "/placeholder.svg?height=60&width=60",
    bio: "Entrepreneur supporting local community initiatives",
  },
  {
    id: 4,
    name: "Sunita Joshi",
    email: "sunita.joshi@email.com",
    phone: "+91 65432 10987",
    state: "Maharashtra",
    district: "Mumbai",
    profession: "Doctor",
    joinDate: "2024-03-05",
    avatar: "/placeholder.svg?height=60&width=60",
    bio: "Healthcare professional and community health advocate",
  },
  {
    id: 5,
    name: "Vikram Singh",
    email: "vikram.singh@email.com",
    phone: "+91 54321 09876",
    state: "Rajasthan",
    district: "Jaipur",
    profession: "Lawyer",
    joinDate: "2024-02-28",
    avatar: "/placeholder.svg?height=60&width=60",
    bio: "Legal advisor and social justice advocate",
  },
  {
    id: 6,
    name: "Meera Agarwal",
    email: "meera.agarwal@email.com",
    phone: "+91 43210 98765",
    state: "Uttar Pradesh",
    district: "Lucknow",
    profession: "Artist",
    joinDate: "2024-01-25",
    avatar: "/placeholder.svg?height=60&width=60",
    bio: "Traditional artist promoting cultural heritage",
  },
  {
    id: 7,
    name: "Deepak Mishra",
    email: "deepak.mishra@email.com",
    phone: "+91 32109 87654",
    state: "Madhya Pradesh",
    district: "Bhopal",
    profession: "Government Officer",
    joinDate: "2024-03-12",
    avatar: "/placeholder.svg?height=60&width=60",
    bio: "Public servant committed to community development",
  },
  {
    id: 8,
    name: "Kavita Rao",
    email: "kavita.rao@email.com",
    phone: "+91 21098 76543",
    state: "Karnataka",
    district: "Bangalore",
    profession: "IT Consultant",
    joinDate: "2024-02-14",
    avatar: "/placeholder.svg?height=60&width=60",
    bio: "Technology consultant and digital literacy advocate",
  },
]

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState("all")
  const [selectedDistrict, setSelectedDistrict] = useState("all")
  const [selectedProfession, setSelectedProfession] = useState("all")

  // Filter members based on search and filters
  const filteredMembers = directoryMembers.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.bio.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesState = selectedState === "all" || member.state === selectedState
    const matchesDistrict = selectedDistrict === "all" || member.district === selectedDistrict
    const matchesProfession = selectedProfession === "all" || member.profession === selectedProfession

    return matchesSearch && matchesState && matchesDistrict && matchesProfession
  })

  // Get unique values for filter options
  const states = [...new Set(directoryMembers.map((member) => member.state))]
  const districts =
    selectedState === "all"
      ? [...new Set(directoryMembers.map((member) => member.district))]
      : [
          ...new Set(
            directoryMembers.filter((member) => member.state === selectedState).map((member) => member.district),
          ),
        ]
  const professions = [...new Set(directoryMembers.map((member) => member.profession))]

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
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/members" className="text-primary font-medium">
                Members
              </Link>
              <Link href="/signin">
                <Button
                  variant="outline"
                  className="hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-accent hover:bg-accent/90 transition-all transform hover:scale-105">
                  Join Now
                </Button>
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif font-black text-4xl md:text-5xl text-primary mb-4">Member Directory</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Connect with our diverse community of members across different states and professions
          </p>
          <div className="flex items-center justify-center gap-4 mt-6">
            <Badge variant="secondary" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              {directoryMembers.length} Total Members
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {states.length} States
            </Badge>
          </div>
        </div>

        {/* Filters Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="font-serif font-bold text-primary flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Search & Filter Members
            </CardTitle>
            <CardDescription>Find members by name, profession, or location</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="search" className="font-medium">
                  Search
                </Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Name, profession, bio..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="state-filter" className="font-medium">
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
              <div className="space-y-2">
                <Label htmlFor="district-filter" className="font-medium">
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
              <div className="space-y-2">
                <Label htmlFor="profession-filter" className="font-medium">
                  Profession
                </Label>
                <Select value={selectedProfession} onValueChange={setSelectedProfession}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Professions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Professions</SelectItem>
                    {professions.map((profession) => (
                      <SelectItem key={profession} value={profession}>
                        {profession}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Showing {filteredMembers.length} of {directoryMembers.length} members
              </span>
              {(selectedState !== "all" ||
                selectedDistrict !== "all" ||
                selectedProfession !== "all" ||
                searchTerm) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedState("all")
                    setSelectedDistrict("all")
                    setSelectedProfession("all")
                  }}
                  className="text-primary hover:text-accent"
                >
                  Clear all filters
                </Button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Members Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={member.avatar || "/placeholder.svg"} />
                    <AvatarFallback className="bg-primary/10 text-primary font-serif font-bold">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <CardTitle className="font-serif font-bold text-primary text-lg mb-1">{member.name}</CardTitle>
                    <Badge variant="secondary" className="mb-2">
                      {member.profession}
                    </Badge>
                    <CardDescription className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {member.district}, {member.state}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{member.bio}</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Mail className="h-3 w-3" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-3 w-3" />
                    <span>{member.phone}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs text-muted-foreground">
                    Member since {new Date(member.joinDate).toLocaleDateString()}
                  </span>
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

        {/* No Results */}
        {filteredMembers.length === 0 && (
          <Card className="text-center py-16">
            <CardContent>
              <Users className="h-16 w-16 text-muted-foreground mx-auto mb-6" />
              <h3 className="font-serif font-bold text-2xl text-primary mb-4">No Members Found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or browse all members by clearing the filters
              </p>
              <Button
                onClick={() => {
                  setSearchTerm("")
                  setSelectedState("all")
                  setSelectedDistrict("all")
                  setSelectedProfession("all")
                }}
                className="bg-accent hover:bg-accent/90"
              >
                Show All Members
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="py-12">
              <h2 className="font-serif font-black text-3xl text-primary mb-4">Join Our Growing Community</h2>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect with like-minded individuals, share experiences, and be part of our vibrant community network
              </p>
              <Link href="/signup">
                <Button size="lg" className="bg-accent hover:bg-accent/90 font-semibold px-8 py-3">
                  Become a Member
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
