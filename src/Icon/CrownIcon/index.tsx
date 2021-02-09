import React from 'react';
import styled from 'styled-components';

interface ICrownIconProps {
  className? : string;
}

const CrownIcon: React.FunctionComponent<ICrownIconProps> = (props) => {
  return (
    <svg className={`${props.className}`} xmlns="http://www.w3.org/2000/svg" id="그룹_935" width="34.11" height="22.006" viewBox="0 0 34.11 22.006">
      <g id="그룹_936">
        <g id="그룹_935-2" transform="translate(0 2.987)">
          <path id="패스_7858" d="M447.028 647.149l-7.391 7.09-7.537-10.705-7.539 10.706-7.392-7.09v15.4h29.864z" className="cls-1" transform="translate(-414.963 -643.534)"/>
          <circle id="타원_319" cx="1.887" cy="1.887" r="1.887" className="cls-1" transform="translate(0 .628)"/>
          <path id="패스_7859" d="M584.863 649.08a1.887 1.887 0 1 1-1.887-1.886 1.887 1.887 0 0 1 1.887 1.886z" className="cls-1" transform="translate(-550.753 -646.566)"/>
        </g>
        <path id="패스_7860" d="M496.49 628.019a1.886 1.886 0 1 1-1.885-1.886 1.885 1.885 0 0 1 1.885 1.886z" className="cls-1" transform="translate(-477.55 -626.133)"/>
      </g>
      <path id="패스_7861" fill="#fdf8f3" d="M484.493 701.17l-2.46 1.224.4-2.718-1.924-1.962 2.71-.456 1.271-2.436 1.271 2.436 2.71.456-1.924 1.962.4 2.718z" transform="translate(-467.438 -683.031)"/>
    </svg>
  );
};


export default styled(CrownIcon)`
  .cls-1 { fill:#f8ca13 };
`;