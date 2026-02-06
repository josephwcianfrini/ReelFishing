"use client";

import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Baton Rouge, Louisiana",
    detail: "Southern Louisiana, USA",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(225) 555-REEL",
    detail: "Mon-Fri, 8am-5pm CST",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@reelfishing.com",
    detail: "We'll respond within 24 hours",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Fri: 8am - 5pm",
    detail: "Closed weekends (we're fishing)",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-water-dark via-charcoal to-bark-dark text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C2B280' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <p className="text-sand text-sm uppercase tracking-[0.3em] mb-4">
            Get In Touch
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl mb-6">
            Contact Us
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-sand" />
            <svg className="w-5 h-5 text-sand" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-sand" />
          </div>
          <p className="text-cream/70 text-lg max-w-xl mx-auto">
            Whether you have a question about our gear, want to collaborate, or
            just want to share a fishing story — we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl text-bark-dark mb-6">
                Reach Out
              </h2>
              <p className="text-charcoal-light mb-8 leading-relaxed">
                We&apos;re a small team of passionate anglers based in southern
                Louisiana. Drop us a line and we&apos;ll get back to you
                faster than a redfish hits a gold spoon.
              </p>

              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-start gap-4 group hover-scale"
                  >
                    <div className="w-10 h-10 rounded-full bg-moss/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-moss/20 group-hover:scale-110">
                      <item.icon className="w-5 h-5 text-moss" />
                    </div>
                    <div>
                      <p className="text-xs text-moss font-semibold uppercase tracking-wider mb-0.5">
                        {item.label}
                      </p>
                      <p className="font-semibold text-charcoal">
                        {item.value}
                      </p>
                      <p className="text-sm text-charcoal-light">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg border border-sand/50 p-8 shadow-sm hover-lift">
                <h2 className="font-heading text-2xl text-bark-dark mb-6">
                  Send a Message
                </h2>

                {submitted ? (
                  <div className="text-center py-12 animate-[fadeIn_0.5s_ease-out]">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-moss/10 flex items-center justify-center">
                      <Send className="w-8 h-8 text-moss" />
                    </div>
                    <h3 className="font-heading text-2xl text-bark-dark mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-charcoal-light">
                      Thanks for reaching out. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-semibold text-charcoal mb-1.5"
                        >
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          placeholder="Your first name"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-semibold text-charcoal mb-1.5"
                        >
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Your last name"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-semibold text-charcoal mb-1.5"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-semibold text-charcoal mb-1.5"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What's this about?"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-semibold text-charcoal mb-1.5"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us what's on your mind..."
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full uppercase tracking-wider"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
