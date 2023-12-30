import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BASE_IMAGE_PATH } from '@/lib/constants'
import getImagePath from '@/lib/getImagePath'
import { Actor, Crew } from '@/typings'
import React from 'react'

const CastCard = ({data}:{data: Partial<Actor> & Partial<Crew>}) => {

    const characterName = data?.name || data?.original_name || ""

  return (
      <div className="flex gap-4 items-center">
          <Avatar className=' w-24 h-24'>
              <AvatarImage
                    src={`${BASE_IMAGE_PATH}/w138_and_h175_face/${data?.profile_path}`}
                  alt={characterName}
              />
              <AvatarFallback>{characterName.slice(0, 1)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className=' text-xl font-semibold'>{characterName}</h1>
            <h3 className=' text-sm font-medium'>{ data?.character || data?.job}</h3>
            <h3 className=' text-sm font-medium text-muted-foreground mt-2'>{data?.known_for_department}</h3>
          </div>
      </div>
  )
}

export default CastCard