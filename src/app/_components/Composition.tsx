import { css } from '@kuma-ui/core';

export function Composition() {
  return <p className={styles.text}>Composition</p>;
}

const styles = {
  text: css`
    color: skyblue;
    font-size: 40px;
    font-weight: bold;
  `,
};
