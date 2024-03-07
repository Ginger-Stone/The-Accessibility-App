"use client";
import { formatDate } from "@/components/blog/BlogPostItem";
import CustomPageLayout from "@/components/layouts/CustomPageLayout";
import placeHolderImage from "../../../../public/images/compensatory-damages.jpeg";
import { BlogPost } from "@/types/type";
import { NextPage } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BlogPostProps {
  params: {
    slug: string;
  };
}

const Post: NextPage<BlogPostProps> = ({ params: { slug } }) => {
  const [postData, setPostData] = useState<BlogPost>();
  const [date, setDate] = useState<string>("");
  const IMAGE_BASE_URL = "/images/";

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const res = await fetch(`/api/blogData?slug=${slug}`);
        if (!res.ok) {
          throw new Error("Failed to fetch post data");
        }
        const data = await res.json();
        console.log(data);
        setPostData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchPostData();
  }, [slug]);

  useEffect(() => {
    if (postData?.updatedAt) {
      setDate(formatDate(postData.updatedAt));
    }
  }, [postData]);

  return (
    <CustomPageLayout>
      <div className="p-4 md:mx-40 xs:mx-10">
        <h2 className="font-bold py-2 text-center">{postData?.title}</h2>
        <p className="py-2 font-medium text-center">
          {date} • {postData?.readTime} min Read
        </p>
        <div className="w-full h-60 object-cover relative">
          <Image
            src={
              postData?.image
                ? IMAGE_BASE_URL + postData?.image
                : placeHolderImage
            }
            alt={`${postData?.title} image`}
            layout="fill"
          />
        </div>
        <p className="py-2">{postData?.content}</p>
      </div>
    </CustomPageLayout>
  );
};

export default Post;
