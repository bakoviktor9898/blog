import Image from "next/image";
import Link from "next/link";

export default function Post({ post }: any) {
  return (
    <div className="max-w-sm rounded-md overflow-hidden shadow-lg">
      <Image
        width={400}
        height={400}
        src={post.frontmatter.cover_image}
        alt={"cover image"}
        className="w-fit h-fit"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{post.frontmatter.title}</div>
        <p className="text-gray-700 text-base font-normal">
          {post.frontmatter.excerpt}
        </p>
        <p className="text-gray-700 text-base my-4">
          Posted on {post.frontmatter.date}
        </p>
        <Link
          className="text-center text-lg text-white"
          href={`posts/${post.slug}`}
        >
          <button className="p-[12px] bg-indigo-600 rounded-md text-center">
            Read more
          </button>
        </Link>
      </div>
    </div>
  );
}
