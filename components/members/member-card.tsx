import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Mail, Phone, Briefcase, Calendar } from "lucide-react"

interface Member {
  id: string
  name: string
  email: string
  phone: string
  state: string
  district: string
  profession: string
  joinedDate: string
  avatar: string
}

interface MemberCardProps {
  member: Member
}

export function MemberCard({ member }: MemberCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
    })
  }

  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="text-center pb-4">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden bg-slate-200">
          <img src={member.avatar || "/placeholder.svg"} alt={member.name} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-lg font-semibold text-primary">{member.name}</h3>
        <div className="flex items-center justify-center text-slate-600 text-sm">
          <Briefcase className="h-4 w-4 mr-1" />
          {member.profession}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center text-slate-600 text-sm">
          <MapPin className="h-4 w-4 mr-2 text-accent" />
          <span>
            {member.district}, {member.state}
          </span>
        </div>

        <div className="flex items-center text-slate-600 text-sm">
          <Mail className="h-4 w-4 mr-2 text-accent" />
          <span className="truncate">{member.email}</span>
        </div>

        <div className="flex items-center text-slate-600 text-sm">
          <Phone className="h-4 w-4 mr-2 text-accent" />
          <span>{member.phone}</span>
        </div>

        <div className="flex items-center text-slate-600 text-sm">
          <Calendar className="h-4 w-4 mr-2 text-accent" />
          <span>Joined {formatDate(member.joinedDate)}</span>
        </div>

        <div className="pt-4 space-y-2">
          <Button variant="default" size="sm" className="w-full">
            Connect
          </Button>
          <Button variant="outline" size="sm" className="w-full bg-transparent">
            View Profile
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
