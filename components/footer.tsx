import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Brahman Samaj Parshuram Sena</h3>
            <p className="text-slate-300 mb-4">
              Unity in Heritage, Strength in Community. Building a stronger future together.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#events" className="text-slate-300 hover:text-white transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#get-involved" className="text-slate-300 hover:text-white transition-colors">
                  Get Involved
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Community Support
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Cultural Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Educational Initiatives
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-white transition-colors">
                  Member Directory
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-slate-400" />
                <span className="text-slate-300">info@brahmansena.org</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-slate-400" />
                <span className="text-slate-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                <span className="text-slate-300">New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">© 2024 Brahman Samaj Parshuram Sena. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
