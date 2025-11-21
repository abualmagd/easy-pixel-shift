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

export default function Navbar() {
  return (
    <MegaMenu>
      <NavbarBrand href="/">
        <span className="self-center text-transparent bg-clip-text bg-linear-to-bl from-fuchsia-600 to-amber-500  text-xl font-semibold whitespace-nowrap text-heading">
          Easy Pixel Shift
        </span>{" "}
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink href="/">Home</NavbarLink>
        <NavbarLink as="span">
          <MegaMenuDropdownToggle>
            Company
            <HiChevronDown className="ml-2" />
          </MegaMenuDropdownToggle>
        </NavbarLink>
        <NavbarLink href="/">Marketplace</NavbarLink>
        <NavbarLink href="/">Resources</NavbarLink>
        <NavbarLink href="/">Contact</NavbarLink>
      </NavbarCollapse>
      <MegaMenuDropdown>
        <ul className="mx-auto mt-6 grid max-w-7xl border-y border-gray-200 px-2 py-5 shadow-sm sm:grid-cols-2 md:grid-cols-3 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
          <li>
            <a
              href="#"
              className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Online Stores</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Connect with third-party tools that youre already using.
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Segmentation</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Connect with third-party tools that youre already using.
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Marketing CRM</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Connect with third-party tools that youre already using.
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Online Stores</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Connect with third-party tools that youre already using.
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Segmentation</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Connect with third-party tools that youre already using.
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Marketing CRM</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Connect with third-party tools that youre already using.
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Audience Management</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Connect with third-party tools that youre already using.
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Creative Tools</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Connect with third-party tools that youre already using.
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block rounded-lg p-3 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="font-semibold">Marketing Automation</div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Connect with third-party tools that youre already using.
              </span>
            </a>
          </li>
        </ul>
      </MegaMenuDropdown>
    </MegaMenu>
  );
}
