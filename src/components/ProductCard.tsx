"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import ProductImage from "@/components/ProductImage";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <Card className="group overflow-hidden hover-lift border-sand/50 hover:border-moss/30">
      {/* Image Container */}
      <Link
        href={`/product/${product.id}`}
        className="block relative aspect-[3/4] bg-gradient-to-br from-sand-light/30 to-cream-dark overflow-hidden"
      >
        {/* Product illustration */}
        <div className="absolute inset-0 flex items-center justify-center">
          <ProductImage category={product.category} name={product.name} size="md" />
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
        <div
          className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-300 flex items-center justify-center"
          onClick={(e) => e.preventDefault()}
        >
          <Button
            variant="sand"
            size="lg"
            className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addItem(product);
            }}
          >
            <ShoppingBag className="w-4 h-4 mr-2" />
            Quick Add
          </Button>
        </div>
      </Link>

      {/* Content */}
      <div className="p-4">
        <p className="text-xs text-moss font-semibold uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <Link href={`/product/${product.id}`}>
          <h3 className="font-semibold text-charcoal text-base mb-1 group-hover:text-moss transition-colors duration-300">
            {product.name}
          </h3>
        </Link>
        <p className="text-xs text-charcoal-light/70 mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-bark">
            ${product.price.toFixed(2)}
          </span>
          <Link
            href={`/product/${product.id}`}
            className="text-xs text-moss hover:text-moss-dark font-semibold uppercase tracking-wider transition-colors duration-300"
          >
            View Details &rarr;
          </Link>
        </div>
      </div>
    </Card>
  );
}
