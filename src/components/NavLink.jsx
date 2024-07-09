"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

function NavLink({link}) {

  const pathName = usePathname();

  (
    <Link className={ `rounded p-1 z-1000 ${pathName === link.url && "bg-black text-white"}`} href={link.url}>
    {link.title}
    </Link>
  )
}

export default NavLink