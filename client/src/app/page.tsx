import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-6">
      <h2 className="text-3x1 font-bold mt-4 text-">Swiper</h2>
      <p>
        Swiper is the most popular mobile-friendly slider library on the web.
      </p>
      <nav>
        <Link href="/booksFlip">Book Flipper</Link>
      </nav>
    </main>
  );
}
