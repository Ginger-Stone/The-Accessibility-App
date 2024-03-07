import React from "react";
import Logo from "./icons/Logo";

export default function Footer() {
  return (
    <footer className="relative bottom-0 w-full flex justify-between px-10 py-1 bg-gray-400">
      <Logo className="w-20" />
      <p className="flex items-center gap-x-5">Copyright @2023 . BlogPost</p>
    </footer>
  );
}
