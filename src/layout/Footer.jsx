import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-6 text-center">
      <p className="text-sm text-slate-400">
        © {new Date().getFullYear()} Edesiri. All rights reserved.
      </p>
    </footer>
  );
}
