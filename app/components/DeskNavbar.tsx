import Link from 'next/link'
import React from "react";
import { AiOutlineDown } from "react-icons/ai";

interface MenuItem {
  id: string;
  link: string;
  icon?: JSX.Element;
  label: string;
}

const menuItems: MenuItem[] = [
  {
    id: "1",
    link: "/projects",
    label: "Projects",
  },
  {
    id: "2",
    link: "/blog",
    icon: <AiOutlineDown />,
    label: "Services",
  },
  {
    id: "3",
    link: "/services",
    label: " Blog",
  },
  {
    id: "4",
    link: "/contact",
    icon: <AiOutlineDown />,
    label: " Studio",
  },
  {
    id: "5",
    link: "/studio",
    label: "Contact",
  },
];

const DeskNavbar = () => {
  return (
    <nav className="border">
      <div className="w-11/12 flex justify-between h-20 mx-auto items-center">
        <div className="text-3xl font-bold">Right</div>
        <div className="flex gap-1">
          {menuItems.map(menuItem => (
            <Link href={menuItem.link} key={menuItem.id} className="font-semibold text-neutral-500 px-3.5 py-4 border border-transparent rounded-md uppercase text-sm hover:bg-neutral-200 flex gap-1 items-center">
                {menuItem.label}
                <div className="text-current text-sm" >
                 {menuItem.icon}
                  </div>
            </Link>
          ))}
        </div>  
      </div>
    </nav>
  );
};

export default DeskNavbar;
