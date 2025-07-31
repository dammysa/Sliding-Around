import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center p-6">
      <h2 className=" text-6xl font-bold mt-4 text-white">Swiper</h2>
      <p className="text-2x1 font-bold mt-4 text-white p-6">
        Swiper is the most popular mobile-friendly slider library on the web.
      </p>
      <nav>
        <Link
          href="/booksFlip"
          className="text-2x1 font-bold mt-4 text-green-400 p-6 underline hover:text-green-300"
        >
          Book Flipper
        </Link>
      </nav>
    </main>
  );
}
