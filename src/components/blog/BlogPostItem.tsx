import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import placeHolderImage from "../../../public/images/compensatory-damages.jpeg";
import { BlogPost } from "@/types/type";

interface Props {
  data: BlogPost;
}

export function formatDate(dateVal: Date): string {
  const date = new Date(dateVal);
  if (isNaN(date.getTime())) {
    throw new Error("Invalid date provided to formatDate function.");
  }

  const formattedDate = date.toLocaleDateString("default", {
    month: "short",
    year: "numeric",
  });

  return formattedDate;
}

export default function BlogPostItem({ data }: Props) {
  const [date, setDate] = useState<string>("");
  const IMAGE_BASE_URL = "/images/";

  useEffect(() => {
    if (data?.updatedAt) setDate(formatDate(data.updatedAt));
  }, [data]);

  return (
    <Link
      href={{
        pathname: `/posts/${data.slug}`,
      }}
      className="w-96 relative bg-gray-300"
    >
      <div className="w-full h-44 relative">
        <Image
          src={data?.image ? IMAGE_BASE_URL + data?.image : placeHolderImage}
          alt={`${data?.title} image`}
          layout="fill"
        />
      </div>
      <div className="p-4">
        <p className="py-2 font-medium">
          {date} • {data?.readTime} min Read
        </p>
        <h2 className="font-bold py-2">{data?.title}</h2>
        <p className="py-2">{data?.excerpt}...</p>
      </div>
    </Link>
  );
}
