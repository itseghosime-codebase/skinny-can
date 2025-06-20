'use client'
import Link from 'next/link'
import Logo from '@/assets/Logo.svg'
import { getSiteConfig } from '@/config/site-i18n'
import { Icons } from '@/components/icons'
import { Locale } from '@/i18n'
import LanguageSelector from './ui/LanguageSelector'
import Image from 'next/image'
import { useState } from 'react'
import { RiMenu4Fill } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'

interface SiteHeaderProps {
  locale: Locale
}

export function SiteHeader({ locale }: SiteHeaderProps) {
  const siteConfig = getSiteConfig(locale)

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-screen overflow-hidden bg-white">
      <nav>
        {/* Top Nav */}
        <section className="container py-2">
          <div className="relative flex min-h-16 w-full items-center justify-between md:px-12">
            {/* Language or Mobile Menu Button */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:inline-block">
                <LanguageSelector locale={locale} />
              </div>
              {/* Hamburger button for mobile */}
              <button
                className={`text-primary lg:hidden ${isOpen ? '-translate-x-40' : 'translate-x-0'} text-sm uppercase transition-transform duration-300 ease-in-out focus:outline-none`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle Menu"
              >
                {!isOpen ? (
                  <span className="flex items-center gap-1">
                    <RiMenu4Fill className="text-xl" />
                    {siteConfig.menu}
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <IoClose className="text-xl" />
                    {siteConfig.close}
                  </span>
                )}
              </button>
            </div>

            {/* Centered Logo */}
            <div className="absolute left-1/2 -translate-x-1/2">
              <Link href="/">
                <Image
                  src={Logo}
                  alt="LOGO"
                  sizes="100%"
                  className="h-10 w-auto md:h-12 lg:h-14"
                />
              </Link>
            </div>

            <div className="flex">
              <Link
                href=""
                className="flex items-center gap-2 font-varela text-xs uppercase text-primary"
              >
                <span>{siteConfig.location}</span>
                <Icons.locate className="hidden h-5 w-5 md:inline-block" />
              </Link>
            </div>
          </div>
        </section>
        <div className="border-b border-[#E6E6E6]" />
        {/* Main Nav */}
        <section>
          <ul className="hidden items-center justify-center gap-24 border-b border-[#E6E6E6] py-6 lg:flex">
            {siteConfig.mainNav.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="font-amiri text-base uppercase text-primary"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Nav Links */}

          <div
            className={`fixed ${isOpen ? 'translate-x-0' : '-translate-x-[100vw]'} inset-0 h-screen bg-white transition-transform delay-100 duration-300 ease-in-out`}
          >
            <section className="container border-b border-[#E6E6E6] py-2">
              <div className="relative flex min-h-16 w-full items-center justify-between">
                {/* Language or Mobile Menu Button */}
                <div className="flex items-center gap-4">
                  {/* Hamburger button for mobile */}
                  <button
                    className={`text-sm uppercase text-primary focus:outline-none lg:hidden`}
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle Menu"
                  >
                    <span className="flex items-center gap-1">
                      <IoClose className="text-xl" />
                      {siteConfig.close}
                    </span>
                  </button>
                </div>

                {/* Centered Logo */}
                <div className="absolute left-1/2 -translate-x-1/2">
                  <Link href="/" onClick={() => setIsOpen(false)}>
                    <Image
                      src={Logo}
                      alt="LOGO"
                      sizes="100%"
                      className="h-10 w-auto md:h-12 lg:h-14"
                    />
                  </Link>
                </div>

                <div className="flex">
                  <Link
                    href=""
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-2 font-varela text-xs uppercase text-primary"
                  >
                    <span>{siteConfig.location}</span>
                    <Icons.locate className="hidden h-5 w-5 md:inline-block" />
                  </Link>
                </div>
              </div>
            </section>
            <ul className="container flex flex-col items-start gap-6 py-8">
              {siteConfig.mainNav.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="font-amiri text-lg uppercase text-primary"
                    onClick={() => setIsOpen(false)} // Close menu on click
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Show language on mobile too */}
            <div className="container border-t border-[#E6E6E6] py-4">
              <LanguageSelector locale={locale} width="w-full" />
            </div>
          </div>
        </section>
      </nav>
    </header>
  )
}
