"use client";
import Link, { LinkProps } from "next/link";
import React, { useRef } from "react";
import { useRouter } from "next/navigation";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function TransitionLink({
  children,
  href,
  className,
  ...props
}: TransitionLinkProps) {
  const router = useRouter();
  // const transitionDivRef = useRef<HTMLDivElement | null>(null);
  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();

    const body = document.querySelector("body");

    body?.classList.add("page-transition");

    await sleep(500);
    router.push(href);
    await sleep(1500);

    body?.classList.remove("page-transition");
  };

  return (
    <>
      <Link
        onClick={handleTransition}
        href={href}
        {...props}
        className={className}
      >
        {children}
      </Link>
    </>
  );
}

export default TransitionLink;
