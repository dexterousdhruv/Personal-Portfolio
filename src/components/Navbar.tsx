import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  BriefcaseBusiness,
  HomeIcon,
  LayoutGrid,
  Mail,
  SquareChartGantt,
  User,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "./magicui/dock";
import useMediaQuery from "@/hooks/use-media-query";

const navItems = [
  { name: "HOME", href: "home", icon: HomeIcon },
  { name: "ABOUT", href: "about", icon: User },
  { name: "SKILLS", href: "skills", icon: SquareChartGantt },
  { name: "PROJECTS", href: "projects", icon: LayoutGrid },
  { name: "EXPERIENCE", href: "experience", icon: BriefcaseBusiness },
  { name: "CONTACT", href: "contact", icon: Mail },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const isAboveSmallScreens = useMediaQuery('(min-width: 660px)')
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);


  if (!isAboveSmallScreens) {
    return <DockDemo isAboveSmallScreens={isAboveSmallScreens} />
  }


  return (
    <header
      className={cn(
        "border-b border-zinc-800 fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-2 sm:py-4 overflow-auto",
        scrolled ? "bg-background/80 backdrop-blur-md " : "bg-background"
      )}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex justify-center items-center w-full">
          {navItems.map((item, index) => {
            const isMiddle = index === Math.floor(navItems.length / 2) - 1;
            const isActive = location.pathname === item.href;

            return (
              <AnchorLink
                key={item.name}
                offset={isAboveSmallScreens ? "78": "0"}
                href={`#${item.href}`}
                className={cn(
                  "relative px-5 py-2 uppercase tracking-wider text-sm font-medium transition-colors"
                  // isMiddle ? 'text-lg mx-5' : 'mx-1',
                  // isActive ? 'text-foreground' : 'text-foreground/70 hover:text-foreground'
                )}
              >
                <span className="relative z-10">{item.name}</span>
              </AnchorLink>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;


type DockProps = {
  isAboveSmallScreens: boolean
}

export function DockDemo({ isAboveSmallScreens }: DockProps ) {
  return (
    <div className="flex flex-col items-center justify-center min-w-80">
      <TooltipProvider>
        <Dock direction="middle">
          {navItems.map((item) => (
            <DockIcon key={item.name} className="">
              <Tooltip>
                <TooltipTrigger>
                  <AnchorLink
                    href={`#${item.href}`}
                    offset={isAboveSmallScreens ? "78": "0"}
                    aria-label={item.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4" />
                  </AnchorLink>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.name[0] + item.name.slice(1).toLowerCase()}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  );
}
