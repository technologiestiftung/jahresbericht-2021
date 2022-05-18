import { useEffect, useState, useRef } from "react";

function useOnSectionScroll(ref) {
  useEffect(() => {
    window.addEventListener("scroll", hideNav);
    return () => window.removeEventListener("scroll", hideNav);
  });
}

export default useOnSectionScroll;
