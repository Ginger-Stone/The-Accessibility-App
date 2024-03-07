"use client";
import { FormEvent, useRef } from "react";
import { useRouter } from "next/navigation";
import Search from "../icons/Search";

interface Props {
  className?: string;
}

export default function SearchBar({ className }: Props) {
  const router = useRouter();
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query = searchInputRef.current?.value || "";
    router.push(`/search?q=${query}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className={`flex border-2 border-gray-800 w-52 py-1 px-2 rounded-md items-center justify-between ${className}`}
    >
      <input
        ref={searchInputRef}
        type="search"
        placeholder="Search..."
        className="w-5/6 text-sm bg-transparent outline-none"
      />
      <button type="submit">
        <Search className="w-3 h-3" />
      </button>
    </form>
  );
}
