import Link from "next/link";

export default async function Home() {
  console.log(process.env.TEST);
  return (
    <main>
      <nav>
        <Link href="/booksFlip">Book Flipper</Link>
      </nav>
    </main>
  );
}
