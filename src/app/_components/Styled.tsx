import { styled } from '@kuma-ui/core';

export function Styled() {
  return <Text>Styled</Text>;
}

const Text = styled('p')`
  color: red;
  font-size: 40px;
`;
