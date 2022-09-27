/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, keyframes } from '@emotion/react';

export interface AlertSize {
  height: string;
  width: string;
}

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0px #CCC;
  }
  100% {
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0);
  }
`;
 
const style = (props: AlertSize) => css`
  width: ${props.width};
  height: ${props.height};
  border-radius: 50%;
  box-shadow: 0px 0px 1px 1px #CCC;
  animation: ${pulse} 2s infinite;
`;

export default style;
