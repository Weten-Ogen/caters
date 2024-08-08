"use client"
import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

export default function NavLink({linkname, hreff, className,linkicon}) {
  
  return (
    <Link className={cn('flex items-end gap-1 justify-evenly',className)} href={hreff}  >
        <div className="">
        {linkicon}
        </div>
        <p className={ 'text-p-red text-sm uppercase tracking-wide' }>
        {linkname}
        </p>
    </Link>
  )
}
