'use client';

import { css } from '@emotion/react';

export function Normal() {
  return <p css={styles.text}>Normal</p>;
}

const styles = {
  text: css`
    color: green;
    font-size: 40px;
  `,
};
