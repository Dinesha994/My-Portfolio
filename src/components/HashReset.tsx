"use client";

import { useEffect } from "react";

export default function HashReset() {
  useEffect(() => {
    if (window.location.hash) {
      const { pathname, search } = window.location;
      // remove the hash from the URL without a reload
      window.history.replaceState(null, "", pathname + search);
      // jump to the top (use 'auto' to avoid jank)
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, []);

  return null;
}
