import { css } from '@kuma-ui/core';

export function ObjectStyle() {
  return <p className={styles.text}>ObjectStyle</p>;
}

const styles = {
  text: css`
    color: blue;
    font-size: 40px;
  `,
};
