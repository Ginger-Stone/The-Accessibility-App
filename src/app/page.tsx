"use client";
import BlogPosts from "@/components/blog/BlogPosts";
import CustomPageLayout from "@/components/layouts/CustomPageLayout";

export default function Home() {
  return (
    <>
      <CustomPageLayout>
        <div>
          <h1>The Accessibility Blog</h1>
          <p>The voice of the excluded</p>
        </div>
        <BlogPosts />
      </CustomPageLayout>
    </>
  );
}
