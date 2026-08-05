"use client";

import Image from "next/image";
import { useState } from "react";
import { getInitials } from "@/lib/initials";

export default function TestimonialAvatar({
  src,
  name,
}: {
  src?: string;
  name: string;
}) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        aria-hidden="true"
        className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-maroon/10 font-serif text-lg font-semibold text-maroon"
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt=""
      width={64}
      height={64}
      onError={() => setErrored(true)}
      className="h-16 w-16 shrink-0 rounded-full object-cover"
    />
  );
}
