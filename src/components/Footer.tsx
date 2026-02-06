import React from "react";
import Link from "next/link";
import { Fish, MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-bayou via-water to-bayou" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Fish className="w-6 h-6 text-moss" />
              <span className="font-heading text-2xl text-sand">
                Reel Fishing
              </span>
            </div>
            <p className="text-cream/70 text-sm leading-relaxed">
              Born on the bayou, built for the water. Premium fishing apparel
              rooted in southern Louisiana tradition and bayou grit.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg text-sand mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Shop" },
                { href: "/about", label: "Our Story" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-cream/70 hover:text-moss text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg text-sand mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm text-cream/70">
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-moss flex-shrink-0" />
                <span>Baton Rouge, Louisiana</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-moss flex-shrink-0" />
                <span>(225) 555-REEL</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-moss flex-shrink-0" />
                <span>info@reelfishing.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cream/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/40 text-xs">
            &copy; {new Date().getFullYear()} Reel Fishing. All rights reserved.
          </p>
          <p className="text-cream/40 text-xs">
            Southern Made &bull; Bayou Born &bull; Water Tested
          </p>
        </div>
      </div>
    </footer>
  );
}
