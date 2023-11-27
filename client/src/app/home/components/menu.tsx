import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarLabel,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link"
export function Menu() {
  return (
    <div className="my-3">
      <Menubar className="rounded-none border-b border-none px-2 lg:px-4">
      <MenubarMenu>
      <Link 
          href="/home" >  <MenubarTrigger className="font-bold text-lg cursor-pointer"  >Brevet</MenubarTrigger></Link>
      </MenubarMenu>
      <MenubarMenu>
      <Link
          href="/profile/myads" >   <MenubarTrigger className="relative text-base cursor-pointer">Ads</MenubarTrigger></Link>
       
      </MenubarMenu>
     
      <MenubarMenu>
      <Link
          href="/home" > <MenubarTrigger className="text-base cursor-pointer">View</MenubarTrigger> </Link>
      </MenubarMenu>
      <MenubarMenu>
      <Link
          href="/profile" ><MenubarTrigger className="text-base cursor-pointer">Account</MenubarTrigger></Link>
      </MenubarMenu>
    </Menubar>
    </div>
    
  )
}
