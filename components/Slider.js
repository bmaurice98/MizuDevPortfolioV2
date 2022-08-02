import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const Circle = styled.div`
  position: fixed;
  width: 50px;
  height: 50px;
  bottom: 2rem;
  right: 2rem;
  z-index: 5;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
`;

const ProgressContainer = styled.div`
  height: 8px;
  border-radius: 100%;
`;

const ProgressCircle = styled.div`
  height: 8px;
  border-radius: 100%;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 115px;
  height: 115px;
  border-radius: 50%;
  font-size: 1.85em;
  font-weight: 300;
`;

const DIAMETER = 50;
const STROKE_WIDTH = 6;
const RADIUS = DIAMETER / 2 - STROKE_WIDTH / 2;
const CIRCUMFERENCE = Math.PI * RADIUS * 2;

const Slider = (props) => {
  const { comp } = props;
  const [progress, setProgress] = useState(0);
  const position = Math.max(1 - progress, 0);
  console.log(comp);

  useEffect(() => {
    const handleScroll = () => {
      let scrollPosition = window.pageYOffset;
      let windowSize = window.innerHeight;
      let bodyHeight = document.body.offsetHeight;

      let diff = Math.max(bodyHeight - (scrollPosition + windowSize));

      let diffP = (diff * 100) / (bodyHeight - windowSize);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Circle>
      <svg
        viewBox="0 0 50 50"
        width="100px"
        height="100px"
        className="circle-progress"
      >
        <circle
          cx={DIAMETER / 2}
          cy={DIAMETER / 2}
          r={RADIUS}
          stroke="#57BC90"
          fill="transparent"
          strokeWidth={STROKE_WIDTH}
          style={{
            strokeDasharray: CIRCUMFERENCE,
            strokeDashoffset: CIRCUMFERENCE * position,
          }}
        />
      </svg>
    </Circle>
  );
};

export default Slider;
