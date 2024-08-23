import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { IoIosMail } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);
const Contact = () => {
  const scrollContactRef = useRef<HTMLHeadingElement | null>(null);

  useGSAP(() => {
    gsap.fromTo(
      "#contact-header",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        stagger: 0.02,
        scrollTrigger: {
          trigger: scrollContactRef.current,
          start: "bottom bottom",
          once: true,
          onEnter: () => ScrollTrigger.refresh(),
        },
      }
    );
  }, []);

  // TODO: work on confirmation email to the user
  return (
    <div className="w-full flex flex-row justify-center items-center h-screen">
      <div className="w-[500px]">
        <h1
          id="contact-header"
          ref={scrollContactRef}
          className="text-6xl oswald-font"
        >
          Contact
        </h1>
        <p className="font-bold pb-4">emmanuelofoneta@gmail.com</p>
        <h2 className="text-xl oswald-font">
          Fill the form and i wil get back to you quickly
        </h2>
      </div>
      <form className="w-[500px] flex flex-col gap-4 justify-center">
        <div className="flex justify-between">
          <input
            type="text"
            className="w-[45%] bg-transparent px-2 outline-none border-b-2 placeholder:text-[#dcd2cd93]  border-[#dcd2cd]"
            placeholder="fullname"
          />
          <input
            className="w-[45%] bg-transparent px-2 outline-none border-b-2 placeholder:text-[#dcd2cd93] border-[#dcd2cd]"
            type="email"
            placeholder="email"
          />
        </div>
        <textarea
          className="h-[150px] resize-none bg-transparent px-2 outline-none border-b-2 placeholder:text-[#dcd2cd93] border-[#dcd2cd]"
          placeholder="let's work together..."
        ></textarea>
        <button
          className="flex flex-row items-center justify-center font-bold bg-[#dcd2cd] text-black py-2 gap-2"
          type="submit"
        >
          <span>Send message</span>
          <IoIosMail size={20} />
        </button>
      </form>
    </div>
  );
};

export default Contact;
