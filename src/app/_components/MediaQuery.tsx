import { css } from '@kuma-ui/core';

export function MediaQuery() {
  return <p className={styles.text}>MediaQuery</p>;
}

const styles = {
  text: css`
    color: orange;
    font-size: 32px;
    @media screen and (sm <= width < md) {
      font-size: 36px;
    }
    @media screen and (md <= width) {
      font-size: 40px;
    }
  `,
};
