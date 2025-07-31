import pool from "../lib/db";
import BookSliderFlip from "../components/FlipCard";
import BookSliderCards from "../components/Cards";
import BookSliderCoverFlow from "../components/CoverFlow";


export default async function BooksPage() {
  const result = await pool.query(`SELECT * FROM books ORDER BY id ASC`);
  const books = result.rows;

  return (
    <main>
      <BookSliderFlip books={books} />
      <BookSliderCards books={books} />
      <BookSliderCoverFlow books={books} />
    </main>
  );
}
