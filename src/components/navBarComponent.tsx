// noinspection HtmlUnknownAnchorTarget

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useState, useEffect } from "react";

function NavBarComponent() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full flex justify-center py-4  ">
      <NavigationMenu
        className={`mih-w-screen transition duration-300 px-2 py-4 md:py-4 md:px-6 rounded-2xl backdrop-blur-[10px] ${!scrolled ? "" : "bg-[rgba(114,114,114,.2)]"}`}
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#home" legacyBehavior passHref>
              <NavigationMenuLink
                className="text-sm px-2 md:px-4 md:py-2 md:text-lg text-white text-opacity-50 font-bold hover:text-opacity-90
                hover:text-[--titleColor] focus:text-opacity-100 focus:outline-none focus:text-[--titleColor]"
                autoFocus={true}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#aboutMe" legacyBehavior passHref>
              <NavigationMenuLink
                className="text-sm px-2 md:px-4 md:py-2 md:text-lg text-white text-opacity-50 font-bold hover:text-opacity-90
              hover:text-[--titleColor]  focus:text-opacity-100 focus:outline-none focus:text-[--titleColor]"
              >
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#experience" legacyBehavior passHref>
              <NavigationMenuLink
                className="text-sm px-2 md:px-4 md:py-2 md:text-lg text-white text-opacity-50 font-bold hover:text-opacity-90
              hover:text-[--titleColor]  focus:text-opacity-100 focus:outline-none focus:text-[--titleColor]"
              >
                Experience
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#project" legacyBehavior passHref>
              <NavigationMenuLink
                className="text-sm px-2 md:px-4 md:py-2 md:text-lg text-white text-opacity-50 font-bold hover:text-opacity-90
              hover:text-[--titleColor]  focus:text-opacity-100 focus:outline-none focus:text-[--titleColor]"
              >
                Project
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default NavBarComponent;
