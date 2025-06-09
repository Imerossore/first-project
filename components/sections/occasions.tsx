import {
  Calendar,
  Heart,
  Baby,
  Gift,
  GraduationCap,
  Building2,
} from "lucide-react";

const OCCASIONS = [
  {
    icon: Heart,
    name: "Weddings",
    hashtag: "#wedding",
    description: "Custom invitations, vow booklets & romantic keepsakes",
    color: "rose",
  },
  {
    icon: Gift,
    name: "Birthdays",
    hashtag: "#birthdaycelebration",
    description: "Personalized mugs, custom accessories & party favors",
    color: "purple",
  },
  {
    icon: Baby,
    name: "Christening",
    hashtag: "#christening",
    description: "Blessed keepsakes, rosaries & baptismal souvenirs",
    color: "blue",
  },
  {
    icon: GraduationCap,
    name: "Graduation",
    hashtag: "#graduation",
    description: "Achievement keepsakes & congratulatory gifts",
    color: "green",
  },
  {
    icon: Building2,
    name: "Corporate Events",
    hashtag: "#corporateevents",
    description: "Branded merchandise & professional giveaways",
    color: "slate",
  },
  {
    icon: Calendar,
    name: "All Occasions",
    hashtag: "#souvenirsforalloccasions",
    description: "Perfect souvenirs for any special moment",
    color: "amber",
  },
];

export default function Occasions() {
  return (
    <section className="py-24 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-zinc-900 mb-4">
            Perfect for Every Occasion
          </h2>
          <p className="text-xl text-zinc-600 font-light max-w-2xl mx-auto">
            From intimate celebrations to grand events, we create memorable
            souvenirs that capture your special moments
          </p>
          <div className="mt-6 text-[#823613] font-medium">
            #didayssucculentcornerandgardendecor
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {OCCASIONS.map((occasion, i) => {
            const Icon = occasion.icon;
            return (
              <div
                key={i}
                className={`group p-6 rounded-2xl bg-${occasion.color}-50 border border-${occasion.color}-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center`}
              >
                <div
                  className={`w-12 h-12 bg-${occasion.color}-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="font-semibold text-zinc-900 mb-2">
                  {occasion.name}
                </h3>

                <p className="text-xs text-zinc-600 mb-3 leading-relaxed">
                  {occasion.description}
                </p>

                <div
                  className={`text-xs font-medium text-${occasion.color}-600 bg-${occasion.color}-100 px-2 py-1 rounded-full`}
                >
                  {occasion.hashtag}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-amber-100 to-orange-100 rounded-2xl p-6 border border-amber-200">
            <p className="text-[#823613] font-medium mb-2">
              🎉 Custom designs available for any occasion!
            </p>
            <p className="text-sm text-zinc-600">
              Tell us your vision and we&apos;ll bring it to life with our
              personalized touch
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
