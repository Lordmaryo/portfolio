import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";

const NavBar = () => {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#nav-1", "#nav-2", "#nav-3", "#nav-4", "#logo-name"], {
        y: "+=200",
        opacity: 0,
        duration: 0.4,
        delay: 0.5,
        stagger: 0.01,
      }).to(["#nav-1", "#nav-2", "#nav-3", "#nav-4", "#logo-name"], {
        opacity: 1,
        duration: 0.5,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div className="nav-font overflow-hidden flex flex-row justify-between p-5 fixed top-0 right-0 left-0 text-sm">
      <div id="logo-name">
        <Link
          to="/"
          className="transition-all duration-300 hover:text-shadow-glow"
        >
          <span>Ebube Emmanuel</span>
        </Link>
      </div>
      <ul className="flex flex-row gap-5 ">
        <li id="nav-1">
          <Link
            to="/"
            id="test"
            className="transition-all duration-300 hover:text-shadow-glow"
          >
            Home
          </Link>
        </li>
        <li id="nav-2">
          <Link
            to={"info"}
            className="transition-all duration-300 hover:text-shadow-glow"
          >
            Info
          </Link>
        </li>
      </ul>
      <ul className="flex flex-row gap-5 ">
        <li id="nav-3">
          <Link
            to=""
            target="_blank"
            className="flex flex-row gap-2 justify-center items-center transition-all duration-300 hover:text-shadow-glow"
          >
            <span>Resume</span>
            <FaArrowRight className="-rotate-45" />
          </Link>
        </li>
        <li id="nav-4">
          <Link
            to="https://www.linkedin.com/in/ebube-ofoneta-256a5b308/"
            target="_blank"
            className="flex flex-row gap-2 justify-center items-center transition-all duration-300 hover:text-shadow-glow"
          >
            <span>Linkedin</span>
            <FaArrowRight className="-rotate-45" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
