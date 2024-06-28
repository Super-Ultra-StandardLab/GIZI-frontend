"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  return (
    <div
      className={`w-screen h-[4vw] flex justify-between px-32 fixed z-50 transition-all duration-500 ${
        scroll ? "bg-white shadow" : ""
      }`}
    >
      <Link href="/" className="my-auto">
        <Image
          src="/assets/logo.png"
          width={200}
          height={200}
          className="w-72 cursor-pointer"
          alt="GIZI_LOGO"
        />
      </Link>
      <div className="flex gap-16">
        {[
          { content: "기지소개", path: "/about" },
          { content: "프로그램", path: "/programs" },
          { content: "기지활동", path: "/activity" },
        ].map((item, index) => (
          <div key={index} className="flex flex-col justify-center ">
            <Link
              href={item.path}
              className="text-xl font-bold cursor-pointer hover:text-[#575757]"
            >
              {item.content}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
