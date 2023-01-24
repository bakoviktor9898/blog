import Link from "next/link";

const Header = () => {
  return (
    <nav className="bg-indigo-700 py-4 text-white">
      <ul className="text-xl font-semibold flex gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/posts"}>Posts</Link>
      </ul>
    </nav>
  );
};

export default Header;
