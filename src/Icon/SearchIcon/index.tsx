import React from 'react';
import styled from 'styled-components';
import { FunctionComponent } from 'react';

interface ISearchIconProps {
  className?: string;
  size?: string;
}

const SearchIcon: FunctionComponent<ISearchIconProps> = (props) => {
  return (
    <svg
      className={props.className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 29.5 29.5">
      <path fill="none" d="M0 0h29.5v29.5H0z" />
      <path d="M18.365 16.521h-.971l-.344-.332a8 8 0 1 0-.86.86l.332.344v.971l6.145 6.136 1.833-1.833zm-7.375 0a5.531 5.531 0 1 1 5.531-5.531 5.524 5.524 0 0 1-5.531 5.531z" transform="translate(.688 .688)" />
    </svg>
  );
};


export default styled(SearchIcon)`
    width: ${({ size }) => size ?? "29px"};
    height: ${({ size }) => size ?? "29px"};
    path {
    }
`;