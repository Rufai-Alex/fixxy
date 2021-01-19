import React from "react";
import Link from "next/link";

function Nav() {
  return (
    <div className=" absolute  Nav bottom-0 right-0 w-9/12   lg:w-1/4 sm:w-4/5">
      <ul className="navLink flex justify-around w-full text-xs ">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href="/Sponsorship">
            <a className="">Sponsorship</a>
          </Link>
        </li>
        <li>
          <Link href="/Terms">
            <a className="">Terms</a>
          </Link>
        </li>
        <li>
          <Link href="/Privacy">
            <a className="">Privacy</a>
          </Link>
        </li>
        <li>
          <Link href="/About">
            <a className="">About</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
