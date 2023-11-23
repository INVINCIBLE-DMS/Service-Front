import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  transition: opacity 0.6s linear, transform 0.6s linear; /* Added transform to the transition property */
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  transform: ${(props) =>
    props.isVisible ? "translateY(0px)" : "translateY(20px)"};
`;

const FadeInBox = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const block = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (block.current) {
        const bottom_of_element =
          block.current.offsetTop + block.current.offsetHeight / 2;
        const bottom_of_window = window.scrollY + window.innerHeight;
        setIsVisible(bottom_of_window > bottom_of_element);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box isVisible={isVisible} ref={block}>
      {children}
    </Box>
  );
};

export default FadeInBox;
