import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import { theme } from "@/config/theme"

export const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-gray-900 dark:text-white">
              DomainHost<span style={{ color: theme.colors.primary }}>Pro</span>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Your trusted partner for domain registration and web hosting services. We provide reliable solutions to
              help you establish and grow your online presence.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Domains</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/domains/search"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Domain Search
                </Link>
              </li>
              <li>
                <Link
                  href="/domains/transfer"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Domain Transfer
                </Link>
              </li>
              <li>
                <Link
                  href="/domains/whois"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  WHOIS Lookup
                </Link>
              </li>
              <li>
                <Link
                  href="/domains/pricing"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Domain Pricing
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Hosting</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/hosting/shared"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Shared Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/hosting/vps"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  VPS Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/hosting/dedicated"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Dedicated Hosting
                </Link>
              </li>
              <li>
                <Link
                  href="/hosting/wordpress"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  WordPress Hosting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/support"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/support/tickets"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Submit Ticket
                </Link>
              </li>
              <li>
                <Link
                  href="/support/knowledge-base"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
                >
                  Knowledge Base
                </Link>
              </li>
              <li>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>1-800-123-4567</span>
                </div>
              </li>
              <li>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>support@domainhostpro.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} DomainHostPro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                href="/terms"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href="/legal"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors text-sm"
              >
                Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 