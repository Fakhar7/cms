import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <div className="w-full max-w-2xl m-auto mt-26 p-2">{children}</div>
    </div>
  );
}
