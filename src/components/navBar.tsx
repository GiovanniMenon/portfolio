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
import { ThemeToggle } from "@/components/ThemeToggle";

function NavBar() {
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
    <div className="fixed w-full flex justify-center py-4 z-[60]  ">
      <NavigationMenu
        className={` mih-w-screen transition duration-300 px-2 py-4 md:py-4 md:px-6 rounded-2xl ${!scrolled ? "backdrop-blur-[8px] bg-[rgba(114,114,114,.1)]" : " backdrop-blur-[10px] bg-[rgba(114,114,114,.2)]"}`}
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#home" legacyBehavior passHref>
              <NavigationMenuLink
                className="text-sm px-2 md:px-4 md:py-2 md:text-lg text-secondary-foreground opacity-50  hover:opacity-90
                hover:text-blue-500 focus:text-opacity-100 focus:outline-none focus:text-blue-500 focus:opacity-100"
                autoFocus={true}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#aboutMe" legacyBehavior passHref>
              <NavigationMenuLink
                className="text-sm px-2 md:px-4 md:py-2 md:text-lg text-secondary-foreground opacity-50  hover:opacity-90
              hover:text-blue-500  focus:text-opacity-100 focus:outline-none focus:text-blue-500 focus:opacity-100"
              >
                About
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#experience" legacyBehavior passHref>
              <NavigationMenuLink
                className="text-sm px-2 md:px-4 md:py-2 md:text-lg text-secondary-foreground opacity-50  hover:opacity-90
              hover:text-blue-500  focus:text-opacity-100 focus:outline-none focus:text-blue-500 focus:opacity-100"
              >
                Experience
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#project" legacyBehavior passHref>
              <NavigationMenuLink
                className="text-sm px-2 md:px-4 md:py-2 md:text-lg text-secondary-foreground opacity-50  hover:opacity-90
              hover:text-blue-500  focus:text-opacity-100 focus:outline-none focus:text-blue-500 focus:opacity-100"
              >
                Project
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <ThemeToggle />
    </div>
  );
}

export default NavBar;
