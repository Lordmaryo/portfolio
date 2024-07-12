import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { FaArrowRight } from "react-icons/fa";
import SplitType from "split-type";

const NavBar = () => {
  const test = new SplitType("#test");
  console.log(test);
  
  useLayoutEffect(() => {
    const gsapContext = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from(["#nav-1", "#nav-2", "#nav-3", "#nav-4"], {
        y: "+=200",
        opacity: 0,
        duration: .5,
        delay: 3.5,
        stagger: 0.1,
      }).to(["#nav-1", "#nav-2", "#nav-3", "#nav-4"], {
        opacity: 1,
        duration: .5,
        stagger: 0.1,
      });
    });

    return () => {
      gsapContext.revert();
    };
  }, []);

  return (
    <div className="nav-font flex flex-row justify-between p-5 fixed top-0 right-0 left-0 text-sm">
      <div></div>
      <ul className="flex flex-row gap-5 overflow-hidden">
        <li id="nav-1">
          <Link to="/" id="test">Home</Link>
        </li>
        <li id="nav-2">
          <Link to={"About"}>Info</Link>
        </li>
      </ul>
      <ul className="flex flex-row gap-5 overflow-hidden">
        <li id="nav-3">
          <Link
            to=""
            target="_blank"
            className="flex flex-row gap-2 justify-center items-center"
          >
            <span>Resume</span>
            <FaArrowRight className="-rotate-45" />
          </Link>
        </li>
        <li id="nav-4">
          <Link
            to="https://www.linkedin.com/in/ebube-ofoneta-256a5b308/"
            target="_blank"
            className="flex flex-row gap-2 justify-center items-center"
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
