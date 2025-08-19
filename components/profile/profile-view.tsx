import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Mail, MapPin, Calendar, Edit, Phone, Briefcase } from "lucide-react"
import Link from "next/link"

interface UserProfile {
  id: string
  email: string
  name: string
  district: string
  state: string
  phone?: string
  profession?: string
  bio?: string
  joinedDate?: string
}

interface ProfileViewProps {
  user: UserProfile
}

export function ProfileView({ user }: ProfileViewProps) {
  const formatDate = (dateString?: string) => {
    if (!dateString) return "Not specified"
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">My Profile</h1>
        <p className="text-xl text-slate-600">Manage your community profile and information</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center">
                <Briefcase className="h-12 w-12 text-slate-400" />
              </div>
              <CardTitle className="text-primary">{user.name}</CardTitle>
              <p className="text-slate-600">{user.profession || "Community Member"}</p>
              <Badge variant="secondary" className="mt-2">
                Active Member
              </Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center text-slate-600">
                <Mail className="h-4 w-4 mr-3 text-accent" />
                <span className="text-sm">{user.email}</span>
              </div>
              <div className="flex items-center text-slate-600">
                <MapPin className="h-4 w-4 mr-3 text-accent" />
                <span className="text-sm">
                  {user.district}, {user.state}
                </span>
              </div>
              {user.phone && (
                <div className="flex items-center text-slate-600">
                  <Phone className="h-4 w-4 mr-3 text-accent" />
                  <span className="text-sm">{user.phone}</span>
                </div>
              )}
              <div className="flex items-center text-slate-600">
                <Calendar className="h-4 w-4 mr-3 text-accent" />
                <span className="text-sm">Joined {formatDate(user.joinedDate)}</span>
              </div>
              <Link href="/profile/edit">
                <Button className="w-full mt-4">
                  <Edit className="h-4 w-4 mr-2" />
                  Edit Profile
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2 space-y-6">
          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-primary" />
                Personal Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Full Name</label>
                  <p className="text-slate-900 mt-1">{user.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Email Address</label>
                  <p className="text-slate-900 mt-1">{user.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Phone Number</label>
                  <p className="text-slate-900 mt-1">{user.phone || "Not provided"}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Profession</label>
                  <p className="text-slate-900 mt-1">{user.profession || "Not specified"}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                Location Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">State</label>
                  <p className="text-slate-900 mt-1">{user.state}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">District</label>
                  <p className="text-slate-900 mt-1">{user.district}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Bio Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="h-5 w-5 mr-2 text-primary" />
                About Me
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                {user.bio ||
                  "No bio provided yet. Click 'Edit Profile' to add information about yourself and your involvement in the community."}
              </p>
            </CardContent>
          </Card>

          {/* Account Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                Account Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-slate-700">Member Since</label>
                  <p className="text-slate-900 mt-1">{formatDate(user.joinedDate)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-slate-700">Account Status</label>
                  <p className="text-slate-900 mt-1">
                    <Badge variant="secondary">Active</Badge>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
