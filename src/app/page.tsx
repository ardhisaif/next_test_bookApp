import Link from "next/link";

export default function App() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="">
        <ul className="flex gap-16 items-center">
          <li>
            <Link
              href="/login"
              className="py-3 px-12 bg-blue-600 text-white rounded-xl w-100"
            >
              3. Login
            </Link>
          </li>
          <li>
            <Link
              href="/book"
              className="py-3 px-12 bg-blue-600 text-white rounded-xl w-100"
            >
              5. Book API
            </Link>
          </li>
          <li>
            <Link
              href="/logika"
              className="py-3 px-12 bg-blue-600 text-white rounded-xl w-100"
            >
              6. Logika Alpro
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
