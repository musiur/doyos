"use client";

import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];

const Navbar = () => {
  return (
    <header>
      <section className="py-[9px] bg-primary">
        <p className="container flex items-center justify-end text-white gap-[19px]">
          <span className="text-white">Subscribe to our newsletter</span>{" "}
          <span className="text-white">|</span>
          <span className="text-white">Latest news and articles</span>
        </p>
      </section>
      <section className="bg-white border-b">
        <nav className="container flex items-center justify-between gap-10 py-2">
          <Image
            src="/images/logo.svg"
            alt=""
            height={500}
            width={500}
            className="h-[43.81px] w-[50px]"
          />
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Trading & tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem
                      href="/docs/primitives/typography"
                      title="Typography"
                    >
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Market resources</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-2 ">
                    {components.map((component) => (
                      <ListItem
                        key={component.title}
                        title={component.title}
                        href={component.href}
                      >
                        {component.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/partners" legacyBehavior passHref>
                  <NavigationMenuTrigger
                    className={navigationMenuTriggerStyle()}
                  >
                    Partners
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/accounts" legacyBehavior passHref>
                  <NavigationMenuTrigger
                    className={navigationMenuTriggerStyle()}
                  >
                    Accounts
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/about-us" legacyBehavior passHref>
                  <NavigationMenuTrigger
                    className={navigationMenuTriggerStyle()}
                  >
                    About us
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/supports" legacyBehavior passHref>
                  <NavigationMenuTrigger
                    className={navigationMenuTriggerStyle()}
                  >
                    Supports
                  </NavigationMenuTrigger>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center justify-end gap-[13px]">
            <Button>Register</Button>
            <DropdownMenu>
              <DropdownMenuTrigger className="px-[25px] py-[8px] rounded-[10px] text-[16px] font-bold bg-secondary hover:bg-secondary/90 text-white outline-none">
                Login
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>Account types</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Standard</DropdownMenuItem>
                <DropdownMenuItem>VIP</DropdownMenuItem>
                <DropdownMenuItem>ENC</DropdownMenuItem>
                <DropdownMenuItem>Islamic</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </section>
    </header>
  );
};

export default Navbar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
