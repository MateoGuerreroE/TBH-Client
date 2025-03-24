"use client";
import React, { useEffect, useState } from "react";
import styles from "./Wrapped.module.css";
import SearchBar from "@/components/SearchBar";

export default function WrappedSearchBar() {
  const [visibleSearch, isSearchVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const scrollThreshold = window.innerWidth < 768 ? 100 : 200;
      isSearchVisible(currentScrollPos > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.searchBar} ${visibleSearch ? styles.searchBarVisible : ""} w-full`}
    >
      <SearchBar width="w-full" variant="bordered" />
    </div>
  );
}
