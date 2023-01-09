import React, { useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack, Link } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const links = [
  {
    url: "/#projects-section",
    text: "Projects",
  },
  {
    url: "/#contactme-section",
    text: "Contact Me",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const topBarRef = useRef(null);
  useEffect(() => {
    let previousPosition = 0;

    function handleScroll() {
      if (this.scrollY > previousPosition) {
        topBarRef.current.style.transform = "translateY(-200px)";
      } else {
        topBarRef.current.style.transform = "translateY(0)";
      }
      previousPosition = this.scrollY;
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navBarStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    translateY: "0",
    transitionProperty: "transform",
    transitionDuration: ".3s",
    transitionTimingFunction: "ease-in-out",
    backgroundColor: "#18181b",
  };

  return (
    <Box
      position="fixed"
      ref={topBarRef}
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".4s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map((item, index) => (
                <div>
                  <a href={item.url} key={item.url + index}>
                    <FontAwesomeIcon icon={item.icon} size="2x" />
                  </a>
                </div>
              ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link onClick={handleClick("contactme")}>Contact Me</Link>
              <Link onClick={handleClick("projects")}>Projects</Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
