"use client"

import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, MapPin, Users } from "lucide-react"
import { MemberCard } from "./member-card"

// Mock member data
const MOCK_MEMBERS = [
  {
    id: "1",
    name: "Rajesh Kumar Sharma",
    email: "rajesh.sharma@email.com",
    phone: "+91 98765 43210",
    state: "Uttar Pradesh",
    district: "Lucknow",
    profession: "Software Engineer",
    joinedDate: "2023-01-15",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "Priya Devi Mishra",
    email: "priya.mishra@email.com",
    phone: "+91 87654 32109",
    state: "Bihar",
    district: "Patna",
    profession: "Teacher",
    joinedDate: "2023-02-20",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "Amit Kumar Pandey",
    email: "amit.pandey@email.com",
    phone: "+91 76543 21098",
    state: "Madhya Pradesh",
    district: "Bhopal",
    profession: "Doctor",
    joinedDate: "2023-03-10",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "4",
    name: "Sunita Sharma",
    email: "sunita.sharma@email.com",
    phone: "+91 65432 10987",
    state: "Rajasthan",
    district: "Jaipur",
    profession: "Business Owner",
    joinedDate: "2023-04-05",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "5",
    name: "Vikash Kumar Tiwari",
    email: "vikash.tiwari@email.com",
    phone: "+91 54321 09876",
    state: "Uttar Pradesh",
    district: "Varanasi",
    profession: "Lawyer",
    joinedDate: "2023-05-12",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "6",
    name: "Meera Devi Gupta",
    email: "meera.gupta@email.com",
    phone: "+91 43210 98765",
    state: "Bihar",
    district: "Muzaffarpur",
    profession: "Nurse",
    joinedDate: "2023-06-18",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "7",
    name: "Ravi Shankar Dubey",
    email: "ravi.dubey@email.com",
    phone: "+91 32109 87654",
    state: "Madhya Pradesh",
    district: "Indore",
    profession: "Engineer",
    joinedDate: "2023-07-22",
    avatar: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "8",
    name: "Kavita Sharma",
    email: "kavita.sharma@email.com",
    phone: "+91 21098 76543",
    state: "Delhi",
    district: "New Delhi",
    profession: "Accountant",
    joinedDate: "2023-08-30",
    avatar: "/placeholder.svg?height=100&width=100",
  },
]

const STATES = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
]

export function MemberDirectory() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedState, setSelectedState] = useState<string>("all")
  const [selectedDistrict, setSelectedDistrict] = useState<string>("all")
  const [showFilters, setShowFilters] = useState(false)

  // Get unique districts based on selected state
  const availableDistricts = useMemo(() => {
    if (selectedState === "all") return []
    return [
      ...new Set(MOCK_MEMBERS.filter((member) => member.state === selectedState).map((member) => member.district)),
    ]
  }, [selectedState])

  // Filter members based on search and filters
  const filteredMembers = useMemo(() => {
    return MOCK_MEMBERS.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.profession.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.district.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.state.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesState = selectedState === "all" || member.state === selectedState
      const matchesDistrict = selectedDistrict === "all" || member.district === selectedDistrict

      return matchesSearch && matchesState && matchesDistrict
    })
  }, [searchTerm, selectedState, selectedDistrict])

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedState("all")
    setSelectedDistrict("all")
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Member Directory</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Connect with fellow community members from across India. Find members by location, profession, or name.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="h-8 w-8 text-primary mr-4" />
            <div>
              <p className="text-2xl font-bold text-primary">{MOCK_MEMBERS.length}</p>
              <p className="text-slate-600">Total Members</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <MapPin className="h-8 w-8 text-accent mr-4" />
            <div>
              <p className="text-2xl font-bold text-primary">{new Set(MOCK_MEMBERS.map((m) => m.state)).size}</p>
              <p className="text-slate-600">States Represented</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <MapPin className="h-8 w-8 text-accent mr-4" />
            <div>
              <p className="text-2xl font-bold text-primary">{new Set(MOCK_MEMBERS.map((m) => m.district)).size}</p>
              <p className="text-slate-600">Districts Covered</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Search & Filter Members</span>
            <Button variant="outline" size="sm" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-4 w-4 mr-2" />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Search by name, profession, district, or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">State</label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue placeholder="All States" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    {STATES.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">District</label>
                <Select value={selectedDistrict} onValueChange={setSelectedDistrict} disabled={selectedState === "all"}>
                  <SelectTrigger>
                    <SelectValue placeholder={selectedState !== "all" ? "All Districts" : "Select State First"} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Districts</SelectItem>
                    {availableDistricts.map((district) => (
                      <SelectItem key={district} value={district}>
                        {district}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end">
                <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
                  Clear Filters
                </Button>
              </div>
            </div>
          )}

          {/* Active Filters Display */}
          {(selectedState !== "all" || selectedDistrict !== "all" || searchTerm) && (
            <div className="flex flex-wrap gap-2 pt-2 border-t">
              <span className="text-sm text-slate-600">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">
                  Search: "{searchTerm}"
                </span>
              )}
              {selectedState !== "all" && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-accent/10 text-accent">
                  State: {selectedState}
                </span>
              )}
              {selectedDistrict !== "all" && (
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-accent/10 text-accent">
                  District: {selectedDistrict}
                </span>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results */}
      <div className="mb-6">
        <p className="text-slate-600">
          Showing {filteredMembers.length} of {MOCK_MEMBERS.length} members
        </p>
      </div>

      {/* Member Grid */}
      {filteredMembers.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      ) : (
        <Card className="text-center py-12">
          <CardContent>
            <Users className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-slate-600 mb-2">No members found</h3>
            <p className="text-slate-500 mb-4">Try adjusting your search criteria or filters.</p>
            <Button variant="outline" onClick={clearFilters}>
              Clear All Filters
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
