"use client";
import BlogPosts from "@/components/blog/BlogPosts";
import CustomPageLayout from "@/components/layouts/CustomPageLayout";
import SearchBar from "@/components/common/inputs/SearchBar";

export default function Search() {
  return (
    <>
      <CustomPageLayout>
        <div className="w-full flex flex-col items-center">
          <h1>Search Blogs</h1>
          <SearchBar className="md:w-[40vw] w-[80vw] mt-4" />
        </div>
        <BlogPosts />
      </CustomPageLayout>
    </>
  );
}
