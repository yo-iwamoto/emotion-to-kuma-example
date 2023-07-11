'use client';

import { css } from '@emotion/react';

export function Composition() {
  return <p css={[styles.text, styles.bold]}>Composition</p>;
}

const colorStyle = css`
  color: skyblue;
`;

const FONT_STYLES = {
  lg: 40,
};

const styles = {
  text: css`
    ${colorStyle}
    font-size: ${FONT_STYLES.lg}px;
  `,
  bold: css`
    font-weight: bold;
  `,
};
