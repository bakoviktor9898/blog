import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "@/utils";
import Post from "@/components/Post";

export default function Posts() {
  let posts = getPosts();
  console.log(posts);
  return (
    <div className="text-2xl font-bold">
      <h1 className="text-center my-7">Blog Posts</h1>
      <div className="flex items-center gap-7 mx-4 flex-wrap justify-center">
        {posts.map((post, index) => {
          return <Post key={index} post={post} />;
        })}
      </div>
    </div>
  );
}

function getPosts() {
  // Get files from posts directory
  const files = fs.readdirSync(path.join("posts"));

  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });
  return posts.sort(sortByDate);
}
