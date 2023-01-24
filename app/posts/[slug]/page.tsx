import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Image from "next/image";

export default function PostPage({ params }: any) {
  const {
    frontmatter: { title, date, cover_image },
    content,
  } = getPaths({ params });

  return (
    <div className="max-w-5xl text-center mx-auto">
      <img
        src={cover_image}
        alt={"Cover image"}
        className="w-full"
        loading="lazy"
      />
      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
  );
}

function getPaths({ params }: any) {
  const { slug } = params;
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", `${slug}.md`),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    frontmatter,
    content,
  };
}
