import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/ui/modeToggle"
import Image from "next/image"

const Header = () => {
  return (
      <header className="bg-background border-b border-border">
          <div className="flex justify-between items-center | section-padding max-section-width">
              <Image
                  src="/assets/Applogo.png"
                  width={45}
                  height={45}
                  alt="TV App Logo"
                  priority
                  className=" h-auto"
              />
              <Input placeholder="Search movies, tv shows..." className=" max-w-lg lg:max-w-xl xl:max-w-3xl" />
              <ModeToggle />
          </div>
      </header>
  )
}

export default Header