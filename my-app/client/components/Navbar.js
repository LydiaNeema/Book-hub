import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc", backgroundColor: "#ca3434ff" }}>
      <Link href="/">Home</Link> | <Link href="/messages">Messages</Link>
    </nav>
  );
}
