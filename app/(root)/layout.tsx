import Navbar from "@components/navbar";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}
