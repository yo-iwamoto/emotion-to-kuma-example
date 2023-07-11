'use client';

import { css } from '@emotion/react';

export function MediaQuery() {
  return <p css={styles.text}>MediaQuery</p>;
}

const styles = {
  text: css`
    color: orange;
    font-size: 32px;
    @media screen and (375px <= width < 800px) {
      font-size: 36px;
    }
    @media screen and (800px <= width) {
      font-size: 40px;
    }
  `,
};
