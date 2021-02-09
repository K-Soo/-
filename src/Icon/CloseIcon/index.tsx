import React from 'react';
import styled from 'styled-components';

interface ICloseIconProps {
  className?: string;
  size?: string;
  fill?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

const CloseIcon: React.FunctionComponent<ICloseIconProps> = (props) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 36.77 36.77"
      onClick={props.onClick}
    >
      <g id="그룹_771" transform="translate(-1046.615 -404.615)">
        <rect id="사각형_1234" width="50" height="2" rx="1" transform="rotate(135 457.601 427.39)" />
        <rect id="사각형_1235" width="50" height="2" rx="1" transform="rotate(45 35.601 1467.39)" />
      </g>
    </svg>
  );
};


export default styled(CloseIcon)`
  width: ${({ size }) => size ?? "37px"};
  height: ${({ size }) => size ?? "37px"};
  cursor: pointer;
  rect {
    fill: ${({ fill }) => fill ?? "#fff"};
  }

`;