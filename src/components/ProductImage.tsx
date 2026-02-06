import React from "react";

interface ProductImageProps {
  category: string;
  name: string;
  size?: "sm" | "md" | "lg";
}

function TShirtIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 25L30 20L15 35L25 55L35 50V95H85V50L95 55L105 35L90 20L80 25C80 25 75 40 60 40C45 40 40 25 40 25Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M45 40C45 40 50 48 60 48C70 48 75 40 75 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function HoodieIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 25L30 20L15 40V70L25 65V95H95V65L105 70V40L90 20L80 25C80 25 75 40 60 40C45 40 40 25 40 25Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M50 25V15C50 15 50 8 60 8C70 8 70 15 70 15V25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M55 50V65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M65 50V65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function HatIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20 65C20 65 25 35 60 35C95 35 100 65 100 65"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M10 68H110" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M25 68C25 68 28 80 60 80C92 80 95 68 95 68"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="60" cy="38" r="5" stroke="currentColor" strokeWidth="2" opacity="0.5" />
    </svg>
  );
}

function FlannelIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 25L30 20L15 35L25 55L35 50V95H85V50L95 55L105 35L90 20L80 25C80 25 75 40 60 40C45 40 40 25 40 25Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M55 40V95" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M65 40V95" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M35 60H85" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M35 75H85" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
      <path d="M57 40L57 55L63 55L63 40" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

function JacketIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 25L30 20L12 38V80L25 75V98H95V75L108 80V38L90 20L80 25C80 25 75 40 60 40C45 40 40 25 40 25Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M60 40V98" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="53" cy="55" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="53" cy="65" r="2" fill="currentColor" opacity="0.5" />
      <circle cx="53" cy="75" r="2" fill="currentColor" opacity="0.5" />
      <path d="M35 60H48V78H35Z" stroke="currentColor" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LongSleeveIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M40 25L30 20L10 40L20 50L30 45V95H90V45L100 50L110 40L90 20L80 25C80 25 75 40 60 40C45 40 40 25 40 25Z"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 50L10 70L18 73" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M100 50L110 70L102 73" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const categoryIcons: Record<string, React.FC<{ className?: string }>> = {
  "T-Shirts": TShirtIcon,
  "Hoodies": HoodieIcon,
  "Hats": HatIcon,
  "Flannels": FlannelIcon,
  "Outerwear": JacketIcon,
  "Long Sleeves": LongSleeveIcon,
};

const sizeClasses = {
  sm: "w-16 h-16",
  md: "w-24 h-24",
  lg: "w-40 h-40",
};

export default function ProductImage({ category, name, size = "md" }: ProductImageProps) {
  const Icon = categoryIcons[category];

  if (Icon) {
    return (
      <div className="text-center">
        <div className={`${sizeClasses[size]} mx-auto mb-3 text-moss/50 transition-transform duration-500 group-hover:scale-110`}>
          <Icon className="w-full h-full" />
        </div>
        <span className="text-xs text-charcoal-light/50 uppercase tracking-wider">
          {category}
        </span>
      </div>
    );
  }

  return (
    <div className="text-center">
      <div className={`${sizeClasses[size]} mx-auto mb-3 rounded-full bg-gradient-to-br from-moss/20 to-bayou/20 flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
        <span className={`font-heading ${size === "lg" ? "text-6xl" : size === "md" ? "text-3xl" : "text-2xl"} text-moss/60`}>
          {name.charAt(0)}
        </span>
      </div>
      <span className="text-xs text-charcoal-light/50 uppercase tracking-wider">
        {category}
      </span>
    </div>
  );
}
