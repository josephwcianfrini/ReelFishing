"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || "Failed to sign up");
      }

      setStatus("success");
      setMessage(result.message);
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-moss-dark to-bayou-dark text-cream relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 3-2 3zm-2-13V4H0v-2h18V0l2 3-2 3z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <p className="text-sand text-sm uppercase tracking-widest mb-3">
          Stay Hooked
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl mb-4">
          Join the Reel Crew
        </h2>
        <p className="text-cream/70 mb-8">
          Get first access to new drops, exclusive deals, and fishing tips
          straight from the bayou.
        </p>

        {status === "success" ? (
          <div className="animate-[fadeIn_0.5s_ease-out]">
            <p className="text-sand font-semibold text-lg mb-2">{message}</p>
            <button
              onClick={() => setStatus("idle")}
              className="text-cream/60 hover:text-cream text-sm underline transition-colors cursor-pointer"
            >
              Sign up another email
            </button>
          </div>
        ) : (
          <>
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 bg-white/10 border-white/20 text-cream placeholder:text-cream/40 focus-visible:ring-sand"
              />
              <Button
                variant="sand"
                size="lg"
                className="uppercase tracking-wider"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Signing Up..." : "Sign Up"}
              </Button>
            </form>
            {status === "error" && (
              <p className="text-rust-light text-sm mt-3">{message}</p>
            )}
          </>
        )}
      </div>
    </section>
  );
}
