import data from '@/data/header';
import Link from 'next/link'

export default function Header () {
  return (
    <header>
      <nav className="bg-white text-gray-900 py-2 md:py-4 font-sans">
        <div className="container px-4 mx-auto md:flex md:items-center">

          <div className="flex justify-between items-center">
            <h1 className="text-5xl tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600 text-5xl font-bold">
                {data.blogName}
              </span>
            </h1>
          </div>

          <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0 tracking-tight" id="navbar-collapse">
            {data.routing.map(({ name, uri }, i) => (
              <Link key={i} href={uri} className="p-2 lg:px-4 font-medium md:mx-2 hover:text-transparent text-2xl transition duration-150 ease-in hover:ease-out bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}