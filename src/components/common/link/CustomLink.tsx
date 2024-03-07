import Link from "next/link";

interface Props {
  title: string;
  url: string;
}

export default function CustomLink({ title, url }: Props) {
  return <Link href={url}>{title}</Link>;
}
