"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, Star, ArrowLeft, ShoppingCart, Zap } from "lucide-react";
import { FEATURED_PRODUCTS } from "@/lib/constants";
import Image from "next/image";

const categories = ["All", "Keychains", "Mugs", "Cards", "Custom"];

export default function AllProducts() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts = FEATURED_PRODUCTS.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-zinc-50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Back Button */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-zinc-600 hover:text-[#823613] transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm font-medium">Back</span>
            </button>
            <div className="h-4 w-px bg-zinc-300" />
            <span className="text-sm text-zinc-500">
              {filteredProducts.length} products found
            </span>
          </div>
          <h1 className="text-4xl font-light text-zinc-900 mb-2">
            All Products
          </h1>
          <p className="text-zinc-600 text-lg">
            Browse our complete collection of custom souvenirs
          </p>
        </div>

        {/* Enhanced Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm border border-zinc-100">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zinc-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-zinc-200 rounded-xl focus:ring-2 focus:ring-[#823613] focus:border-transparent transition-all"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl whitespace-nowrap transition-all font-medium ${
                    selectedCategory === category
                      ? "bg-[#823613] text-white shadow-lg"
                      : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:scale-105"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-zinc-100"
            >
              <div className="aspect-square mb-4 overflow-hidden rounded-xl relative">
                {product.featured && (
                  <div className="absolute top-3 left-3 bg-[#823613] text-white text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Star className="w-3 h-3 fill-current" />
                    <span className="font-medium">Featured</span>
                  </div>
                )}
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="space-y-3">
                <h3 className="font-semibold text-zinc-900 text-sm leading-tight">
                  {product.name}
                </h3>
                <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                  {product.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#823613] text-lg">
                    {product.price}
                  </span>
                  <span className="text-xs text-zinc-500 bg-zinc-100 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2">
                  <button className="flex items-center justify-center gap-1.5 text-xs border-2 border-[#823613] text-[#823613] py-2.5 rounded-xl hover:bg-[#823613] hover:text-white transition-all duration-300 font-medium group/btn">
                    <ShoppingCart className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                    Cart
                  </button>
                  <button className="flex items-center justify-center gap-1.5 text-xs bg-[#823613] text-white py-2.5 rounded-xl hover:bg-amber-800 hover:scale-105 transition-all duration-300 font-medium group/btn">
                    <Zap className="w-3.5 h-3.5 group-hover/btn:scale-110 transition-transform" />
                    Buy
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-white rounded-2xl p-12 max-w-md mx-auto shadow-sm">
              <div className="w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-zinc-400" />
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 mb-2">
                No products found
              </h3>
              <p className="text-zinc-500 mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All");
                }}
                className="text-[#823613] hover:underline font-medium"
              >
                Clear filters
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
