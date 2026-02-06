"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ShoppingBag, Minus, Plus, ArrowLeft, Truck, Shield, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/context/CartContext";
import ProductImage from "@/components/ProductImage";
import { products } from "@/data/products";

export default function ProductDetailPage() {
  const params = useParams();
  const product = products.find((p) => p.id === Number(params.id));
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();

  if (!product) {
    return (
      <div className="page-enter pt-32 pb-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl text-bark-dark mb-4">
            Product Not Found
          </h1>
          <p className="text-charcoal-light mb-8">
            Sorry, we couldn&apos;t find the product you&apos;re looking for.
          </p>
          <Link href="/">
            <Button variant="default">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Shop
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="page-enter">
      {/* Breadcrumb */}
      <div className="pt-24 pb-4 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm text-charcoal-light">
            <Link href="/" className="hover:text-moss transition-colors">
              Shop
            </Link>
            <span>/</span>
            <span className="text-charcoal">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Detail */}
      <section className="pb-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="relative aspect-square bg-gradient-to-br from-sand-light/30 to-cream-dark rounded-lg overflow-hidden border border-sand/50">
              <div className="absolute inset-0 flex items-center justify-center">
                <ProductImage category={product.category} name={product.name} size="lg" />
              </div>
              {product.badge && (
                <div className="absolute top-4 left-4">
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
                    className="text-sm px-3 py-1"
                  >
                    {product.badge}
                  </Badge>
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">
              <p className="text-moss text-sm font-semibold uppercase tracking-widest mb-2">
                {product.category}
              </p>
              <h1 className="font-heading text-4xl sm:text-5xl text-bark-dark mb-4">
                {product.name}
              </h1>
              <p className="text-3xl font-bold text-bark mb-6">
                ${product.price.toFixed(2)}
              </p>
              <p className="text-charcoal-light leading-relaxed mb-8 text-lg">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-semibold text-charcoal uppercase tracking-wider">
                  Quantity
                </span>
                <div className="flex items-center border border-sand rounded-md">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 hover:bg-sand/30 transition-colors cursor-pointer"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-2 font-semibold min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-2 hover:bg-sand/30 transition-colors cursor-pointer"
                    aria-label="Increase quantity"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <Button
                size="xl"
                className="w-full sm:w-auto uppercase tracking-wider mb-8"
                onClick={handleAddToCart}
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                {added ? "Added to Cart!" : "Add to Cart"}
              </Button>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-sand/50">
                <div className="text-center">
                  <Truck className="w-5 h-5 mx-auto mb-2 text-moss" />
                  <p className="text-xs text-charcoal-light font-semibold">
                    Free Shipping
                  </p>
                  <p className="text-xs text-charcoal-light/60">Over $50</p>
                </div>
                <div className="text-center">
                  <Shield className="w-5 h-5 mx-auto mb-2 text-moss" />
                  <p className="text-xs text-charcoal-light font-semibold">
                    Quality Guarantee
                  </p>
                  <p className="text-xs text-charcoal-light/60">Built to last</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="w-5 h-5 mx-auto mb-2 text-moss" />
                  <p className="text-xs text-charcoal-light font-semibold">
                    Easy Returns
                  </p>
                  <p className="text-xs text-charcoal-light/60">30-day policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-cream border-t border-sand/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-heading text-2xl text-bark-dark mb-8 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {relatedProducts.map((related) => (
                <Link
                  key={related.id}
                  href={`/product/${related.id}`}
                  className="group block bg-white rounded-lg border border-sand/50 overflow-hidden hover-lift"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-sand-light/30 to-cream-dark flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-moss/20 to-bayou/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      <span className="font-heading text-2xl text-moss/60">
                        {related.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="text-xs text-moss font-semibold uppercase tracking-wider mb-1">
                      {related.category}
                    </p>
                    <h3 className="font-semibold text-charcoal group-hover:text-moss transition-colors">
                      {related.name}
                    </h3>
                    <p className="text-bark font-bold mt-1">
                      ${related.price.toFixed(2)}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
