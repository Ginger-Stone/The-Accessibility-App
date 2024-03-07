import React, { ReactNode, useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import CreateBlogPost from "@/components/blog/CreateBlogPost";
import ModalContainer from "@/components/common/modal/ModalContainer";

interface Props {
  children: ReactNode;
}

export default function CustomPageLayout({ children }: Props) {
  return (
    <div className="relative overflow-y-auto h-[100vh]">
      <Navbar />
      <div className="md:min-h-[84vh] min-h-[87vh] p-10 ">{children}</div>
      <Footer />
      <ModalContainer>
        <CreateBlogPost />
      </ModalContainer>
    </div>
  );
}
