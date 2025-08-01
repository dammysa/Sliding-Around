import pool from "../lib/db";
import BookSliderFlip from "../components/FlipCard";
import BookSliderCards from "../components/Cards";
import BookSliderCoverFlow from "../components/CoverFlow";
import BookSliderPaginationProgress from "../components/PaginationProgress";
import Link from "next/link";
import LearnMoreButton from "../components/LearnMoreButton";

export default async function BooksPage() {
  const result = await pool.query(`SELECT * FROM books ORDER BY id ASC`);
  const books = result.rows;

  return (
    <main>
      <BookSliderFlip books={books} />
      <BookSliderCards books={books} />
      <BookSliderCoverFlow books={books} />
      <BookSliderPaginationProgress books={books} />
      <LearnMoreButton />
      <Link
        href="/"
        className="text-2x1 font-bold mt-4 text-green-400 p-6 underline hover:text-green-300"
      >
        Home
      </Link>
    </main>
  );
}
