import { Link } from "react-router";
export default function Error404() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-9xl text-blue-800">Error 404</h1>
        <p>Page not found</p>
        <Link to='/' className="bg-blue-600 text-white px-4 py-1 rounded-sm hover:bg-blue-200">Go Home</Link>
      </div>
    </>
  );
}
