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
        className={`transition duration-300 py-4 px-8 rounded-2xl backdrop-blur-[10px] ${!scrolled ? "" : "bg-[rgba(114,114,114,.2)]"}`}
      >
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="#home" legacyBehavior passHref>
              <NavigationMenuLink
                className="px-4 py-2 text-lg text-white text-opacity-50 font-bold hover:text-opacity-90
                hover:text-accent-foreground focus:text-opacity-100 focus:outline-none"
                autoFocus={true}
              >
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#aboutMe" legacyBehavior passHref>
              <NavigationMenuLink
                className="px-4 py-2 text-lg text-white text-opacity-50 font-bold hover:text-opacity-90
              hover:text-accent-foreground focus:text-opacity-100 focus:outline-none"
              >
                About Me
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#experience" legacyBehavior passHref>
              <NavigationMenuLink
                className="px-4 py-2 text-lg text-white text-opacity-50 font-bold hover:text-opacity-90
              hover:text-accent-foreground focus:text-opacity-100 focus:outline-none"
              >
                Experience
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="#project" legacyBehavior passHref>
              <NavigationMenuLink
                className="px-4 py-2 text-lg text-white text-opacity-50 font-bold hover:text-opacity-90
              hover:text-accent-foreground focus:text-opacity-100 focus:outline-none"
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
