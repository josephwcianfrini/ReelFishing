import React from "react";
import { Truck, Shield, Sun, Fish } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "On orders over $75",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    desc: "Built to last on the water",
  },
  {
    icon: Sun,
    title: "UPF Protection",
    desc: "Sun-safe performance gear",
  },
  {
    icon: Fish,
    title: "Angler Approved",
    desc: "Designed by fishermen",
  },
];

export default function FeaturesBar() {
  return (
    <section className="bg-bark text-cream py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center group hover-scale"
            >
              <feature.icon className="w-8 h-8 text-sand mb-2 transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-sm font-bold uppercase tracking-wider mb-1">
                {feature.title}
              </h3>
              <p className="text-cream/60 text-xs">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
