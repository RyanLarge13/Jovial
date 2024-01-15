"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import MenuIcon from "../public/menu-icon.svg";

const Nav = () => {
  const [showNavList, setShowNavList] = useState(false);
  return (
    <nav className="flex justify-between items-center gap-x-20">
      <AnimatePresence>
        {showNavList && (
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex gap-x-10"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>Contact</li>
            <li>About Jovial</li>
          </motion.ul>
        )}
      </AnimatePresence>
      <button onClick={() => setShowNavList((prev) => !prev)}>
        <Image src={MenuIcon} width={30} height={30} alt="menu" />
      </button>
    </nav>
  );
};

export default Nav;
