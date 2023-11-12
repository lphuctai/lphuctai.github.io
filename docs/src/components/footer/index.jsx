import Link from 'next/link';
import data from '@/data/footer';

const Footer = () => {
  return (
    <footer>
      <div className="bg-gray-100 dark:bg-gray-700">
        <div className="w-full mx-auto max-w-screen-xl">
          <div className="px-4 py-6 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              Copyright © {data.currentYear} {data.blogName}.
              <div className="text-xs text-gray-300 dark:text-gray-300">
                Disclaimer all content
              </div>
            </span>
            <div className="flex mt-4 space-x-5 mr-5 sm:justify-center md:mt-0">
              {data.contacts.map(({ name, icon, url }, i) => (
                <Link key={i} href={url} target="_blank" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  {icon()}
                  <span className="sr-only">{name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
