import NavigationContent from "@/components/shared/NavigationContent"

const LeftSidebar = () => {
  return (
    <div className=" hidden lg:inline-flex py-6 px-4 lg:w-1/5 xl:w-1/6 max-w-[250px] h-full bg-background border-r border-border">
      <NavigationContent />
    </div>
  )
}

export default LeftSidebar