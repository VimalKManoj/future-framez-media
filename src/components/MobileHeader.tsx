"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import TransitionLink from "@/libs/TransitionLink";

const MobileNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Disable scroll when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // Cleanup on unmount
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <nav className="md:hidden fixed top-0 left-0 p-4 px-6 flex items-center justify-between z-50 w-full">
      {/* Logo Link */}
      <Link href="/">
        <Image src="/Logo_White.png" width={46} height={60} alt="logo" />
      </Link>

      {/* Menu Toggle Icon */}
      <div className="cursor-pointer" onClick={toggleMenu}>
        {isOpen ? (
          <Image width={60} height={50} src="/close.svg" alt="close menu" />
        ) : (
          <Image width={60} height={50} src="/menu.svg" alt="open menu" />
        )}
      </div>

      {/* Fullscreen Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        className="fixed inset-0 bg-black/70 backdrop-blur-lg flex flex-col items-center justify-center overflow-hidden text-white"
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        {/* Menu Items */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center space-y-6 text-2xl"
        >
          <li onClick={toggleMenu}>
            <TransitionLink href="/">Home</TransitionLink>
          </li>
          <li onClick={toggleMenu}>
            <TransitionLink href="/about">About Us</TransitionLink>
          </li>
          <li onClick={toggleMenu}>
            <TransitionLink href="/projects">Works</TransitionLink>
          </li>
          <li onClick={toggleMenu}>
            <TransitionLink href="/#contact">Contact Us</TransitionLink>
          </li>
        </motion.ul>
      </motion.div>
    </nav>
  );
};

export default MobileNavBar;
