import Logo from "./Logo";
import NextLink from "next/link";
import HamburgerButton from "./HamburgerButton";
import React from "react";
import ThemeToggleButton from "./ThemeToggleButton";
import { IoLogoGithub } from "react-icons/io5";

interface LinkItemProps {
  href: string;
  path?: string;
  children: React.ReactNode;
  target?: string;
  className?: string;
}

const LinkItem = ({
  href,
  path,
  target,
  children,
  className,
}: LinkItemProps) => {
  const active = href == path;
  const inactiveColor = active
    ? "text-gray-900"
    : "text-gray-800 dark:text-white";

  return (
    <NextLink
      href={href}
      passHref
      scroll
      className={`py-2 px-4 rounded-lg hover:underline hover:underline-offset-4 ${inactiveColor} ${
        active ? "bg-teal-500" : ""
      } ${className}`}
      target={target}
    >
      {children}
    </NextLink>
  );
};

interface NavbarProps {
  path: string;
}

const Navbar = ({ path }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed w-full backdrop:filter backdrop-blur-lg z-10">
      <div className="container mx-auto flex p-2 justify-between items-center max-w-screen-md">
        <div className="flex items-center mr-5">
          <h1 className="text-lg font-semibold">
            <Logo />
          </h1>
        </div>

        <div className="hidden md:flex md:flex-grow md:w-auto">
          <LinkItem
            href="https://nextjs-blog-app-gamma-one.vercel.app/yuichi_nakamura"
            path={path}
            target="_blank"
            className="inline-flex items-center gap-4"
          >
            Blog
          </LinkItem>
          <LinkItem
            href="https://github.com/nakamurau1/homepage"
            path={path}
            target="_blank"
            className="inline-flex items-center gap-4 pl-2"
          >
            <IoLogoGithub />
            Source
          </LinkItem>
        </div>

        <div className="flex items-center justify-end flex-grow">
          <ThemeToggleButton />
          <HamburgerButton
            isOpen={isMenuOpen}
            toggle={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>
      </div>

      <div
        className={`${isMenuOpen ? "flex" : "hidden"} flex-col md:hidden mt-3`}
      >
        <LinkItem
          href="https://nextjs-blog-app-gamma-one.vercel.app/yuichi_nakamura"
          path={path}
          target="_blank"
          className="inline-flex items-center gap-4"
        >
          Blog
        </LinkItem>
        <LinkItem href="https://github.com/nakamurau1/homepage" target="_blank">
          View Source
        </LinkItem>
      </div>
    </nav>
  );
};

export default Navbar;
