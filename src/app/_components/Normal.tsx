import { css } from '@kuma-ui/core';

export function Normal() {
  return <p className={styles.text}>Normal</p>;
}

const styles = {
  text: css`
    color: green;
    font-size: 40px;
  `,
};
