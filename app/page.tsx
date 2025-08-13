import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, MapPin, Calendar, Heart } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-black text-lg">ॐ</span>
              </div>
              <div>
                <h1 className="font-serif font-black text-xl text-primary">Brahman Samaj</h1>
                <p className="text-sm text-muted-foreground">Parshuram Sena</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#community" className="text-foreground hover:text-primary transition-colors">
                Community
              </a>
              {/* Added Members link to navigation */}
              <Link href="/members" className="text-foreground hover:text-primary transition-colors">
                Members
              </Link>
              <a href="#events" className="text-foreground hover:text-primary transition-colors">
                Events
              </a>
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

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-6 bg-secondary text-secondary-foreground">Welcome to Our Community</Badge>
          <h1 className="font-serif font-black text-4xl md:text-6xl text-primary mb-6 leading-tight">
            Where Tradition Meets Community
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Join us in fostering connections and celebrating our heritage. Connect with fellow members, share events,
            and uphold our traditions together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 transition-all transform hover:scale-105"
              >
                Become a Member Today!
              </Button>
            </Link>
            <Link href="/members">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 transition-all bg-transparent"
              >
                Browse Members
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="community" className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="font-serif font-black text-3xl md:text-4xl text-primary mb-4">
              Together, We Build Stronger Communities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with a network that values your heritage and fosters meaningful connections
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif font-bold text-primary">Community Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Connect with fellow members across different regions and build lasting relationships
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-serif font-bold text-primary">Location-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Find and connect with members in your district and state for local events
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif font-bold text-primary">Cultural Events</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Participate in traditional celebrations and community gatherings
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-border/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-serif font-bold text-primary">Heritage Pride</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Celebrate and preserve our rich cultural heritage for future generations
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="font-serif font-black text-3xl md:text-4xl text-primary mb-6">Ready to Join Our Community?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Become part of a vibrant community that celebrates tradition while embracing modern connections. Register
            today and start building meaningful relationships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-3 transition-all transform hover:scale-105"
              >
                Register Now
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 transition-all bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground font-serif font-black text-lg">ॐ</span>
                </div>
                <div>
                  <h3 className="font-serif font-black text-xl text-primary">Brahman Samaj Parshuram Sena</h3>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Building stronger communities rooted in culture and respect. Join us in celebrating our heritage and
                fostering meaningful connections.
              </p>
            </div>
            <div>
              <h4 className="font-serif font-bold text-primary mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#about" className="hover:text-primary transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#community" className="hover:text-primary transition-colors">
                    Community
                  </a>
                </li>
                <li>
                  <Link href="/members" className="hover:text-primary transition-colors">
                    Members
                  </Link>
                </li>
                <li>
                  <a href="#events" className="hover:text-primary transition-colors">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif font-bold text-primary mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#help" className="hover:text-primary transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Brahman Samaj Parshuram Sena. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
