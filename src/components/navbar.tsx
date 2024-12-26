import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full flex-1 items-center">
      <nav className="fixed z-50 flex w-full items-center justify-between p-4 px-10 backdrop-blur-md">
        <Image
          src="/assets/alt-logo.png"
          alt="Techmind Logo"
          width={100}
          height={50}
        />
        <div className="hidden md:flex items-center gap-4">
          <Link href="#solutions">Solutions</Link>
          <Link href="#journals">Journals</Link>
          <Link href="#mca">MyCampusAdmin</Link>
        </div>
        <Sheet>
          <SheetTrigger className="flex md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription className="flex flex-col items-start text-lg gap-4">
                <Link href="#solutions">Solutions</Link>
                <Link href="#journals">Journals</Link>
                <Link href="#mca">MyCampusAdmin</Link>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
}
