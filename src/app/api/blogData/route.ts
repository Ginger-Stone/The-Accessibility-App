import { NextApiRequest, NextApiResponse } from 'next';
import blogData from '../../../../blogData';
import { NextResponse } from 'next/server';
import { BlogPost } from '@/types/type';

export async function GET(req: NextApiRequest,
  res: NextApiResponse<BlogPost | { message: string }>) {
    const queryString = req?.url?.split('?')[1];
  
  const queryParams: { [key: string]: string } = {};
  if (queryString) {
    queryString.split('&').forEach((pair) => {
      const [key, value] = pair.split('=');
      queryParams[key] = decodeURIComponent(value);
    });
  }
  
    if(queryParams.slug){
      const slug = queryParams.slug;
    if(slug){
      try {
        const blogPost = blogData.find((post) => post.slug === slug);
        if (blogPost) {
          return NextResponse.json(blogPost);
        } else {
          return NextResponse.json({ message: "Blog post not found" });
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
        return NextResponse.json({ message: "Internal server error" });
      }
    }
    }    
  return NextResponse.json(blogData);
}

