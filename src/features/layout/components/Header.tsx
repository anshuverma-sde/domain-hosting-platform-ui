"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Menu, X } from "lucide-react"
import { theme } from "@/config/theme"

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="border-b bg-background sticky top-0 z-40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold" style={{ color: theme.colors.primary }}>
              DomainHost<span style={{ color: '#3b82f6' }}>Pro</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Domains</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/domains/search"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Domain Search</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Find and register your perfect domain name
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/domains/transfer"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Domain Transfer</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Transfer your existing domains to us
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/domains/whois"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">WHOIS Lookup</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Check domain ownership information
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/domains/pricing"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Domain Pricing</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              View our competitive domain pricing
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Hosting</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-2">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/hosting/shared"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Shared Hosting</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Affordable hosting for small websites
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/hosting/vps"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">VPS Hosting</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Virtual private servers with dedicated resources
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/hosting/dedicated"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">Dedicated Hosting</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Full server resources for high-traffic websites
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/hosting/wordpress"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">WordPress Hosting</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Optimized hosting for WordPress websites
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/addons" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Add-ons</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/support" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Support</NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <ModeToggle />
              <Button variant="outline" size="sm" asChild>
                <Link href="/auth/login">Login</Link>
              </Button>
              <Button 
                size="sm" 
                asChild
                style={{ backgroundColor: theme.colors.primary }}
              >
                <Link href="/auth/signup">Sign Up</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <ModeToggle />
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t">
            <Link href="/domains/search" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent">
              Domain Search
            </Link>
            <Link href="/domains/transfer" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent">
              Domain Transfer
            </Link>
            <Link href="/hosting/shared" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent">
              Shared Hosting
            </Link>
            <Link href="/hosting/vps" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent">
              VPS Hosting
            </Link>
            <Link
              href="/hosting/dedicated"
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent"
            >
              Dedicated Hosting
            </Link>
            <Link href="/addons" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent">
              Add-ons
            </Link>
            <Link href="/support" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent">
              Support
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center px-3">
                <Button variant="outline" className="w-full mb-2" asChild>
                  <Link href="/auth/login">Login</Link>
                </Button>
              </div>
              <div className="flex items-center px-3">
                <Button 
                  className="w-full" 
                  asChild
                  style={{ backgroundColor: theme.colors.primary }}
                >
                  <Link href="/auth/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 