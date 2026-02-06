"use client";

import React, { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import { cn } from "@/lib/utils";

export default function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-moss text-sm font-semibold uppercase tracking-widest mb-2">
            The Collection
          </p>
          <h2 className="font-heading text-4xl sm:text-5xl text-bark-dark mb-4">
            Shop Our Gear
          </h2>
          <div className="bayou-divider max-w-xs mx-auto mb-6">
            <span className="text-sand-dark text-xl">&#9874;</span>
          </div>
          <p className="text-charcoal-light max-w-xl mx-auto">
            Apparel crafted for anglers who live the lifestyle. Every piece is
            designed with the southern outdoors in mind.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-full transition-all duration-300 cursor-pointer",
                activeCategory === cat
                  ? "bg-moss text-white shadow-md"
                  : "bg-sand/40 text-charcoal hover:bg-sand hover:text-charcoal-light"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="page-enter"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-charcoal-light text-lg">
              No products in this category yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
