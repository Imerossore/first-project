import { ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#faefea" }}
    >
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-amber-100 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 py-20 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-extralight text-zinc-900 leading-tight">
                Unique &
                <span className="block bg-gradient-to-r from-amber-700 via-orange-700 to-red-800 bg-clip-text text-transparent">
                  Affordable
                </span>
                Souvenirs
              </h1>
              <p className="text-xl text-zinc-600 font-light leading-relaxed max-w-lg">
                ✨ Discover our personalized souvernirs and invitations
                &mdash;crafted with style, made for every celebration!
              </p>
            </div>

            <div className="bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 mb-8 border border-amber-200">
              <div className="flex items-center gap-3 mb-3">
                <Star className="w-5 h-5 fill-current text-[#823613]" />
                <span className="font-semibold text-[#823613]">
                  🌟 Early Bird Special
                </span>
              </div>
              <p className="text-[#823613]">
                Early reservations get 3-10% OFF + freebies! Contact us for
                current promotions.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="#products"
                className="group flex items-center gap-3 px-8 py-4 text-white rounded-full hover:bg-amber-800 transition-all duration-300"
                style={{ backgroundColor: "#823613" }}
              >
                <span className="font-medium">Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#products-categories"
                className="px-8 py-4 border border-[#823613] rounded-full hover:bg-zinc-50 transition-colors font-light text-zinc-700"
              >
                Browse Collections
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] relative">
              <Image
                src={"/sky-bg.png"}
                alt="Diday's Corner souvenirs"
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-light text-zinc-600">
                    Custom Made Daily
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
