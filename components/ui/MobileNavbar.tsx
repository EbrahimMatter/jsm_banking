"use client";
import React from "react";
import Image from "next/image";
import hamburgerMenu from "../../public/icons/hamburger.svg";
import logo from "../../public/icons/logo.svg";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import { usePathname, useRouter } from "next/navigation"; // استدعينا الروتر هنا
import { cn } from "@/lib/utils";

function MobileNavbar({ user }: MobileNavProps) {
  const path = usePathname();
  const router = useRouter(); // شغلنا الروتر عشان نستخدمه في النقل

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        {/* شيلنا asChild من هنا وخليناها نظيفة */}
        <SheetTrigger>
          <Image
            src={hamburgerMenu}
            alt="hamburger menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>

        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-1 px-4"
          >
            <Image src={logo} width={34} height={34} alt="Horizon logo" />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>

          <div className="mobilenav-sheet">
            <nav className="flex h-full flex-col gap-6 text-white pt-16 px-4">
              {sidebarLinks.map((item) => {
                const isActive =
                  path === item.route || path.startsWith(`${item.route}/`);
                return (
                  <SheetClose
                    key={item.label}
                    onClick={() => router.push(item.route)}
                    className={cn(
                      "mobilenav-sheet_close w-full cursor-pointer",
                      {
                        "bg-bank-gradient": isActive,
                      },
                    )}
                  >
                    <div className="relative size-6">
                      <Image
                        src={item.imgURL}
                        alt={item.label}
                        width={20}
                        height={20}
                        className={cn({
                          "brightness-[3] invert-0": isActive,
                        })}
                      />
                    </div>
                    <p
                      className={cn("text-16 font-semibold text-black-2", {
                        "text-white": isActive,
                      })}
                    >
                      {item.label}
                    </p>
                  </SheetClose>
                );
              })}
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}

export default MobileNavbar;
