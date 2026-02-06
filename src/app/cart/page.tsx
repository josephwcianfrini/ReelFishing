"use client";

import React from "react";
import Link from "next/link";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, totalItems, clearCart } =
    useCart();

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative pt-32 pb-12 bg-gradient-to-br from-bark-dark via-charcoal to-water-dark text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C2B280' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h1 className="font-heading text-5xl sm:text-6xl mb-4">Your Cart</h1>
          <p className="text-cream/70 text-lg">
            {totalItems === 0
              ? "Your cart is empty"
              : `${totalItems} item${totalItems !== 1 ? "s" : ""} in your cart`}
          </p>
        </div>
      </section>

      {/* Cart Content */}
      <section className="py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-sand/30 flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-charcoal-light/40" />
              </div>
              <h2 className="font-heading text-2xl text-bark-dark mb-3">
                Nothing Here Yet
              </h2>
              <p className="text-charcoal-light mb-8 max-w-md mx-auto">
                Looks like you haven&apos;t added anything to your cart. Browse
                our collection and find your next favorite piece of gear.
              </p>
              <Link href="/">
                <Button size="lg" className="uppercase tracking-wider">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Shop the Collection
                </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Cart Items */}
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="bg-white rounded-lg border border-sand/50 p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 hover-lift"
                  >
                    {/* Product Image Placeholder */}
                    <Link
                      href={`/product/${item.product.id}`}
                      className="w-20 h-20 flex-shrink-0 rounded-md bg-gradient-to-br from-sand-light/30 to-cream-dark flex items-center justify-center border border-sand/30"
                    >
                      <span className="font-heading text-2xl text-moss/60">
                        {item.product.name.charAt(0)}
                      </span>
                    </Link>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <Link href={`/product/${item.product.id}`}>
                        <h3 className="font-semibold text-charcoal hover:text-moss transition-colors">
                          {item.product.name}
                        </h3>
                      </Link>
                      <p className="text-xs text-moss font-semibold uppercase tracking-wider mt-0.5">
                        {item.product.category}
                      </p>
                      <p className="text-bark font-bold mt-1">
                        ${item.product.price.toFixed(2)}
                      </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-sand rounded-md">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="p-1.5 hover:bg-sand/30 transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 py-1.5 font-semibold text-sm min-w-[2.5rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="p-1.5 hover:bg-sand/30 transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Item Total */}
                      <span className="font-bold text-bark min-w-[5rem] text-right">
                        ${(item.product.price * item.quantity).toFixed(2)}
                      </span>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.product.id)}
                        className="p-1.5 text-charcoal-light hover:text-rust transition-colors cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Summary */}
              <div className="bg-white rounded-lg border border-sand/50 p-6 mt-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-charcoal-light">Subtotal</span>
                  <span className="font-semibold text-charcoal">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-charcoal-light">Shipping</span>
                  <span className="font-semibold text-moss">
                    {totalPrice >= 50 ? "Free" : "$5.99"}
                  </span>
                </div>
                <div className="border-t border-sand/50 pt-4 flex items-center justify-between">
                  <span className="text-lg font-bold text-charcoal">Total</span>
                  <span className="text-2xl font-bold text-bark">
                    $
                    {(totalPrice >= 50
                      ? totalPrice
                      : totalPrice + 5.99
                    ).toFixed(2)}
                  </span>
                </div>

                <Button
                  size="xl"
                  className="w-full mt-6 uppercase tracking-wider"
                >
                  Proceed to Checkout
                </Button>

                <div className="flex items-center justify-between mt-4">
                  <Link href="/">
                    <Button variant="ghost" size="sm">
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Continue Shopping
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-rust hover:text-rust-light"
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
