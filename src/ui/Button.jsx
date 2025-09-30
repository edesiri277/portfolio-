import React from "react";

export default function Button({ children, className = "", as: Component = "button", ...props }) {
  return (
    <Component
      className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium shadow-sm transition ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
