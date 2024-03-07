// import {
//   trimToExcerptLength,
//   calculateReadTime,
// } from "@/components/blog/CreateBlogPost";

/**
 * @typedef {Object} BlogPost
 * @property {number} id
 * @property {string} title
 * @property {string} slug
 * @property {FileList|null} image
 * @property {Date} updatedAt // corrected date type
 * @property {number} readTime
 * @property {string} excerpt
 * @property {string} content
 */

/** @type {BlogPost[]} */
const blogData = [];

export function trimToExcerptLength(content) {
  const length = 200;
  return content.length > length ? content.substring(0, length) : content;
}

export function calculateReadTime(content, wordsPerMinute = 200) {
  const words = content.trim().split(/\s+/);
  const wordCount = words.length;
  const readTime = Math.ceil(wordCount / wordsPerMinute);
  return readTime;
}

for (let i = 1; i <= 30; i++) {
  const title = `Blog Post ${i}`;
  const slug = `blogpost${i}`;
  const image = `image-1.jpeg`;
  const updatedAt = new Date();
  const content = `This is the content of Blog Post ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`; // Longer dummy content
  const readTime = calculateReadTime(content);
  const excerpt = trimToExcerptLength(content);

  // Add the dummy record to the blogData array
  blogData.push({
    id: i,
    title,
    slug,
    image,
    updatedAt,
    readTime,
    excerpt,
    content,
  });
}

export default blogData;
