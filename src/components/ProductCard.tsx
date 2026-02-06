"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden hover-lift border-sand/50 hover:border-moss/30">
      {/* Image Container */}
      <div className="relative aspect-[3/4] bg-gradient-to-br from-sand-light/30 to-cream-dark overflow-hidden">
        {/* Placeholder visual - gradient with product initial */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-3 rounded-full bg-gradient-to-br from-moss/20 to-bayou/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <span className="font-heading text-3xl text-moss/60">
                {product.name.charAt(0)}
              </span>
            </div>
            <span className="text-xs text-charcoal-light/50 uppercase tracking-wider">
              {product.category}
            </span>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge
              variant={
                product.badge === "Best Seller"
                  ? "default"
                  : product.badge === "New"
                  ? "rust"
                  : product.badge === "Premium"
                  ? "secondary"
                  : "sand"
              }
            >
              {product.badge}
            </Badge>
          </div>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-center justify-center">
          <Button
            variant="sand"
            size="lg"
            className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-moss font-semibold uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h3 className="font-semibold text-charcoal text-base mb-1 group-hover:text-moss transition-colors duration-300">
          {product.name}
        </h3>
        <p className="text-xs text-charcoal-light/70 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-bark">
            ${product.price.toFixed(2)}
          </span>
          <button className="text-xs text-moss hover:text-moss-dark font-semibold uppercase tracking-wider transition-colors duration-300 cursor-pointer">
            View Details &rarr;
          </button>
        </div>
      </div>
    </Card>
  );
}
