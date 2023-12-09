"use client";

import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger
} from "@/components/ui/sheet";

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
import { AlignRight } from "lucide-react";
import BrandLogo from "../assets/home/brandlogo";

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
    <header className="sticky top-0 bg-white border-b z-50">
      <section className="py-[4px] md:py-[9px] bg-primary text-[12px] md:text-[16px] hidden md:flex">
        <p className="container flex flex-col md:flex-row flex-wrap items-center justify-center md:justify-end text-white gap-[5px] md:gap-[19px]">
          <span className="text-white">Subscribe to our newsletter</span>{" "}
          <span className="text-white hidden md:flex">|</span>
          <span className="flex md:hidden border-b w-full" />
          <span className="text-white">Latest news and articles</span>
        </p>
      </section>

      <section>
        <nav className="container flex items-center justify-between gap-10 py-[7px] sticky top-0">
          <Link href="/">
            <BrandLogo />
          </Link>
          <NavigationMenu className="hidden min-[1200px]:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Trading & tools</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] text-primary text-[14px] md:text-[16px]">
                    <div className="flex flex-col gap-[6px]">
                      <h6 className="font-semibold">Trading Platform</h6>
                      <Link href="/trading-and-tools/trading-platform/meta-trader5">MetaTrader 5</Link>
                      <Link href="/trading-and-tools/trading-platform/mt5-android">MT5 Android</Link>
                      <Link href="/trading-and-tools/trading-platform/mt5-ios">MT5 Mac/iOS</Link>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <h6 className="font-semibold">Market</h6>
                      <Link href="/trading-and-tools/market/forex">Forex</Link>
                      <Link href="/trading-and-tools/market/cryptos">Cryptos</Link>
                      <Link href="/trading-and-tools/market/stock">Stock/Share</Link>
                      <Link href="/trading-and-tools/market/indices">Indices/CFD</Link>
                      <Link href="/trading-and-tools/market/commodities">Commodities</Link>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <h6 className="font-semibold">Trading Conditions</h6>
                      <Link href="/trading-and-tools/trading-conditions/account-type">Account Type</Link>
                      <Link href="/trading-and-tools/trading-conditions/funding-withdrawal">Funding & Withdrawal</Link>
                      <Link href="/trading-and-tools/trading-conditions/spread">Spread</Link>
                      <Link href="/trading-and-tools/trading-conditions/swap-free-account">Swap Free Account</Link>
                      <Link href="/trading-and-tools/trading-conditions/security-fund">Security of Fund</Link>
                      <Link href="/trading-and-tools/trading-conditions/trading-conditions">Trading Conditions </Link>
                    </div>
                    <div className="flex flex-col gap-[6px]">
                      <h6 className="font-semibold">Trading Tools</h6>
                      <Link href="/trading-and-tools/trading-tools/calculator">Calculator</Link>
                      <Link href="/trading-and-tools/trading-tools/free-vps">Free VPS</Link>
                      <Link href="/trading-and-tools/trading-tools/economic-calendar">Economic Calendar</Link>
                      <Link href="/trading-and-tools/trading-tools/market-holidays">Market Holidays </Link>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  Market resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-2 ">
                    <div className="flex flex-col gap-[6px] pl-[118px]">
                      <h6 className="font-semibold md:w-[400px] lg:w-[500px]">Market resources</h6>
                      <Link href="/market-resources/forex-educations">Forex Trading Educations</Link>
                      <Link href="/market-resources/technical-analysis">Technical Analysis</Link>
                      <Link href="/market-resources/fundamental-analysis">Fundamental Analysis</Link>
                      <Link href="/market-resources/trading-session">Trading Session</Link>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                  Accounts
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-1">
                    <div className="flex flex-col gap-[6px] items-end pr-[117px]">
                      <h6 className="font-semibold">Accounts</h6>
                      <Link href="/accounts/regular">Regular Account</Link>
                      <Link href="/accounts/prop-funding">PROP Funding</Link>
                      <Link href="/accounts/funding-widthdrawal">Funding & Withdrawal</Link>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={navigationMenuTriggerStyle()}>
                  About us
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] grid-cols-1 ">
                    <div className="flex flex-col gap-[6px] items-end pr-[23px]">
                      <h6 className="font-semibold">About us</h6>
                      <Link href="/about-us/our-goal">Our Goal</Link>
                      <Link href="/about-us/company-news">Company News</Link>
                      <Link href="/about-us/license-regulations">License & Regulations</Link>
                      <Link href="/about-us/legal-documents">Legal Documents</Link>
                      <Link href="/about-us/global-offices">Global Offices</Link>
                    </div>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/partners" legacyBehavior passHref>
                  Partners
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/supports" legacyBehavior passHref>
                  Supports
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center justify-end gap-[13px]">
            <Button>Register</Button>
            <DropdownMenu>
              <DropdownMenuTrigger className="px-[15px] py-[6px] rounded-[5px] text-[14px] md:px-[25px] md:py-[8px] md:rounded-[10px] md:text-[16px] font-semibold md:font-bold bg-secondary hover:bg-secondary/90 text-white outline-none">
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
            <Sheet>
              <SheetTrigger className="flex min-[1200px]:hidden">
                <AlignRight className="w-[24px] h-[24px] stroke-primary" />
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <div className="mb-[30px]">
                    <BrandLogo />
                  </div>
                </SheetHeader>
                <div className="max-h-[80vh] overflow-auto">
                  <div className="grid grid-cols-2 gap-[20px]">
                    <div className="grid grid-cols-1 gap-[20px]">
                      <h4 className="text-[16px] md:text-[20px] font-bold">
                        Trading & tools
                      </h4>
                      <div className="flex flex-col gap-[6px]">
                        <h6 className="font-semibold">Trading Platform</h6>
                        <Link href="/">MetaTrader 5</Link>
                        <Link href="/">MT5 Android</Link>
                        <Link href="/">MT5 Mac/iOS</Link>
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <h6 className="font-semibold">Market</h6>
                        <Link href="/">Forex</Link>
                        <Link href="/">Cryptos</Link>
                        <Link href="/">Stock/Share</Link>
                        <Link href="/">Indices/CFD</Link>
                        <Link href="/">Commodities</Link>
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <h6 className="font-semibold">Trading Conditions</h6>
                        <Link href="/">Account Type</Link>
                        <Link href="/">Funding & Withdrawal</Link>
                        <Link href="/">Spread</Link>
                        <Link href="/trading-and-tools/trading-conditions/swap-free-account">Swap Free Account</Link>
                        <Link href="/">Security of Fund</Link>
                        <Link href="/">Trading Conditions </Link>
                      </div>
                      <div className="flex flex-col gap-[6px]">
                        <h6 className="font-semibold">Trading Tools</h6>
                        <Link href="/">Calculator</Link>
                        <Link href="/">Free VPS</Link>
                        <Link href="/">Economic Calendar</Link>
                        <Link href="/">Market Holidays </Link>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 gap-[20px]">
                      <div className="flex flex-col gap-[6px]">
                        <h4 className="text-[16px] md:text-[20px] font-bold mb-[12px]">
                          Market resouces
                        </h4>
                        <Link href="/">Forex Trading Educations</Link>
                        <Link href="/">Technical Analysis</Link>
                        <Link href="/">Fundamental Analysis</Link>
                        <Link href="/">Trading Session</Link>
                      </div>
                      <div className="flex flex-col gap-[6px] -mt-20 md:-mt-0">
                        <h4 className="text-[16px] md:text-[20px] font-bold mb-[12px]">
                          Accounts
                        </h4>
                        <Link href="/">Regular Account</Link>
                        <Link href="/">PROP Funding</Link>
                        <Link href="/">Funding & Withdrawal</Link>
                      </div>
                      <div className="flex flex-col gap-[6px] -mt-8 md:-mt-0">
                        <h4 className="text-[16px] md:text-[20px] font-bold mb-[12px]">
                          About us
                        </h4>
                        <Link href="/">Our Goal</Link>
                        <Link href="/">Company News</Link>
                        <Link href="/">License & Regulations</Link>
                        <Link href="/">Legal Documents</Link>
                        <Link href="/">Global Offices</Link>
                      </div>
                      <div className="flex flex-col gap-[6px] -mt-16 md:-mt-0 font-bold lg:font-normal">
                        <Link href="/partners" legacyBehavior passHref>
                          Partners
                        </Link>
                        <Link href="/supports" legacyBehavior passHref>
                          Supports
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
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
