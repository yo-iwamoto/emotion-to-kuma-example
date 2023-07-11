'use client';

import { css } from '@emotion/react';

export function ObjectStyle() {
  return <p css={styles.text}>ObjectStyle</p>;
}

const styles = {
  text: css({
    color: 'blue',
    fontSize: 40,
  }),
};
