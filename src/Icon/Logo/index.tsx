import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

interface ILogo {
  className?: string;
  width?: number;
  height?: number;
  rotate?: number;
  fill?: string;
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void
}

let Logo: FunctionComponent<ILogo> = (props) => {
  return (
    <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="95" height="16" viewBox="0 0 95 16">
      <g id="그룹_293" transform="translate(-20 -57)">
        <text id="부동산" fill="#212529" fontFamily="AppleSDGothicNeo-Medium, Apple SD Gothic Neo" fontSize="13px" fontWeight="500" transform="translate(98 69)">
          <tspan x="-16.868" y="0">부동산</tspan>
        </text>
        <g id="그룹_292" transform="translate(-108.547 -286.254)">
          <path id="패스_450" d="M187.237 345.185a.72.72 0 0 0-.791-.71h-8.513v.841h7.239v1.918a5.719 5.719 0 0 1-.289 2.023h-8.507v.842h4.951v1.614h-3.581v.841h7.366v4.358h1.2c.581 0 .87-.212.87-.9v-3.571a.693.693 0 0 0-.723-.724h-3.064V350.1h5.267v-.842h-2.011a3.989 3.989 0 0 0 .589-2.08z" fill="#142a69" transform="translate(-33.548 -.856)"/>
          <path id="패스_451" d="M139.9 371.44h-2.354a1.923 1.923 0 0 1 .274 1.066v2.326c0 .776.275.994 1.079.994h7.306v-.841H139.9z" fill="#142a69" transform="translate(-6.314 -19.77)"/>
          <path id="패스_452" d="M136.15 344.352h-2.768v-1.1H131.1a1.408 1.408 0 0 1 .218.869v.229h-2.769v.842h1.81a3.022 3.022 0 0 0-1.359 2.514 3.345 3.345 0 0 0 6.671 0 3.021 3.021 0 0 0-1.362-2.512h1.841zm-3.822 5.6c-.909 0-1.519-.919-1.529-2.238.01-1.32.62-2.239 1.529-2.239s1.537.92 1.545 2.239c-.008 1.323-.626 2.242-1.545 2.242z" fill="#142a69"/>
          <path id="패스_453" d="M159.44 344.19h-2.353a1.567 1.567 0 0 1 .288 1.082v7.8h1.195c.585 0 .87-.259.87-.9v-4.147h2.037v-.842h-2.037z" fill="#142a69" transform="translate(-20.018 -.657)"/>
          <path id="패스_454" d="M302.325 344.238a1.388 1.388 0 0 1 .408 1.067v11.441h.958c.657 0 .914-.417.914-1.077v-11.431z" fill="#142a69" transform="translate(-121.889 -.69)"/>
          <path id="패스_455" d="M289.586 348.2h-2.019v.841h2.019v6.559h.9c.651 0 .959-.377.959-1.137v-10.225h-2.223a1.465 1.465 0 0 1 .368 1.067z" fill="#142a69" transform="translate(-111.538 -.69)"/>
          <path id="패스_456" d="M230.28 346.694a.668.668 0 0 0-.686-.795h-5.505v.843h4.1c0 2.983-1.793 4.867-4.8 5.37l.372.565c3.882-.46 6.232-2.249 6.516-5.984" fill="#142a69" transform="translate(-66.525 -1.855)"/>
          <path id="패스_457" d="M243.141 344.238h-2.372a1.521 1.521 0 0 1 .367 1.083v.928h-2.157v.843h2.157v1.219h-2.229v.841h2.229v1.924a4.316 4.316 0 0 0-1.735-.357 3.278 3.278 0 1 0 3.741 3.245v-.106zm-3.741 12.094c-1.081 0-1.807-.966-1.817-2.355.01-1.389.736-2.356 1.817-2.356s1.825.967 1.836 2.356c-.011 1.389-.746 2.355-1.836 2.355z" fill="#142a69" transform="translate(-75.142 -.69)"/>
          <path id="패스_458" d="M274.308 346.636a.677.677 0 0 0-.747-.737h-4.851v.843h3.577c0 2.586-1.807 4.218-4.464 5.178a9.628 9.628 0 0 1 6.555 4.006v-2.563a8.538 8.538 0 0 0-3.864-1.7 6.369 6.369 0 0 0 3.794-5.027" fill="#142a69" transform="translate(-97.689 -1.855)"/>
        </g>
      </g>
    </svg>
  );
};

Logo.defaultProps = {
  width: 30,
  height: 55,
  rotate: 0,
  fill: "#fff",
};

Logo = styled(Logo)`
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  transform: rotate(${({ rotate }) => rotate});
  path {
    fill: ${({ fill }) => fill};
  }
`;

export default Logo;