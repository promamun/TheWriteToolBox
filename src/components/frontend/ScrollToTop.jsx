import React, { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const r = document.querySelector(".rbt-progress-parent path");
    const n = r.getTotalLength();
    r.style.transition = r.style.WebkitTransition = "none";
    r.style.strokeDasharray = `${n} ${n}`;
    r.style.strokeDashoffset = n;
    r.getBoundingClientRect();
    r.style.transition = r.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    function updateScrollOffset() {
      const t = window.scrollY;
      const e = document.documentElement.scrollHeight - window.innerHeight;
      r.style.strokeDashoffset = n - (t * n) / e;
      setScrollOffset(t);
    }

    updateScrollOffset();

    const handleScroll = () => {
      updateScrollOffset();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {/* Your scroll to top button here */}
      {scrollOffset > 50 ? (
        <div
          className="rbt-progress-parent rbt-backto-top-active"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            className="rbt-back-circle svg-inner"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      ) : (
        <div
          className="rbt-progress-parent"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <svg
            className="rbt-back-circle svg-inner"
            width="100%"
            height="100%"
            viewBox="-1 -1 102 102"
          >
            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
          </svg>
        </div>
      )}
    </>
  );
};
export default ScrollToTop;
