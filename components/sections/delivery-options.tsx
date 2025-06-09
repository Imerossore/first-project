import { DELIVERY_OPTIONS } from "@/lib/constants";
import { Truck, Users, Bus, MapPin } from "lucide-react";

const iconMap = {
  Users,
  Truck,
  Bus,
  MapPin,
};

export default function DeliveryOptions() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-zinc-900 mb-3">
            Delivery & Pickup Options
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Choose from multiple convenient delivery methods to get your custom
            souvenirs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {DELIVERY_OPTIONS.map((option, index) => {
            const Icon = iconMap[option.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className={`group relative p-6 rounded-xl bg-gradient-to-br ${option.bgGradient} border border-${option.color}-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
              >
                <div
                  className={`w-14 h-14 ${option.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-lg font-semibold text-zinc-900 mb-2 text-center">
                  {option.title}
                </h3>

                <p className="text-sm text-zinc-600 text-center leading-relaxed">
                  {option.description}
                </p>

                <div className="absolute top-3 right-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
