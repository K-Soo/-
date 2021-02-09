import React from 'react';
import styled from 'styled-components';

interface IThinArrowProps {
  className?: string;
  width?: number;
  height?: number;
  rotate?: string;
  fill?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const ThinArrow: React.FunctionComponent<IThinArrowProps> = (props) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34.932 66.725"
      onClick={props.onClick}
    >
      <g id="그룹_772" transform="translate(-208.775 -414.08)">
        <path id="사각형_1236" d="M0 0H46.971V2H0z" transform="rotate(-45 644.47 -28.735)" />
        <path id="사각형_1237" d="M0 0H46.971V2H0z" transform="rotate(45 -433.488 476.809)" />
      </g>
    </svg>
  );
};


export default styled(ThinArrow)`
  width: ${({ width }) => width ?? "30px"};
  height: ${({ height }) => height ?? "55px"};
  transform: rotate(${({ rotate }) => rotate ?? "0"});
  cursor: pointer;
  path {
    fill: ${({ fill }) => fill ?? "#fff"};
  }
`;