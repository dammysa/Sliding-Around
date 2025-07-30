import pool from "../lib/db";
import BookSliderFlip from "../components/FlipCard";
import BookSliderCoverFlow from "../components/CoverFlow";

export default async function BooksPage() {
  const result = await pool.query(`SELECT * FROM books ORDER BY id ASC`);
  const books = result.rows;

  return (
    <main>
      <BookSliderFlip books={books} />
      <BookSliderCoverFlow books={books} />
    </main>
  );
}
