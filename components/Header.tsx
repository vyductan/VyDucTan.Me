import { useRef, useState } from "react";
import { ResumeData } from "../config/resumeData";
import useHandleOutsideClick from "./@vyductan/hooks/useHandleOutsideClick";
import Icon from "./@vyductan/Icon";
// import TypeWriter from "react-typewriter";
import TypeWriter from "typewriter-effect";
import { IconName } from "./@vyductan/Icon/Icon";
import { Link } from "react-scroll";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import Image from "next/image";

type HeaderProps = {
  data: ResumeData["main"];
};
const Header = ({ data }: HeaderProps) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  useHandleOutsideClick(ref, visible, () => setVisible(false));

  useScrollPosition(({ currPos }) => {
    const elm = document.getElementById("nav");
    if (currPos.y < -100) {
      // if (elm) elm.style.backgroundColor = "rbg(0 0 0 / 40%)";
      // if (elm) elm.style.backgroundColor = "rgb(0 0 0 / 70%)";
      if (elm) elm.style.display = "none";
    }
    if (currPos.y < -window.innerHeight + 10) {
      if (elm) elm.style.display = "";
      if (elm) elm.style.backgroundColor = "#000";
    }
    if (currPos.y > -100) {
      if (elm) elm.style.display = "";
      if (elm) elm.style.backgroundColor = "transparent";
    }
  }, []);

  if (!data) return <></>;
  const { name, occupation, description } = data;
  const city = data.address.city;
  const networks = data.social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <Icon name={network.iconName as IconName} />
        </a>
      </li>
    );
  });

  return (
    <header
      id="home"
      style={{
        backgroundImage: `url(/header-background.jpg)`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top center",
        backgroundSize: "cover",
      }}
      className="h-screen flex flex-col"
    >
      <nav ref={ref} id="nav" className="nav">
        <div className="logo">
          <Image src="/logo.png" width={67} height={40} />
        </div>

        <button className="nav-toggle" onClick={() => setVisible(!visible)}>
          <Icon name="Menu" />
        </button>

        <ul className={`${!visible && "hidden"}`}>
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
        <div className="">
          <h1 className="text-white text-[50px] sm:text-[65px] md:text-[80px] lg:text-[100px] leading-normal font-bold text-center">
            <TypeWriter
              options={{
                strings: `I'm ${name}.`,
                autoStart: true,
                cursor: "",
                delay: 100,
              }}
            />
          </h1>
          <h3 className="text-[#A8A8A8] text-center text-base md:text-lg lg:text-xl font-serif max-w-[80%] md:max-w-[100%] m-auto">
            Based in {city}. <span className="text-white">{occupation}</span>.{" "}
            {description}.
          </h3>
          <hr className="my-5 border-[#9696961a]" />
          <ul className="networks">{networks}</ul>
        </div>
      </div>

      <div className="flex justify-center mb-2 md:mb-10">
        <Link
          className="icon hover:bg-[#11ABB0] hover:text-[#000]"
          to="about"
          smooth={true}
        >
          <Icon name="ArrowDown2" className="w-7 h-7 md:w-10 md:h-10" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
