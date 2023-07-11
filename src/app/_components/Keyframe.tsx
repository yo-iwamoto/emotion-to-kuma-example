'use client';

import { css, keyframes } from '@emotion/react';

export function Keyframe() {
  return <p css={styles.text}>Keyframe</p>;
}

const styles = {
  text: css`
    color: purple;
    font-size: 40px;
    animation: ${keyframes`
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    `} 1s linear;
  `,
};
