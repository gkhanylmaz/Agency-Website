import React from "react";
import Logo from "../../public/assets/Logo.jpg";
import Image from "next/image";
import Link from "next/link";

const NavbarLink = [
  { href: "/", key: "home", label: "Home" },
  { href: "/", key: "how_hilink_work", label: "How Hilink Work?" },
  { href: "/", key: "services", label: "Services" },
  { href: "/", key: "pricing ", label: "Pricing " },
  { href: "/", key: "contact_us", label: "Contact Us" },
];

const Navbar = () => {
  return (
    <div className="bg-[#F5F7FA]">
      <div className="flex justify-between h-[84px] items-center px-[144px]">
        <div>
          <Image src={Logo} alt="Logo" width={155} height={24} />
        </div>
        <div className="flex gap-10">
          {NavbarLink.map((item) => (
            <Link
              href={item.href}
              key={item.key}
              className="text-gray-900 font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4 font-medium ">
          <p className="text-sm py-[10px] px-[20px] text-[#4CAF4F]">Login</p>
          <button className="py-[10px] text-sm  font-medium px-[20px] rounded-md text-white bg-[#4CAF4F]">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
