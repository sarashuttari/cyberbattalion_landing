"use client";

import Image from "next/image";
import { useState } from "react";
import { getInitials } from "@/lib/initials";

export default function TeamAvatar({
  src,
  name,
}: {
  src: string;
  name: string;
}) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <div
        aria-hidden="true"
        className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gold/15 font-serif text-xl font-semibold text-gold"
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt=""
      width={80}
      height={80}
      onError={() => setErrored(true)}
      className="h-20 w-20 shrink-0 rounded-full object-cover"
    />
  );
}
