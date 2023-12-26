"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeftCircle } from 'lucide-react'

const BackArrowBtn = () => {

    const router = useRouter()

  return (
    <Button variant="link" className=' text-foreground' onClick={() => router.back()}>
        <ArrowLeftCircle size={20} className=' mr-1' />
        Back
    </Button>
  )
}

export default BackArrowBtn