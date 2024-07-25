import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

export const Header = ({ children }: HeaderProps) => {
  return (
    <div className='max-h-[62px] min-w-full flex-nowrap  flex w-full items-center justify-between gap-2 py-6 px-4 border border-slate-400'>
      <Link href='/' className='md:flex-1'>
        hey
      </Link>
      {children}
    </div>
  )
}
