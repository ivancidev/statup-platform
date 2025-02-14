"use client";

import { X } from "lucide-react";
import Link from "next/link";

export const ButtonReset = () => {
  const reset = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };
  return (
    <button type="button" onClick={reset}>
      <Link href="/" className="search-btn text-white">
        <X size={24} />
      </Link>
    </button>
  );
};
