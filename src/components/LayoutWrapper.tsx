"use client";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";

type LayoutWrapperProps = {
  children: React.ReactNode;
};

function LayoutWrapper({ children }: LayoutWrapperProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return <>{loading ? <Loader /> : children}</>;
}

export default LayoutWrapper;
