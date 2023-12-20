"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

// --constants--
import { NAV_LINKS } from '@/lib/constants'
import { cn } from '@/lib/utils'

const NavLinks = () => {

    const pathName = usePathname()

  return NAV_LINKS.map((obj) => (
      <Link
          href={obj.link}
          className={cn("text-sm text-muted-foreground", pathName.includes(obj.link) && "text-base text-primary")}
      >
          {obj.name}
      </Link>
  ))
}

export default NavLinks