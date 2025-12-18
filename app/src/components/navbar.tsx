/* eslint-disable @next/next/no-img-element */
"use client";

import {
  MegaMenu,
  MegaMenuDropdown,
  MegaMenuDropdownToggle,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { HiChevronDown } from "react-icons/hi";
import { allMediaConversions, myDocumentLinks, myImageLinks } from "../const";

export default function Navbar() {
  return (
    <MegaMenu className=" shadow mb-1 dark:mb-0">
      <NavbarBrand href="/">
        <img
          alt="easy pixel logo"
          src="/eps-logo.png"
          className="-mr-2  h-10 sm:h-12 md:h-14"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Easy Pixel Shift
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <MegaMenuDropdownToggle>
          Tools
          <HiChevronDown className="ml-2" />
        </MegaMenuDropdownToggle>
        <NavbarLink href="/about" target="_blank">
          About
        </NavbarLink>
        <NavbarLink href="https://wa.me/201508328238" target="_blank">
          Contact
        </NavbarLink>
      </NavbarCollapse>
      <MegaMenuDropdown className=" w-full hidden">
        <div className="mx-auto w-full mt-6 grid max-w-7xl border-y border-gray-200 px-2 py-5 text-sm shadow-sm sm:grid-cols-2 md:grid-cols-3 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
          <ul className="space-y-4 sm:mb-4 md:mb-0">
            {myImageLinks.map((item, i) => {
              if (i > 5) {
                return null;
              } else {
                return (
                  <li
                    key={i}
                    className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                );
              }
            })}
          </ul>
          <ul className="mb-4 hidden space-y-4 sm:block md:mb-0">
            {myDocumentLinks.map((item, i) => {
              if (i > 5) {
                return null;
              } else {
                return (
                  <li
                    key={i}
                    className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                  >
                    <a href={item.link}>{item.name}</a>
                  </li>
                );
              }
            })}
          </ul>
          <ul className="mb-4 hidden space-y-4 sm:block md:mb-0">
            {allMediaConversions.map((item, i) => {
              if (i > 5) {
                return null;
              } else {
                return (
                  <li
                    key={i}
                    className="hover:text-primary-600 hover:underline dark:hover:text-primary-500"
                  >
                    <a href={"/media" + item.link}>{item.name}</a>
                  </li>
                );
              }
            })}
          </ul>
        </div>
      </MegaMenuDropdown>
    </MegaMenu>
  );
}
