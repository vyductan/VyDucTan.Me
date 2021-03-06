import { useEffect, useState } from "react";
import { ResumeData } from "../config/resumeData";
import TypeWriter from "typewriter-effect";
import { Link } from "react-scroll";
import Image from "next/image";
import { ArrowDown2Icon, MenuIcon } from "./@vyductan/icons";
import Social from "./Index/common/Social";

type HeaderProps = {
  data: ResumeData["main"];
};

const Header = ({ data }: HeaderProps) => {
  const [navVisible, setNavVisible] = useState(false);

  useEffect(() => {
    const elm = document.getElementById("nav");
    const f = () => {
      if (window.scrollY > 100) {
        if (elm) elm.style.display = "none";
      }
      if (window.scrollY > window.innerHeight - 56) {
        // 56 is height of nav
        if (elm) elm.style.display = "";
        if (elm) elm.style.backgroundColor = "#000";
      }
      if (window.scrollY < 100) {
        if (elm) elm.style.display = "";
        if (elm) elm.style.backgroundColor = "";
      }
    };
    document.addEventListener("scroll", f);

    return () => {
      document.removeEventListener("scroll", f);
    };
  }, []);
  if (!data) return <></>;
  const { name, occupation, description } = data;
  // const city = data.address.city;

  return (
    <header
      id="home"
      style={{
        backgroundColor: "#161415",
        backgroundImage: `url(/header-background-10.webp)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
      className="h-screen flex flex-col"
    >
      <nav
        id="nav"
        className="nav"
        style={
          navVisible && window.innerWidth < 768
            ? { height: "100%", backgroundColor: "transparent" }
            : {}
        }
        onClick={() => setNavVisible(!navVisible)}
      >
        <div className="logo">
          <Image alt="logo" src="/logo.png" width={67} height={40} />
        </div>

        <button
          className="nav-toggle"
          onClick={() => setNavVisible(!navVisible)}
          aria-label="Menu"
        >
          <MenuIcon />
        </button>

        <ul className={`${!navVisible ? "hidden" : ""}`}>
          <li className="current">
            <Link
              className="uppercase"
              activeClass="active"
              to="home"
              smooth={true}
              spy={true}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="uppercase"
              activeClass="active"
              to="about"
              smooth={true}
              spy={true}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className="uppercase"
              activeClass="active"
              to="resume"
              smooth={true}
              spy={true}
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              className="uppercase"
              activeClass="active"
              to="portfolio"
              smooth={true}
              spy={true}
            >
              Works
            </Link>
          </li>
          {/*
          <li>
            <Link
              className="uppercase"
              activeClass="active"
              to="testimonials"
              smooth={true}
              spy={true}
            >
              Testimonials
            </Link>
          </li>
          */}
          <li>
            <Link
              className="uppercase"
              activeClass="active"
              to="contact"
              smooth={true}
              spy={true}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex-grow flex items-center justify-center">
        <div className="p-10 md:p-20 bg-gray-900 bg-opacity-40 rounded">
          <h1 className="text-white text-[40px] sm:text-[65px] md:text-[80px] lg:text-[100px] leading-normal font-bold text-center">
            <TypeWriter
              options={{
                strings: `I'm ${name}.`,
                autoStart: true,
                cursor: "",
                delay: 100,
              }}
            />
          </h1>
          <h2 className="text-[#d6d6d6] text-center text-base sm:text-lg md:text-xl lg:text-2xl font-serif max-w-[90%] md:max-w-[100%] m-auto">
            Based in VietNam.{" "}
            <span className="text-white shadow">{occupation}</span>.{" "}
            {description}.
          </h2>
          <hr className="my-5 border-[#9696961a]" />
          <ul className="networks">
            <Social social={data.social} />
          </ul>
        </div>
      </div>

      <div className="flex justify-center mb-2 md:mb-5">
        <Link
          className="text-white hover:text-primary"
          to="about"
          smooth={true}
        >
          <ArrowDown2Icon className="text-4xl md:text-5xl" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
