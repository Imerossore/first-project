import {
  MapPin,
  Phone,
  MessageCircle,
  Gift,
  CheckCircle,
  Star,
} from "lucide-react";

export default function LocationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-50 to-amber-50/30 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Visit Our Store
          </div>
          <h1 className="text-5xl font-light text-zinc-900 mb-6">
            📍 Find Us in Cabanatuan
          </h1>
          <p className="text-xl text-zinc-600 font-light max-w-2xl mx-auto">
            Located in the heart of Cabanatuan City, we&apos;re ready to help
            you create memorable souvenirs
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Map Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-zinc-100">
              <div className="aspect-video w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.5971907788394!2d120.9221364!3d15.452277100000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339729dd45090cb9%3A0xad7c8fd9253e5330!2sDIDAY&#39;S%20SOUVENIR%20SHOP!5e0!3m2!1sen!2sph!4v1749290643950!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Diday's Souvenir Shop Location"
                  className="grayscale-0 hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div className="p-6 bg-gradient-to-r from-[#823613] to-amber-800 text-white">
                <div>
                  <h3 className="text-lg font-semibold mb-1">
                    Diday&apos;s Souvenir Shop
                  </h3>
                  <p className="text-amber-100">
                    P1, Brgy. Sto. Niño, Cabanatuan City
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-zinc-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-[#823613] rounded-2xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-zinc-900">
                    Contact Us
                  </h3>
                  <p className="text-zinc-500">Get in touch today</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl">
                  <MapPin className="w-5 h-5 text-[#823613] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-zinc-900">Address</p>
                    <p className="text-sm text-zinc-600">
                      P1, Brgy. Sto. Niño, Cabanatuan City
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl">
                  <Phone className="w-5 h-5 text-[#823613] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-zinc-900">Phone</p>
                    <a
                      href="tel:09368507025"
                      className="text-sm text-[#823613] hover:underline"
                    >
                      0936-850-7025 (Ask for Diday!)
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-zinc-50 rounded-2xl">
                  <MessageCircle className="w-5 h-5 text-[#823613] flex-shrink-0" />
                  <div>
                    <p className="font-medium text-zinc-900">Facebook</p>
                    <p className="text-sm text-zinc-600">
                      Message us for quick responses
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rating Card */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-6 border border-amber-200">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm font-medium text-amber-800">
                  4.8/5
                </span>
              </div>
              <p className="text-sm text-amber-700">
                &qout;Excellent service and quality products! Highly recommended
                for custom souvenirs. &qout;
              </p>
            </div>
          </div>
        </div>

        {/* Order Methods */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-zinc-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900">
                  How to Order
                </h3>
                <p className="text-zinc-500">Multiple ways to reach us</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-700">
                <Phone className="w-5 h-5 text-blue-500" />
                <span>📞 Call/Text: 0936-850-7025</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-700">
                <MessageCircle className="w-5 h-5 text-blue-500" />
                <span>📩 Message us on Facebook</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-700">
                <Gift className="w-5 h-5 text-blue-500" />
                <span>🎁 Mention early reservation for discounts!</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-zinc-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900">
                  Why Choose Us
                </h3>
                <p className="text-zinc-500">Your trusted souvenir partner</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-zinc-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>✅ Certified business for peace of mind</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>🎨 Custom designs available</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>🚚 Fast turnaround time</span>
              </div>
              <div className="flex items-center gap-3 text-zinc-700">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>💝 Affordable pricing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
