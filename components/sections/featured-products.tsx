"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/lib/constants";
import Link from "next/link";
import Image from "next/image";

export default function Products() {
  const [activeTab, setActiveTab] = useState("best");

  const getFilteredProducts = () => {
    return activeTab === "best"
      ? FEATURED_PRODUCTS.slice(0, 4)
      : FEATURED_PRODUCTS.slice(2, 6);
  };

  return (
    <section id="products" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-zinc-900 mb-4">
            Our Products
          </h2>
          <p className="text-zinc-600 font-light">
            Handcrafted souvenirs with custom designs for all occasions
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-zinc-100 rounded-full p-1 flex">
            <button
              onClick={() => setActiveTab("best")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "best"
                  ? "bg-[#823613] text-white"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              Best Sellers
            </button>
            <button
              onClick={() => setActiveTab("new")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === "new"
                  ? "bg-[#823613] text-white"
                  : "text-zinc-600 hover:text-zinc-900"
              }`}
            >
              New Products
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {getFilteredProducts().map((product, i) => (
            <div key={i} className="group">
              <div className="bg-zinc-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-square mb-3 overflow-hidden rounded-lg relative">
                  {activeTab === "best" && i < 2 && (
                    <div className="absolute top-2 left-2 bg-[#823613] text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Star className="w-3 h-3 fill-current" />
                    </div>
                  )}
                  {activeTab === "new" && (
                    <div className="absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                      New
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-zinc-900 mb-1 text-sm">
                  {product.name}
                </h3>
                <p className="text-xs text-zinc-600 mb-2 line-clamp-2">
                  {product.desc}
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-[#823613]">
                      {product.price}
                    </span>
                  </div>
                  <div className="flex gap-1">
                    <button className="flex-1 text-xs border border-[#823613] text-[#823613] py-1 rounded-full hover:bg-[#823613] hover:text-white transition-colors">
                      Add to Cart
                    </button>
                    <button className="flex-1 text-xs bg-[#823613] text-white py-1 rounded-full hover:bg-amber-800 transition-colors">
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/all-products"
            className="inline-block px-6 py-2 border border-[#823613] text-[#823613] rounded-full hover:bg-[#823613] hover:text-white transition-all text-sm font-medium"
          >
            View All Products →
          </Link>
        </div>
      </div>
    </section>
  );
}
