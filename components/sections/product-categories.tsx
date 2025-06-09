import { PRODUCT_CATEGORIES } from "@/lib/constants";
import Image from "next/image";

export default function ProductCategories() {
  return (
    <section id="products-categories" className="py-24 bg-[#faefea] ">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-light text-zinc-900 text-center mb-16">
          Product Categories
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {PRODUCT_CATEGORIES.map((category, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="bg-white/90 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square mb-3 overflow-hidden rounded-lg">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-zinc-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-zinc-500">
                  {category.items.length} items
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
