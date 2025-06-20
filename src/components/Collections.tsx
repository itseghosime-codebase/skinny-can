import { useTranslations } from 'next-intl'
import React from 'react'

import SodaOne from '@/assets/skinny-can-one.png'
import SodaTwo from '@/assets/skinny-can-two.png'

import BgOne from '@/assets/selection-bg-one.png'
import BgTwo from '@/assets/selection-bg-two.svg'

import Image from 'next/image'
import { Icons } from './icons'

export default function Collections() {
  const t = useTranslations('Index')

  const Selections = [
    {
      can: SodaOne,
      title: 'soda-one',
      year: 'year-one',
    },
    {
      can: SodaTwo,
      title: 'soda-two',
      year: 'year-two',
    },
  ]

  return (
    <div className="relative pb-32">
      <div className="relative z-10">
        <section className="container space-y-3 text-center font-varela tracking-wider text-primary md:space-y-4">
          <div className="relative after:absolute after:-bottom-1 after:left-1/2 after:h-0.5 after:w-7 after:-translate-x-1/2 after:rounded-full after:bg-primary">
            <p className="text-sm uppercase lg:text-base">{t('collection')}</p>
          </div>
          <h1 className="font-amiri text-3xl md:text-5xl lg:text-7xl">
            {t('collection_heading')}
          </h1>
          <p className="mx-auto max-w-72 text-sm leading-5 text-[#96A69C] md:max-w-md md:text-base lg:text-lg">
            {t('collection_description')}
          </p>
        </section>
        <section className="container mx-auto mt-12 w-full max-w-5xl">
          <div className="grid gap-7 md:grid-cols-2">
            {Selections.map((items, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-3 border border-[#E6E6E6] bg-white px-5 py-12 font-varela uppercase text-primary"
              >
                <Image
                  src={items.can}
                  alt={t(items.title)}
                  sizes="100%"
                  className="h-52 w-auto md:h-60 lg:h-80"
                />
                <h4 className="text-xl md:text-2xl lg:text-3xl">
                  {t(items.title)}
                </h4>
                <p className="text-xs text-[#96A69C] md:text-sm lg:text-base">
                  {t(items.year)}
                </p>
                <button className="flex items-center justify-center gap-2 bg-[#F1F1F1] px-8 py-3 text-xs uppercase tracking-wider md:text-sm lg:text-base">
                  {t('discover')} <Icons.rightArrow className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Backgrounds */}
      <div className="absolute inset-0 top-0 z-0">
        <Image
          src={BgOne}
          alt="Background"
          sizes="100%"
          className="absolute right-0 top-0"
        />
        <Image
          src={BgTwo}
          alt="Background"
          sizes="100%"
          className="absolute -bottom-1/4 left-0 md:translate-y-16"
        />
      </div>
    </div>
  )
}
