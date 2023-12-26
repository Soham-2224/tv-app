"use client"

import { useEffect, useRef } from "react"

// --utils--
import { cn } from "@/lib/utils"

const CircularProgress = ({vote} :{vote: number}) => {

    const circleRef = useRef<SVGCircleElement>(null)

    useEffect(() => {
        circleRef?.current?.setAttribute(
            "style",
            `stroke-dashoffset: calc(160px - (160px * ${vote?.toFixed(1)}) / 10);`
        )
    }, [])

  return (
      <div className={cn("percent scale-75 lg:scale-95 relative w-[60px] h-[60px] rounded-[50%]")}>
          <svg className="">
              <circle
              className=" stroke-foreground/30"
                  cx="25"
                  cy="25"
                  r="25"
              ></circle>
              <circle
              className=" stroke-foreground"
                  ref={circleRef}
                  cx="25"
                  cy="25"
                  r="25"
              ></circle>
          </svg>
          <div className="number absolute top-0 left-0 w-full h-full flex justify-center items-center">
              <h2 className="text-foreground font-bold text-base">
                  {vote?.toFixed(1)}
                  <span className=" text-sm ">%</span>
              </h2>
          </div>
      </div>
  )
}

export default CircularProgress