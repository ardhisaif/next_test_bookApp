"use client";
import React from 'react';

interface Book {
  id: number;
  Year: number;
  Title: string;
  handle: string;
  Publisher: string;
  ISBN: string;
  Pages: number;
  Notes: string[];
  created_at: string;
  villains: {
    name: string;
    url: string;
  }[];
}

const Home: React.FC = () => {
  const [books, setBooks] = React.useState<Book[]>([]); // Ubah tipe menjadi Book[]
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await fetch('https://stephen-king-api.onrender.com/api/books'); // Gantilah dengan API eksternal yang valid
        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }
        const result: { data: Book[] } = await res.json();
        setBooks(result.data); // Ambil data dari property 'data'
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Set error message
        } else {
          setError('Unknown error occurred'); // Handle unknown error
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return  (
    <div className="flex justify-center items-center h-screen">
      <div className="loader">
        <div className="spinner border-t-transparent border-solid border-4 border-blue-500 rounded-full animate-spin h-12 w-12"></div>
      </div>
    </div>
  );
  if (error) return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 m-4">
      <h1 className="text-4xl font-bold mb-8">Daftar Buku</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-screen max-w-4xl">
        {books.map((book) => (
          <li key={book.id} className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105">
            <h2 className="text-2xl font-semibold mb-2">{book.Title}</h2>
            <p className="text-gray-700 mb-1">Penulis: <span className="font-medium">{book.Publisher}</span></p>
            <p className="text-gray-500">Tahun Terbit: <span className="font-medium">{book.Year}</span></p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;

