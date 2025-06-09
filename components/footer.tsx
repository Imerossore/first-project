import { WEBSITE_TITLE } from "@/lib/constants";
import { Phone, MapPin, Award } from "lucide-react";
import BrandLogo from "./brand-logo";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <BrandLogo />
              <span className="text-xl font-light tracking-wide">
                {WEBSITE_TITLE}
              </span>
            </div>
            <p className="text-zinc-400 text-sm font-light">
              Certified business specializing in unique & affordable souvenirs.
              Custom designs, quality craftsmanship, and personal service.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Info</h3>
            <div className="space-y-2 text-zinc-400">
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                0936-850-7025 (Look for Diday!)
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                P1, Brgy. Sto. Niño, Cabanatuan City
              </p>
              <p className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certified Business
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="#products"
                className="block text-zinc-400 hover:text-white transition-colors font-light"
              >
                Our Products
              </a>
              <a
                href="https://maps.app.goo.gl/9Rp9ByozDvTmeYYp8"
                target="_blank"
                className="block text-zinc-400 hover:text-white transition-colors font-light"
              >
                Find Our Store
              </a>
              <a
                href="tel:09368507025"
                className="block text-zinc-400 hover:text-white transition-colors font-light"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800 pt-8">
          <div className="text-center">
            <span className="text-zinc-400 text-sm font-light">
              © {new Date().getFullYear()} Diday&apos;s Succulent Corner and
              Garden Decor. Certified Business. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
