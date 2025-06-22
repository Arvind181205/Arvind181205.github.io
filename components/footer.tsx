import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-white py-8 dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {new Date().getFullYear()} Kothem Arvind Sai Teja. All rights reserved.
            </p>
          </div>
          <nav className="flex space-x-4">
            <Link
              href="/privacy"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              Sitemap
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
