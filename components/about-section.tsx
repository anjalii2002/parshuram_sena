import { Card, CardContent } from "@/components/ui/card"
import { Users, Heart, Star, Shield } from "lucide-react"

export function AboutSection() {
  const values = [
    {
      icon: Users,
      title: "Community Unity",
      description: "Bringing together members from all walks of life to strengthen our collective bond.",
    },
    {
      icon: Heart,
      title: "Cultural Heritage",
      description: "Preserving and celebrating our rich traditions for future generations.",
    },
    {
      icon: Star,
      title: "Excellence",
      description: "Striving for excellence in all our endeavors and community initiatives.",
    },
    {
      icon: Shield,
      title: "Protection & Support",
      description: "Providing support and protection to community members in times of need.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">About Us</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Discover our rich traditions and collective mission to uplift our community through unity, heritage
            preservation, and mutual support.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Our Mission</h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              The Brahman Samaj Parshuram Sena is dedicated to fostering unity among our community members while
              preserving our cultural heritage and traditions. We work tirelessly to create opportunities for growth,
              education, and mutual support.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Through various initiatives, events, and programs, we aim to strengthen the bonds within our community and
              ensure that our rich cultural legacy continues to thrive in the modern world.
            </p>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=500"
              alt="Community Values"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{value.title}</h4>
                <p className="text-slate-600">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
