import SearchBar from "./inputs/SearchBar";
import CustomButton from "./buttons/CustomButton";
import Logo from "./icons/Logo";
import CustomLink from "./link/CustomLink";
import { useModal } from "@/context/ModalContext";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const { openModal } = useModal();
  const [showMenu, setShowMenu] = useState<Boolean>(false);
  return (
    <>
      <nav className="sticky top-0 z-10 flex justify-between px-10 bg-gray-400">
        <Link href={"/"}>
          <Logo className="w-20" />
        </Link>
        <div className="md:flex items-center gap-x-5 hidden">
          <CustomLink title="Blogs" url="/" />
          <SearchBar />
          <CustomButton value="Create Blog Post" onClick={openModal} />
        </div>
        <div className="flex items-center gap-x-5 md:hidden">
          <CustomButton
            value={showMenu ? "Hide Menu" : "Menu"}
            onClick={() => setShowMenu(!showMenu)}
          />
        </div>
      </nav>
      {showMenu && (
        <div className="md:hidden flex flex-col items-start gap-y-5 fixed right-0 border-2 rounded-md bg-white p-5 z-10 ">
          <CustomLink title="Blogs" url="/" />
          <SearchBar />
          <CustomButton value="Create Blog Post" onClick={openModal} />
        </div>
      )}
    </>
  );
}
