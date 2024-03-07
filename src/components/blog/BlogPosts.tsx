import React, { useEffect, useState } from "react";
import BlogPostItem from "./BlogPostItem";
import { BlogPost } from "@/types/type";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function BlogPosts() {
  const [blogData, setBlogData] = useState<BlogPost[]>([]);
  const [filteredData, setFilteredData] = useState<BlogPost[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const postsPerPage = 6;
  const searchParams = useSearchParams().get("q");

  useEffect(() => {
    if (searchParams) {
      const blogPosts = blogData.filter((post) =>
        post.title.toLowerCase().includes(searchParams.toLowerCase())
      );
      setFilteredData(blogPosts);
    } else {
      setFilteredData(blogData);
    }
  }, [searchParams, blogData]);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const res = await fetch("/api/blogData");
        const data = await res.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };

    fetchBlogData();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredData
    ? filteredData.slice(indexOfFirstPost, indexOfLastPost)
    : blogData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="flex justify-between flex-wrap gap-y-10 md:gap-x-20 py-10">
        {searchParams && filteredData.length === 0 && (
          <div className="text-center w-full font-medium">
            {" "}
            No Items match the search keyword &quot;{searchParams}&quot;
          </div>
        )}
        {searchParams && filteredData.length > 0 && (
          <div className="text-center w-full font-medium">
            {" "}
            Showing {filteredData.length} Results of &quot;{searchParams}&quot;
          </div>
        )}
        {currentPosts.map((post) => (
          <BlogPostItem key={post.id} data={post} />
        ))}
      </div>
      <nav aria-label="Page navigation" className=" flex justify-center">
        <ul className="flex items-center -space-x-px h-10 text-base">
          <li>
            <Link
              href="#"
              className="flex items-center justify-center px-4 h-10 mr-2  ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
              onClick={() => paginate(currentPage - 1)}
              style={{ pointerEvents: currentPage === 1 ? "none" : "auto" }}
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </Link>
          </li>
          {Array.from(
            { length: Math.ceil(blogData.length / postsPerPage) },
            (_, i) => (
              <li key={i + 1}>
                <Link
                  href="#"
                  className={`flex items-center justify-center mr-2 px-4 h-10 ${
                    i + 1 === currentPage
                      ? "bg-gray-100 text-gray-700"
                      : "bg-white text-gray-500"
                  } border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
                  onClick={() => paginate(i + 1)}
                >
                  {i + 1}
                </Link>
              </li>
            )
          )}
          <li>
            <Link
              href="#"
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
              onClick={() => paginate(currentPage + 1)}
              style={{
                pointerEvents:
                  currentPage === Math.ceil(blogData.length / postsPerPage)
                    ? "none"
                    : "auto",
              }}
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-3 h-3 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
