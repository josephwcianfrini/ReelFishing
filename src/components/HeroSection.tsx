"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-bark-dark to-charcoal" />
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C2B280' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cream to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Tagline above */}
        <p className="text-sand/80 text-sm uppercase tracking-[0.3em] mb-4 font-light animate-[fadeIn_1s_ease-out]">
          Born on the Bayou &bull; Built for the Water
        </p>

        {/* Main title - Western cowboy font */}
        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-cream mb-6 leading-tight animate-[fadeInUp_0.8s_ease-out]">
          Reel Fishing
        </h1>

        {/* Western divider */}
        <div className="flex items-center justify-center gap-4 mb-6 animate-[fadeIn_1.2s_ease-out]">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-sand" />
          <svg
            className="w-6 h-6 text-sand"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-sand" />
        </div>

        {/* Subtitle */}
        <p className="text-cream/70 text-lg sm:text-xl md:text-2xl font-light mb-10 max-w-2xl mx-auto leading-relaxed animate-[fadeIn_1.4s_ease-out]">
          Premium southern fishing apparel with
          <span className="text-sand font-normal"> western soul</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fadeIn_1.6s_ease-out]">
          <Button
            size="xl"
            variant="default"
            onClick={scrollToProducts}
            className="w-full sm:w-auto uppercase tracking-wider"
          >
            Shop the Collection
          </Button>
          <Button
            size="xl"
            variant="outline"
            className="w-full sm:w-auto uppercase tracking-wider border-sand/50 text-sand hover:bg-sand hover:text-charcoal"
            onClick={scrollToProducts}
          >
            View All Products
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProducts}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sand/50 hover:text-sand transition-colors duration-300 animate-bounce cursor-pointer"
        aria-label="Scroll to products"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
