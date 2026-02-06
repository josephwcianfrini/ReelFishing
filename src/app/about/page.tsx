import React from "react";
import { Fish, Anchor, Sun, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Reel Fishing",
  description:
    "Our story starts on the bayous of southern Louisiana. Learn about the heart and soul behind Reel Fishing apparel.",
};

const values = [
  {
    icon: Fish,
    title: "Angler First",
    description:
      "Every design starts on the water. We fish before we sketch, and we test before we sell. If it doesn't work on the bayou, it doesn't make the cut.",
  },
  {
    icon: Anchor,
    title: "Built to Last",
    description:
      "We use premium materials that can handle saltwater, sun, and sweat. Our gear is made to endure the same conditions you fish in.",
  },
  {
    icon: Sun,
    title: "Southern Roots",
    description:
      "Louisiana is more than our home — it's our inspiration. The marshes, the culture, and the people shape everything we create.",
  },
  {
    icon: Heart,
    title: "Community Driven",
    description:
      "We're not just building a brand — we're building a crew. Every customer becomes part of the Reel Fishing family.",
  },
];

export default function AboutPage() {
  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-bark-dark via-charcoal to-bark-dark text-cream overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C2B280' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <p className="text-sand text-sm uppercase tracking-[0.3em] mb-4">
            Our Story
          </p>
          <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl mb-6">
            About Reel Fishing
          </h1>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-sand" />
            <svg className="w-5 h-5 text-sand" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
            </svg>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-sand" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            {/* Image Placeholder */}
            <div className="relative group">
              <div className="aspect-[4/5] rounded-lg bg-gradient-to-br from-moss/20 via-bayou/10 to-sand/30 overflow-hidden hover-scale">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8">
                    <Fish className="w-16 h-16 text-moss/40 mx-auto mb-4" />
                    <p className="font-heading text-2xl text-bark/40">
                      The Bayou
                    </p>
                    <p className="text-sm text-charcoal-light/40 mt-2">
                      Southern Louisiana
                    </p>
                  </div>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-sand rounded-lg -z-10" />
            </div>

            {/* Story Text */}
            <div>
              <h2 className="font-heading text-3xl text-bark-dark mb-6">
                Where It All Started
              </h2>
              <div className="space-y-4 text-charcoal-light leading-relaxed">
                <p>
                  Reel Fishing was born on the banks of the Atchafalaya Basin,
                  where the cypress trees meet the water and the fish are always
                  biting. What started as a couple of fishing buddies wanting
                  shirts that could survive a Louisiana summer turned into
                  something much bigger.
                </p>
                <p>
                  We grew up running trotlines, gigging flounder, and chasing
                  redfish through the marsh grass. The southern Louisiana
                  lifestyle isn't just something we sell — it's something we
                  live every single day.
                </p>
                <p>
                  Our gear blends the rugged, no-nonsense spirit of the western
                  outdoors with the laid-back soul of bayou country. We design
                  for the angler who wakes up before dawn, respects the water,
                  and knows that the best days are spent with a rod in hand.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="western-divider mb-6">
              <svg className="w-5 h-5 text-sand-dark" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2Z" />
              </svg>
            </div>
            <h2 className="font-heading text-3xl text-bark-dark mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-charcoal-light leading-relaxed">
              To create premium fishing apparel that honors the traditions of
              southern Louisiana while pushing the boundaries of outdoor style.
              We believe every angler deserves gear that&apos;s as tough as
              their toughest catch and as comfortable as a Sunday on the porch.
            </p>
          </div>

          {/* Values */}
          <div>
            <div className="text-center mb-12">
              <p className="text-moss text-sm font-semibold uppercase tracking-widest mb-2">
                What We Stand For
              </p>
              <h2 className="font-heading text-3xl text-bark-dark">
                Our Values
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-8">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="group bg-white rounded-lg p-6 border border-sand/50 hover-lift"
                >
                  <div className="w-12 h-12 rounded-full bg-moss/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:bg-moss/20 group-hover:scale-110">
                    <value.icon className="w-6 h-6 text-moss" />
                  </div>
                  <h3 className="font-semibold text-lg text-charcoal mb-2 group-hover:text-moss transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-moss-dark to-bayou-dark text-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl sm:text-4xl mb-4">
            Ready to Join the Crew?
          </h2>
          <p className="text-cream/70 mb-8 max-w-xl mx-auto">
            Check out our latest collection and find your next favorite piece of
            fishing gear.
          </p>
          <a
            href="/"
            className="inline-flex items-center px-8 py-3 bg-sand text-charcoal font-semibold uppercase tracking-wider rounded-md transition-all duration-300 hover:bg-sand-light hover:shadow-lg hover-scale"
          >
            Shop Now
          </a>
        </div>
      </section>
    </div>
  );
}
