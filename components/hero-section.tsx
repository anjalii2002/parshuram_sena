import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 to-pink-50"
    >
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-10"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6 leading-tight">
          Welcome to
          <br />
          <span className="text-accent">Brahman Samaj Parshuram Sena</span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Unity in Heritage, Strength in Community
        </p>

        <p className="text-lg text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          Join us in celebrating our rich traditions and collective mission to uplift our community. Together, we
          preserve our heritage while building a stronger future for generations to come.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="text-lg px-8 py-3">
            Learn More
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-8 py-3 bg-transparent">
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  )
}
