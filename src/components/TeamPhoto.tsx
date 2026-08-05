"use client";

import Image from "next/image";
import { useState } from "react";
import { getInitials } from "@/lib/initials";

export default function TeamPhoto({
  src,
  name,
}: {
  src?: string;
  name: string;
}) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div className="flex aspect-[4/5] w-full items-center justify-center bg-gradient-to-br from-maroon to-navy">
        <span className="font-serif text-4xl font-semibold text-white/90">
          {getInitials(name)}
        </span>
      </div>
    );
  }

  return (
    <div className="relative aspect-[4/5] w-full">
      <Image
        src={src}
        alt=""
        fill
        onError={() => setErrored(true)}
        className="object-cover"
      />
    </div>
  );
}
