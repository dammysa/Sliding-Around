import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <h2>Swiper</h2>
      <p>
        Swiper is the most popular mobile-friendly slider library on the web.
      </p>
      <nav>
        <Link href="/booksFlip">Book Flipper</Link>
      </nav>
    </main>
  );
}
