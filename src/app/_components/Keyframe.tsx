import { css } from '@kuma-ui/core';

export function Keyframe() {
  return <p className={styles.text}>Keyframe</p>;
}

const styles = {
  text: css`
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    color: purple;
    font-size: 40px;
    animation: fadeIn 1s linear;
  `,
};
