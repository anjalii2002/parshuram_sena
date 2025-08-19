import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { VoteIcon as Volunteer, DollarSign, Users, Calendar } from "lucide-react"

export function GetInvolvedSection() {
  const ways = [
    {
      icon: Volunteer,
      title: "Volunteer",
      description: "Join our team of dedicated volunteers and make a direct impact in our community.",
      action: "Become a Volunteer",
    },
    {
      icon: DollarSign,
      title: "Donate",
      description: "Support our initiatives and programs with your generous contributions.",
      action: "Make a Donation",
    },
    {
      icon: Users,
      title: "Become a Member",
      description: "Join our community and enjoy exclusive benefits and networking opportunities.",
      action: "Join Now",
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Participate in our cultural events, seminars, and community gatherings.",
      action: "View Events",
    },
  ]

  return (
    <section id="get-involved" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get Involved</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Become a part of our journey. There are many ways to contribute and make a difference in our community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ways.map((way, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-4 mx-auto">
                  <way.icon className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-primary">{way.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600">{way.description}</p>
                <Button variant="outline" className="w-full bg-transparent">
                  {way.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-primary to-accent rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Make a Difference?</h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of community members who are already making an impact. Together, we can achieve more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Sign Up Today
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
